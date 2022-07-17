import React from 'react'
import { GlobalStyles } from './styles/Styles'
import Header from "./components/Header/Header"
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer/Footer'

const App = () => {

    return (
        <div className={`App`}>
            <GlobalStyles />
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    )
}

export default App