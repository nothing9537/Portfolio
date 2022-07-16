import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import AboutMe from '../components/AboutMe/AboutMe'
import Description from '../components/Description/Description'
import Layout from '../components/Layout/Layout'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'

const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])

    return (
        <>
            <Description />
            <Layout>
                <Projects />
                <Technologies />
                <AboutMe />
            </Layout>
        </>
    )
}

export default Home