import React from 'react'
import Button from '../UI/Button/Button'
import { StyledDescription, StyledInfo, StyledTitle } from './Styles'

const Description = () => {

    return (
        <StyledDescription>
            <StyledTitle>
                Hi! :) <br /> This is a portfolio site that <br /> I developed for a job search.
            </StyledTitle>
            <StyledInfo>
                This is Nothingg9537's Front-end developer portfolio site for job searches. Most of my skills are here, so I hope you will be interested in my candidacy! <a href="">(See GitHub sources of this project)</a>
            </StyledInfo>
            <Button margin="7.3rem 0 0 7rem" href="#projects">
                Let's begin!
            </Button>
        </StyledDescription>
    )
}

export default Description