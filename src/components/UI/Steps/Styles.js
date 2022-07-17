import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`

export const Label = styled.span`
    font-weight: 600;
    font-size: 3.3rem;
    line-height: 5.4rem;
    color: ${props => props.theme.colors.white};
    text-align: center;
    display: block;
    white-space: nowrap;

    &::after {
        position: absolute;
        top: 7rem;
        left: 50%;
        transform: translateX(-50%);
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.white};
        content: '';
    }
    &::before {
        position: absolute;
        top: 8.5rem;
        left: -50%;
        transform: translateY(-50%);
        width: 200%;
        height: 1rem;
        background-color: ${(props) => props.theme.colors.white};
        content: '';
    }
`

export const Item = styled.div`
    position: relative;
    
    &:nth-child(1) {
        ${Label} {
            &::before {
                width: 50%;
                left: 50%;
            }
        }
    }

    &:nth-last-child(1) {
        ${Label} {
            &::before {
                width: 0%;
            }
        }
    }
`

export const Text = styled.p`
    font-weight: 600;
    font-size: 2.3rem;
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white};
    text-align: center;
    margin-top: 10rem;
`