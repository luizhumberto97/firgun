import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #676aeb;
    padding: 15px;
    border-radius: 4px;
    height: 250px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      align-self: center;
      color: #fff;
    }
    input {
      width: 100%;
      height: 25px;
      border-radius: 4px;
      border: 0;
      padding: 0 15px;
      font-size: 1.3rem;
      color: #ac45ff;
    }

    button {
      width: 100%;
      border: 0;
      font-weight: bold;
      height: 25px;
      border-radius: 4px;
      background: #ac45ff;
      font-size: 1.3rem;
      color: #fff;
      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: #676aeb;
      }
    }

    a {
      align-self: center;
      font-weight: bold;
      color: #fff;
      font-size: 1.3rem;
      transition: all 0.2s ease;

      &:hover {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
