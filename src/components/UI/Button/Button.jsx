import React from 'react'
import { StyledButton } from './Styles'

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button