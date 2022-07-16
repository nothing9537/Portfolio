import React from 'react'
import { StyledLayout } from './Styles'

const Layout = ({children, ...props}) => {

    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}

export default Layout