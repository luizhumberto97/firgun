import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #676aeb;
  padding: 0 20px;

  header {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    aside {
      h1 {
        font-size: 3.2rem;
        letter-spacing: 0.6rem;
        color: #fff;
      }
    }

    nav {
      div {
        display: flex;
        height: 100%;
        align-items: center;

        p {
          font-size: 1.6rem;
          margin-right: 10px;
          color: #fff;
          font-weight: bold;
        }
        button {
          height: 30px;
          width: 80px;
          background: #ac45ff;
          font-size: 1.6rem;
          border-radius: 5px;
          border: 0;
          color: #fff;
          transition: all 0.4s ease;

          &:hover {
            background: #eb3441;
          }
        }
      }

      a {
        font-size: 1.6rem;
        background: #ac45ff;
        width: 100px;
        display: block;
        height: 30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
