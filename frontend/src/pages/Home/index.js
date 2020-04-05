/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { parseISO } from 'date-fns';
import { Form } from '@unform/web';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Input from '~/components/Input';
import Select from '~/components/Select';
import DatePicker from '~/components/DatePicker';

import { api, states as statesApi } from '~/services/api';
import Validator from '~/utils/CpfValidation';
import { Container, Content, Button } from './styles';

export default function Home() {
  const [states, setStates] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [howDidYouMeetUs, setHowDidYouMeetUs] = useState([]);
  const [client, setClient] = useState(null);
  const [, option, userId] = useLocation().pathname.split('/');
  const [date, setDate] = useState(null);
  const [reasonSelected, setReasonSelected] = useState('');
  const [aboutSelected, setAboutSelected] = useState('');
  const [stateSelected, setStateSelected] = useState('');
  console.tron.log(stateSelected);
  async function handleSubmit(data, { reset }) {
    if (option === 'atualizar') {
      try {
        if (data.cpf > 0) {
          if (!Validator(data.cpf)) {
            toast.error('CPF ou CNPJ invalido');
            return;
          }
        }
        await api.put(`/clients/${userId}`, {
          ...data,
          about_firgun_id: aboutSelected.id,
          reason_id: reasonSelected.id,
          state: stateSelected.value,
        });

        toast.success('Dados atualizados com sucesso !!');
      } catch (err) {
        toast.error(err.response.data.error);
      }
    } else {
      try {
        if (data.cpf > 0) {
          if (!Validator(data.cpf)) {
            toast.error('CPF ou CNPJ invalido');
            return;
          }
        }
        await api.post('/clients', {
          ...data,
          about_firgun_id: data.about_firgun,
          reason_id: data.reason,
        });
        toast.success('Cliente cadastrado com sucesso !!');
        reset();
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }
  }
  async function loadReasons() {
    try {
      const response = await api.get('/reasons');
      setReasons(response.data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function loadHoDidYouMeetUs() {
    try {
      const response = await api.get('/aboutus');
      setHowDidYouMeetUs(response.data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function loadClients() {
    try {
      if (option === 'atualizar') {
        const response = await api.get('/clients');
        const responseState = await statesApi.get('/estados');
        const user = response.data.rows.find((u) => u.id === Number(userId));
        const findState = responseState.data.find((s) => s.id === user.state);
        setClient(user);
        setReasonSelected(user.reason);
        setAboutSelected(user.about_firgun);
        setStateSelected({ value: findState.id, label: findState.nome });
      }
      return;
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function loadStates() {
    try {
      const response = await statesApi.get('/estados');
      const data = response.data.map((state) => ({
        value: state.id,
        label: state.nome,
      }));
      setStates(data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  useEffect(() => {
    loadStates();
    loadClients();
    loadReasons();
    loadHoDidYouMeetUs();
  }, [userId, option]);

  return (
    <Container>
      <Content>
        <header>
          <h1>Formulario para requisitar crédito</h1>
        </header>
        <Form onSubmit={handleSubmit} initialData={client}>
          <label htmlFor="first_name" style={{ gridArea: 1 }}>
            <strong>Nome</strong>
            <Input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="Joselito"
            />
          </label>
          <label htmlFor="last_name" style={{ gridArea: 1 }}>
            <strong>Sobrenome</strong>
            <Input
              name="last_name"
              id="last_name"
              type="text"
              placeholder="Santos"
            />
          </label>

          <label
            htmlFor="email"
            style={{ gridArea: 2, gridColumnStart: 1, gridColumnEnd: 3 }}
          >
            <strong>E-mail</strong>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
            />
          </label>
          <label htmlFor="phone" style={{ gridArea: 3 }}>
            <strong>Telefone</strong>
            <Input
              id="phone"
              name="phone"
              type="number"
              placeholder="Telefone"
            />
          </label>
          <label htmlFor="cellphone" style={{ gridArea: 3 }}>
            <strong>Celular</strong>
            <Input
              name="cellphone"
              id="cellphone"
              type="number"
              placeholder="Celular"
            />
          </label>
          <label htmlFor="birth_date" style={{ gridArea: 4 }}>
            <strong>Data de nascimento</strong>
            <DatePicker
              id="birth_date"
              name="birth_date"
              locale={pt}
              selected={client ? parseISO(client.birth_date) : date}
              onChange={setDate}
              dateFormat="d'/'MM'/'yyyy"
            />
          </label>
          <label htmlFor="cep" style={{ gridArea: 4 }}>
            <strong>Cep</strong>
            <Input id="cep" name="cep" type="number" placeholder="28896564" />
          </label>
          <label htmlFor="state" style={{ gridArea: 5 }}>
            <strong>Estado</strong>
            <Select
              id="state"
              name="state"
              placeholder="Rio de Janeiro"
              options={states}
              value={stateSelected}
              onChange={(s) => setStateSelected(s)}
            />
          </label>

          <label htmlFor="city" style={{ gridArea: 5 }}>
            <strong>Cidade</strong>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Rio de Janeiro"
            />
          </label>
          <label htmlFor="cpf" style={{ gridArea: 6 }}>
            <strong>CPF ou CNPJ</strong>
            <Input
              id="cpf"
              name="cpf"
              type="number"
              placeholder="16956919911"
            />
          </label>
          <label htmlFor="value" style={{ gridArea: 6 }}>
            <strong>Valor</strong>
            <Input id="value" name="value" type="number" placeholder="450" />
          </label>
          <label htmlFor="about_firgun" style={{ gridArea: 7 }}>
            <strong>Como soube do firgun ?</strong>
            <Select
              id="about_firgun"
              name="about_firgun"
              placeholder="redes sociais"
              options={howDidYouMeetUs}
              onChange={(a) => setAboutSelected(a)}
              value={aboutSelected}
            />
          </label>
          <label htmlFor="reason">
            <strong>Motivo do credito</strong>
            <Select
              id="reason"
              name="reason"
              style={{ gridArea: 7 }}
              placeholder="Financiamento"
              options={reasons}
              onChange={(r) => setReasonSelected(r)}
              value={reasonSelected}
            />
          </label>

          <Button
            style={{ gridArea: 8, gridColumnStart: 1, gridColumnEnd: 3 }}
            type="submit"
          >
            cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
