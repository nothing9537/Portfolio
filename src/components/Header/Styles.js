import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 13.7rem;
    padding: 4.4rem 13rem;
    width: 100%;
    margin-bottom: 3rem;
`

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLogo = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    span {
        color: ${ props => props.theme.colors.white };
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        line-height: 4.5rem;
    };
`

export const StyledLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 10rem;
    a{
        font-weight: 500;
        font-size: 3rem;
        line-height: 4.4rem;
        color: ${ props => props.theme.colors.white };
    };
    
`

export const StyledSocial = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    svg{
        cursor: pointer;
    };
`