import React from 'react'

const ItemsList = (props) => {
    const { item, index, removeItem } = props
    return (
        <li key={index}>
            <input type="checkbox" />
            {item}
            <button onClick={() => removeItem(item)}>delete</button>
        </li>
    )
}

export default ItemsList