import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* font */
@font-face {
    font-family: 'pretendardReg';
    src: url('/src/assets/fonts/Pretendard-Regular.woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'pretandardBold';
    src: url('/src/assets/fonts/Pretendard-Bold.woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'jalnan';
    src: url('/src/assets/fonts/Jalnan.woff');
    font-weight: normal;
    font-style: normal;
}


/* theme */
html {
    // colors
    --primary-color: #FF9800;
    --secondary-color: #F57C00;
    --tertiary-color: #FFF3E0;
    --accent-color: #20BA9B;
    --text-color-default : #333;
    --text-color-white: #fff;
    --text-color-gray1:rgb(141, 141, 141);
    --text-color-gray2: #ced4da;
    --bg-color-white: #fff;
    --bg-color-ivory: #FFF3E0;

    //size
    --header-height: 68px;
    --footer-height: 200px;
    --mobile-header-height: 56px;
    --mobile-footer-height: 300px;
    --mobile-nav-height: 60px;

    //font
    --default-font: 'pretendardReg';
    --bold-font: 'pretandardBold';
    --accent-font : 'jalnan'

    //transition
    --transition-default: 'all 300ms'
}

html.dark {
    
}

/* reset */

*, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--default-font), sans-serif;
    font-size: 14px;
    color: var(--text-color-default);
}

button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
}

img {
    display: block;
    width: 100%;
}

input[type='text'],input[type='password'],input[type='email'] {
    outline: none;
    border: none;
}

a {
    text-decoration: none;
    color: var(--text-color-default);
}

ul,ol,li {
    list-style: none;
}
`;

export default GlobalStyle;
