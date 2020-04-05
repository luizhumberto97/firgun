import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import findState from '~/utils/findState';
import { Container } from './styles';
import { formatPrice } from '~/utils/formatPrice';
import { api, states as statesApi } from '~/services/api';

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [states, setStates] = useState([]);
  const user = useSelector((state) => state.user.profile);

  async function loadStates() {
    try {
      const response = await statesApi.get('/estados');
      setStates(response.data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function loadClients() {
    try {
      const response = await api.get('/clients');
      const data = response.data.rows.map((r) => ({
        ...r,
        formattedValue: formatPrice(r.value),
      }));
      setClients(data);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  useEffect(() => {
    loadStates();
    loadClients();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>EMAIL</th>
            <th>ESTADO</th>
            <th>VALOR</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client) => {
              return (
                <tr>
                  <td>{`${client.first_name} ${client.last_name}`}</td>
                  <td>{client.cpf}</td>
                  <td>{client.email}</td>
                  <td>{findState(states, client.state)}</td>
                  <td>{client.formattedValue}</td>
                  {user.adm ? (
                    <td>
                      <div>
                        <Link to={`/atualizar/${client.id}`}>Editar</Link>
                      </div>
                    </td>
                  ) : null}
                </tr>
              );
            })
          ) : (
            <h4>Não há clientes cadastrados</h4>
          )}
        </tbody>
      </table>
    </Container>
  );
}
