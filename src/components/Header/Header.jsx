import React from 'react'
import Logo from "../../assets/Logo"
import Github from "../../assets/Github"
import Linkedin from "../../assets/Linkedin"
import { StyledHeader, StyledLinks, StyledLogo, StyledNavbar, StyledSocial } from './Styles'

const Header = (props) => {

    return (
        <StyledHeader {...props}>
            <StyledNavbar>
                <StyledLogo>
                    <Logo />
                    <span>Portfolio</span>
                </StyledLogo>
                <StyledLinks>
                    <a href="#projects">Projects</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#about-me">About me</a>
                </StyledLinks>
                <StyledSocial>
                    <Github link="https://github.com/nothing9537" />
                    <Linkedin link="https://www.linkedin.com/in/vadym-monastyrskyi-684293244/" />
                </StyledSocial>
            </StyledNavbar>
        </StyledHeader>
    )
}

export default Header