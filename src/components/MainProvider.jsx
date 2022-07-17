import React from 'react'
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyledTheme } from '../styles/Theme'
import { store } from "../redux/store/index"

const MainProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={StyledTheme}>
                <Router>
                    {children}
                </Router>
            </ThemeProvider>
        </Provider>
    )
}

export default MainProvider