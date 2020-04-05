import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Header() {
  const { signed } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <header>
        <aside>
          <Link to="/">
            <h1>Firgun</h1>
          </Link>
        </aside>
        <nav>
          {signed ? (
            <div>
              <p>Olá {profile.name}</p>
              <button onClick={handleSignOut} type="button">
                Sair
              </button>
            </div>
          ) : (
            <Link to="/login">Entrar</Link>
          )}
        </nav>
      </header>
    </Container>
  );
}
