import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
        font: 400 16px Roboto;
    }
`
