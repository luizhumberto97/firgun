import React from 'react';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';
import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Fazer Login</h1>
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <button type="submit">{loading ? 'carregando...' : 'Logar'}</button>
        <Link to="/">Voltar para o formulario</Link>
      </Form>
    </Container>
  );
}
