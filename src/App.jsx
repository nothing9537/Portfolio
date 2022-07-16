import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles, StyledTheme } from './styles/Styles'
import Header from "./components/Header/Header"
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer/Footer'

const App = () => {

    const { theme } = useSelector(state => state.theme)

    return (
        <Router>
            <ThemeProvider theme={StyledTheme}>
                <div className={`App ${theme === "dark" ? "dark" : "white"}`}>
                    <GlobalStyles />
                    <Header />
                    <AppRoutes />
                    <Footer />
                </div>
            </ThemeProvider>
        </Router>
    )
}

export default App