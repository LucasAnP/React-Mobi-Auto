import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    flex-direction: column;

    h1 {
        color: ${props => props.theme.color.text};

        font: 700 36px Roboto bold;

        text-align: center;
    }
`

export const FormContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    padding: 20px 40px 30px 40px;

    background-color: ${({ theme }) => theme.color.inputs_background};
`

export const ResultFormContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    padding: 20px 40px 20px 40px;
`

export const SpecificFormContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 20px;
`

export const ButtonContainer = styled.div`
    margin-top: 20px;
`

export const ButtonRounded = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.7rem;
    width: 8.5rem;

    border-radius: 30px;
    border: none;

    background-color: ${props => props.theme.color.value_button_background};
`

export const ButtonText = styled.text`
    font: 700 22px Roboto;

    text-align: center;

    color: ${({ theme }) => theme.color.button_enabled_text};
`

export const TextAfterResult = styled.text`
    color: #7c828b;
    font: 400 16px Roboto;

    text-align: center;
`
