import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  *:focus{
    outline:0;
  }

  html, body, .App  {
    height:100%;
  }

  #root{
    min-height:100vh;
  }

  html{
    font-size: 62.5%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    max-width:1500px;
  }

  body, input, button{
    font: 1.2rem arial, helvetica, sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer
  }
`;
