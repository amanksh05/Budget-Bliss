import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color:white;
}
/* :root {
    --primary-color: #222260;
    --primary-color2: rgba(34, 34, 96, 0.6);
    --primary-color3: rgba(34, 34, 96, 0.4);
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
} */
body {
    background-color: #0F0F0F;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1rem,1.5vw,1.2rem);
    overflow:hidden;
    // color :rgba(34,34,96,.6);
    // color : #fafafa; // white color
    color : #0F0F0F; //  color
}
/* Custom styles for the select options */
.custom-select option {
    background-color: white;
    color: black;
}

.custom-select:focus option {
    background-color: #c9c9c9; /* Tailwind gray-200 */
    font-weight: 500;
    color: #222222;
}

.custom-select option:hover {
    background-color: #e5e7eb; /* Tailwind gray-300 */
    color: black;
}


.plus-jakarta-sans-regular {
    font-weight: 400;
}
.plus-jakarta-sans-medium {
    font-weight: 500;
}
.plus-jakarta-sans-semibold {
    font-weight: 600;
}
.plus-jakarta-sans-bold {
    font-weight: 700;
}
.plus-jakarta-sans-extrabold {
    font-weight: 800;
}

h1,h2,h3,h4,h5,h6{
    /* color: var(--primary-color); */
}

`;
