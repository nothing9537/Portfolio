import styled from "styled-components"

export const StyledProjects = styled.div`
    margin-top: 25rem;
    margin-bottom: 25rem;
`

export const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 9.6rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 9rem;
`

export const GridLayout = styled.div`
    padding-left: 7.3rem;
    display: grid;
    gap: 9rem 22rem;
    grid-template-columns: 1fr 1fr;
`

export const ProjectTemplate = styled.div`
    padding: 2.5rem;
    max-width: 55rem;
    justify-content: space-between;
    width: 100%;
    /* height: 70rem; */
    height: fit-content;
    background: #0F1624;
    box-shadow: 0 0 1.2rem ${props => props.theme.colors.white};
    border-radius: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageWrapper = styled.div`
    max-width: 50rem;
    width: 100%;
    height: 26.6rem;
    border-radius: .8rem;
    margin-bottom: 2.5rem;
`

export const ProjectImage = styled.div`
    background-image: url("/public/images/${props => props.path}.png");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: .8rem;
    width: 100%;
    height: 100%;
`

export const ProjectTitle = styled.h3`
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 88.5%;
    color: ${props => props.theme.colors.white};
    margin-bottom: 2.5rem;
`

export const StyledLine = styled.hr`
    max-width: 30rem;
    width: 100%;
    border-radius: 8rem;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    height: .4rem;
`

export const ProjectDescription = styled.div`
    margin-top: 2.5rem;
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white}
`