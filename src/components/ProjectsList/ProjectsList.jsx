import React from 'react'
import { ImageWrapper, ProjectDescription, ProjectImage, ProjectTemplate, ProjectTitle, StyledLine } from '../Projects/Styles'
import Button from '../UI/Button/Button'

const ProjectsList = ({ items }) => {
    return items.map((card, index) =>
        <ProjectTemplate key={index}>
            <ImageWrapper>
                <ProjectImage path={card.path} />
            </ImageWrapper>
            <ProjectTitle>
                {card.title}
            </ProjectTitle>
            <StyledLine />
            <ProjectDescription>
                {card.description}
            </ProjectDescription>
            <Button width="20rem" heigth="6rem" font-size="2rem" href={card.link} target="_blank" margin="1rem 0 0 0">
                Look it up
            </Button>
        </ProjectTemplate>
    )
}

export default ProjectsList