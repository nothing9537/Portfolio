import React from 'react'
import { LabelText, LineWrapper, StepsLine, StepsRound, StepsText, StepsWrapper } from './Styles'

const Steps = ({ items, ...props }) => {
    return (
        <StepsWrapper>
            <LineWrapper>
                {items.map((item, index, array) =>
                    <React.Fragment key={index}>
                        <StepsRound>
                            <LabelText>
                                {item.label}
                            </LabelText>
                            <StepsText>
                                {item.text}
                            </StepsText>
                        </StepsRound>
                        { index !== array.length - 1 && <StepsLine /> }
                    </React.Fragment>
                )}
            </LineWrapper>
        </StepsWrapper>
    )
}

export default Steps