import React from 'react'
import ProjectsList from '../ProjectsList/ProjectsList'
import Title from '../Title/Title'
import { GridLayout, StyledProjects } from './Styles'

const Projects = () => {

    const items = [
        { path: "angick", title: "Angick", description: "A site for businesses in America that transports expensive, and not just in America. My main project.", link: "https://angick.com" },
        { path: "alermo", title: "Alermo.net", description: "Site for the project game servers on the game Counter-Strike: Global Offensive. At the moment without any back-end.", link: "https://github.com/nothing9537/Alermo" },
        { path: "ship-cars", title: "Ship Cars", description: "Order management panel for Angick. For brokers, drivers, customers and others who are interested in transportation. Also need a back-end.", link: "https://github.com/nothing9537/sl-frontend" },
        { path: "food", title: "Food", description: "One of the projects I developed when I was in training. Finished layout without some of the logic, because it required a switch to React.", link: "" },
    ]

    return (
        <StyledProjects>
            <a name="projects"></a>
            <Title>
                Projects
            </Title>
            <GridLayout>
                <ProjectsList items={items} />
            </GridLayout>
        </StyledProjects>
    )
}

export default Projects