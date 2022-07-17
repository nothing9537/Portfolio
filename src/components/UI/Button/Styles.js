import styled from "styled-components"

export const StyledButton = styled.a`
    cursor: pointer;
    text-decoration: none;
    max-width: ${props => props.width || "28rem"};
    width: 100%;
    height: ${props => props.heigth || "8rem"};
    background: ${props => props.theme.colors.mainGradient};
    border-radius: 8.3rem;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: ${props => props["font-size"] || "2.8rem"};
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white};
    margin: ${ props => props.margin || 0 };
`