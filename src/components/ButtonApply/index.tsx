import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

interface ButtonApplyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled: boolean
}

export function ButtonApply({ disabled, ...rest }: ButtonApplyProps) {
    return (
        <ButtonContainer disabled={disabled} {...rest}>
            <ButtonText disabled={disabled}>
                Consultar preço
            </ButtonText>
        </ButtonContainer>

    )
}
