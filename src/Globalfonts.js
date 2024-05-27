import { createGlobalStyle } from "styled-components";

    export default createGlobalStyle`
    body {
        font-family: 'LINE-Rg', sans-serif;
    }

    @font-face {
        font-family: 'LINE-Rg';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
        /* font-weight: 400; */
        font-style: normal;
    }
    
    @font-face {
        font-family: 'LINE-Bd';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
        /* font-weight: 700; */
        font-style: normal;
    }
`;