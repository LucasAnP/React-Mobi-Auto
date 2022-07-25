import styled from 'styled-components'

interface ButtonProps {
    disabled: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.5rem;
    width: 10.5rem;

    border-radius: 3px;
    border: none;

    background-color: ${({ disabled, theme }) =>
        disabled ? theme.color.disabled : theme.color.primary};
`

export const ButtonText = styled.text<ButtonProps>`
    color: ${({ disabled, theme }) =>
        disabled
            ? theme.color.button_disabled_test
            : theme.color.button_enabled_text};
    font: 500 16px Roboto, sans-serif;
    text-align: center;
`
