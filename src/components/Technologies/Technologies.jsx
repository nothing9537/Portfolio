import React from 'react'
import List from '../List/List'
import Title from '../Title/Title'
import ProgressBar from '../UI/ProgressBar/ProgressBar'
import { ListWrapper, ProgressWrapper, StyledTechnologies } from './Styles'

const Technologies = () => {

    const firstItems = ["Git", "ECharts", "Lightweight-charts", "Apex-charts", "Rest API", `Basic databases`]
    const secondItems = ["High workload", "Communication Skills", "Quick learning", "Experience with back-end"]
    const thirdItems = ["Czech language A2", "English language B1", "Russian (native)", "Ukrainian (native)"]

    return (
        <StyledTechnologies>
            <a name="technologies"></a>
            <Title>
                Technologies
            </Title>
            <ProgressWrapper>
                <ProgressBar percent="86%" firstItem="HTML" secondItem="Advanced" />
                <ProgressBar percent="86%" firstItem="CSS/SASS/Responsive & Adaptive layout" secondItem="Advanced" />
                <ProgressBar percent="86%" firstItem="React (Hooks/Class Components)" secondItem="Advanced" />
                <ProgressBar percent="70%" firstItem="Styled Components" secondItem="Regular" />
                <ProgressBar percent="90%" firstItem="JavaScript(ES6+)/TypeScript" secondItem="Advanced/Regular" />
                <ProgressBar percent="20%" firstItem="Next.js" secondItem="Begginer" />
                <ProgressBar percent="25%" firstItem="Apollo/GraphQl" secondItem="Begginer" />
                <ProgressBar percent="45%" firstItem="UI Libraries (Material UI, ANTD)" secondItem="Regular" />
                <ProgressBar percent="75%" firstItem="Redux/Redux Toolkit" secondItem="Advanced" />
            </ProgressWrapper>
            <Title font-size="4rem">
                Additional technologies and skills
            </Title>
            <ListWrapper>
                <List items={firstItems} />
                <List items={secondItems} />
                <List items={thirdItems} />
            </ListWrapper>
        </StyledTechnologies>
    )
}

export default Technologies