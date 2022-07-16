import styled from "styled-components"

export const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: ${props => props["font-size"] || "6.4rem"};
    line-height: 9.6rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 9rem;
`