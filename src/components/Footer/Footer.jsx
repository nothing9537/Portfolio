import React from 'react'
import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'
import { ContactLabel, ContactWrapper, SocialWrapper, StyledFooter } from './Styles'

const Footer = () => {
    return (
        <StyledFooter>
            <ContactWrapper>
                <ContactLabel>
                    Call me: <br />
                    <a href="tel:+420606117387">+420606117387</a>
                </ContactLabel>
                <ContactLabel>
                    Email: <br />
                    <a href="mailto:nothing9537@gmail.com" target="_blank">nothing9537@gmail.com</a>
                </ContactLabel>
            </ContactWrapper>
            <SocialWrapper>
                <Github width={48} height={48} link="https://github.com/nothing9537"  />
                <Linkedin width={48} height={48} link="https://www.linkedin.com/in/vadym-monastyrskyi-684293244/" />
            </SocialWrapper>
        </StyledFooter>
    )
}

export default Footer