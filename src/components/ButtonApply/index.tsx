import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

interface ButtonApplyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function ButtonApply({ ...rest }: ButtonApplyProps) {
    return (
        <ButtonContainer {...rest}>
            <ButtonText>
                Consultar preço
            </ButtonText>
        </ButtonContainer>

    )
}
