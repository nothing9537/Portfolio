import React from 'react'
import { Wrapper, Label, Text, Item } from './Styles'

const Steps = ({ items }) => {
    return (
        <Wrapper>
            {items.map((item, index) =>
                <Item key={index}>
                    <Label>{item.label}</Label>
                    <Text>{item.text}</Text>
                </Item>
            )}
        </Wrapper>
    )
}

export default Steps