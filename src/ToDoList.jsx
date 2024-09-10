import React, { useState } from 'react'
import ItemsList from './ItemsList';

const ToDoList = () => {

    const [items, setItem] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function inputHandler(event) {
        setInputValue(event.target.value);
    }

    function addItem() {
        setItem([...items, inputValue])
        setInputValue('')
    }

    function removeItem(item) {
        console.log('removeItem', item);
        setItem(items.filter(value => value !== item))
    };

    return (
        <div>
            <input type="text" placeholder='Enter Item' onChange={inputHandler} value={inputValue} />
            <button onClick={addItem}>Add</button>

            {items.map((item, index) => <ItemsList item={item} index={index} removeItem={removeItem} />)}
        </div>
    )
}

export default ToDoList