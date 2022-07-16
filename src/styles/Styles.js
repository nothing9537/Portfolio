import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-style: normal;
        letter-spacing: 0.05em;
    }

    html {
        font-family: Poppins, sans-serif;
        font-size: 10px;
    }

    img, svg {
        user-select: none;
    }

    .App {
        width: 100vw;
        height: 100vh;
        position: relative;
        /* display: flex; */
        /* flex-direction: column; */
        overflow-x: hidden;
        scroll-behavior: smooth;
        background: ${props => props.theme.colors.background};
    }    
`

export const StyledTheme = {
    colors: {
        black: "#000",
        white: "#fff",
        background: "#0F1624",
        information: "#BCBCBC"
    }
}