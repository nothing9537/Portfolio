import React from 'react'
import Title from '../Title/Title'
import Steps from '../UI/Steps/Steps'
import { StyledAboutMe } from './Styles'

const AboutMe = () => {

    const items = [
        { label: "2020", text: "Moving from Donetsk to Kharkov to study at the Kharkov Polytechnic Institute in the speciality of Applied Mathematics. Getting started with Front-end learning." },
        { label: "2021 (spring)", text: "A serious study of Front-end on the Udemy platform, which consisted of three different courses." },
        { label: "2021-2022", text: "Communication with more experienced people, project development on Freelance, practice of new technologies, constant improvement the quality of code." },
        { label: "2022", text: "Moving to Prague from War, learning Czech language from Charles University at UJOP, looking for an official job :)" },
    ]

    return (
        <StyledAboutMe>
            <a name="about-me"></a>
            <Title>
                About Me
            </Title>
            <Steps items={items} />
        </StyledAboutMe>
    )
}

export default AboutMe