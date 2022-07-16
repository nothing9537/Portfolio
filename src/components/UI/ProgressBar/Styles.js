import styled from "styled-components"

export const StyledProgressBarWrapper = styled.div`
    /* max-width: ${ props => props.width || "132rem" }; */
    height: ${ props => props.heigth || "3.2rem" };
    width: 100%;
    background: #162950;
    border-radius: 8rem;
    position: relative;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledProgressBarProgress = styled.div`
    transition: .3s;
    height: 3.2rem;
    position: absolute;
    width: ${ props => props.percent || "70%" };
    border-radius: 8rem;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
`

export const LabelWrapper = styled.div`
    /* max-width: 13.2rem; */
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LabelItem = styled.span`
    font-weight: 600;
    font-size: 3rem;
    line-height: 5.4rem;
    color: ${props => props.theme.colors.white};

`