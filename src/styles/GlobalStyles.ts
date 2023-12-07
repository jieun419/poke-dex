import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --bg-color: ${(props) => props.theme.colors.bgColor};
    --box-color: ${(props) => props.theme.colors.boxColor};
    --text-color: ${(props) => props.theme.colors.textColor};
    --icon-color: ${(props) => props.theme.colors.iconColor};
    --icon-box-color: ${(props) => props.theme.colors.iconBoxColor};
    --border-color: ${(props) => props.theme.colors.borColor};
  }
    // 적용시킬 css 입력
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
        font-size: 16px;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
        background-color: var(--bg-color);
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
