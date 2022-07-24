import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    width: 10.5rem;

    border-radius: 3px;
    border: none;

    background-color: ${props => props.theme.color.primary};
`

export const ButtonText = styled.text`
    color: #fdfcf8;
    font: 500 12px Roboto;

    text-align: center;
`
