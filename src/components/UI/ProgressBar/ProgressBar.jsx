import React from 'react'
import {
    LabelItem,
    LabelWrapper,
    StyledProgressBarProgress,
    StyledProgressBarWrapper,
    Wrapper
} from './Styles'

const ProgressBar = ({ firstItem, secondItem, ...props }) => {
    return (
        <Wrapper>
            <LabelWrapper>
                <LabelItem>
                    {firstItem}
                </LabelItem>
                <LabelItem>
                    {secondItem}
                </LabelItem>
            </LabelWrapper>
            <StyledProgressBarWrapper>
                <StyledProgressBarProgress {...props} />
            </StyledProgressBarWrapper>
        </Wrapper>
    )
}

export default ProgressBar