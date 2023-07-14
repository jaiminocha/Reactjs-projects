import React from 'react'

const TodoList = ({todoList, setTodoList}) => {
    const handleSubmit = (id) => {
        const newList = todoList.filter((todo) => {
            return todo.id !== id;
        })
        // console.log(newList);
        setTodoList(newList);
    }
  return (
    <div>
         {
        todoList?.map((todo) => {
          return (
            <div style={{display: "flex", justifyContent: "space-around", border: "solid black 0.5em", marginTop: "1px"}} key={todo.id}>
                <div>
                    <h3>Title: {todo.title}</h3>
                    <p>Description: {todo.description}</p>
                </div>
                <div style={{paddingTop: "40px", marginLeft: "2em"}}>
                    <button onClick={() => handleSubmit(todo.id)} style={{backgroundColor:"red", width: "100px", height: "25px", cursor: "pointer", borderRadius: "2em"}}>Delete</button>
                </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default TodoList