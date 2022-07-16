import styled from "styled-components"

export const StyledDescription = styled.div`
    max-width: 142.8rem;
    margin: 0 auto;
    width: 100%;
    margin-top: 10rem;
    background-image: url("/public/images/pattern.svg");
    background-position: right;
    background-repeat: no-repeat;
    height: 75.8rem;
    /* padding-left: 19.2rem; */
`

export const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 9.6rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 3.4rem;
`

export const StyledInfo = styled.section`
    margin-left: 4rem;
    font-style: normal;
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: ${props => props.theme.colors.information};
    max-width: 90rem;
`
