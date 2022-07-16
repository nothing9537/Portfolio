import React from 'react'
import { StyledTitle } from './Styles'

const Title = ({ children, ...props }) => {
    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    )
}

export default Title