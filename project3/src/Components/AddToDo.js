import React, { useState } from 'react'

const AddToDo = ({ todoList, setTodoList, itemId, setItemId }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "" || desc === "") return;
        const todo = {
            title: title,
            description: desc,
            id: itemId
        }
        setTodoList([todo, ...todoList]);
        setItemId(itemId + 1);
        setTitle("");
        setDesc("");
    }
  return (
    <div className='add-item'>
        <span>Add item : </span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='inputTodoTitle' type="text" placeholder="Title" />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} className='inputTodoDesc' type="textarea" placeholder='Description' />
        <button onClick={handleSubmit} type='submit' style={{height: '2rem', width: '2rem', fontSize: '1rem', backgroundColor: 'lime', cursor: 'pointer', borderRadius: '4px'}}>
            +
        </button>
    </div>
  )
}

export default AddToDo