import styled from "styled-components";

export const StepsWrapper = styled.div`

`

export const StepsRound = styled.div`
    padding: 1.6rem;
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    position: relative;
`

export const StepsLine = styled.hr`
    height: 1.2rem;
    background: ${props => props.theme.colors.white};
    width: 100%;
    border: none;
`

export const LineWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const StepsText = styled.div`
    position: absolute;
    width: 34.7rem;
    left: -13rem;
    top: 4rem;
    height: fit-content;
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white};
`

export const LabelText = styled.span`
    bottom: 3.5rem;
    left: -2.5rem;
    position: absolute;
    font-weight: 600;
    font-size: 3.3rem;
    line-height: 5.4rem;
    color: ${props => props.theme.colors.white};
    width: fit-content;
`