import React from 'react'

const ListItem = (props) => {
    return (
        <li >
            {props.list.title} : {props.list.todos}
        </li>
    )
}

export default ListItem
