import React from 'react'
import { ListItem, StyledList } from './Styles'

const List = ({ items, ...props }) => {
    return (
        <StyledList>
            {items.map((item, index) => 
                <ListItem key={index}>
                    {item}
                </ListItem>
            )}
        </StyledList>
    )
}

export default List