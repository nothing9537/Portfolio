import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: auto;
    max-width: 140rem;
    width: 100%;
    margin-top: 35rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContactLabel = styled.label`
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 6.4rem;
    color: ${props => props.theme.colors.white};
`
export const ContactWrapper = styled.div`
    display: flex;
    gap: 10rem;
    align-items: center;
`

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`