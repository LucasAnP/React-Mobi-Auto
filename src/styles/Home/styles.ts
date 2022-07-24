import styled from 'styled-components'

interface ContainerProps {
    resulted: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, resulted }) =>
        resulted ? theme.color.result_page_background : theme.color.background};

    p {
        color: ${props => props.theme.color.text};
        font: 700 22px Roboto;

        text-align: center;
        margin: 15px 0;
    }
`
