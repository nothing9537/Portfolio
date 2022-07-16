import styled from "styled-components";

export const StyledList = styled.ul`
    
`

export const ListItem = styled.li`
    font-weight: 600;
    font-size: 3rem;
    line-height: 5.4rem;
    color: ${ props => props.theme.colors.white };
    margin-bottom: 3.2rem;
    display: flex;
    align-items: center;
    &::before {
        content: " ";
        width: 1rem;
        height: 1rem;
        background: #fff;
        border-radius: 50%;
        margin-right: 1rem;
    };
`