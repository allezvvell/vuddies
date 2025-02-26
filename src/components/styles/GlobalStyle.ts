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

    //size
    --header-height: 80px;
    --footer-height: 200px;
    --mobile-nav-height: 56px;

    //font
    --default-font: 'pretendardReg';
    --bold-font: 'pretandardBold';
    --accent-font : 'jalnan'
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
}

button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
}

image {
    display: block;
    width: 100%;
}

input[type='text'] {
    outline: none;
    border: none;
}
`;

export default GlobalStyle;
