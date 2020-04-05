import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  table {
    width: 100%;
    max-width: 1200px;
    background: #ac45ff;

    thead {
      background: #676aeb;

      tr {
        height: 35px;
        line-height: 35px;

        th {
          color: #fff;
          font-weight: bold;
          text-align: center;
        }
      }
    }

    tbody {
      background: #fff;
      color: #fff;

      tr {
        height: 35px;
        line-height: 35px;
        transition: all 0.2s ease;

        &:hover {
          background: #676aeb;
          color: #fff;
        }

        td {
          text-align: center;
          color: #000;

          &:hover {
            color: #fff;
          }

          div {
            a {
              font-weight: bold;
              color: #000;
              font-size: 1.4rem;
              transition: color 0.2s ease;

              &:hover {
                color: #76fff6;
              }
            }
          }
        }
      }
    }
  }
`;
