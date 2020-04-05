import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #676aeb;
  height: 500px;
  margin-bottom: 60px;

  header {
    width: 100%;
    background: #ac45ff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;
    }
  }

  form {
    margin-top: 40px;
    height: 100%;
    justify-content: center;
    width: 100%;
    align-items: center;
    width: 50%;
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 30px;
    grid-auto-columns: 250px;
    grid-area: '1 1' '2 2' '3 3' '4 4' '5 5' '6 6' '7 7' '8';

    label {
      strong {
        color: #ac45ff;
      }

      input {
        width: 100%;
        height: 25px;
        border-radius: 4px;
        padding: 0 15px;
        font-size: 1.2rem;
        border: 0;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bold;
        border: 1px solid #676aeb;
        background: rgba(103, 106, 235, 0.3);
        &::placeholder {
          color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

export const Button = styled.button`
  height: 25px;
  border-radius: 4px;
  border: 0;
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  background: #ac45ff;
`;
