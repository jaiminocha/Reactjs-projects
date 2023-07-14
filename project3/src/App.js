import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading';
import InputText from './Components/InputText';
import LanguageSelection from './Components/LanguageSelection';
import HeaderTodo from './Components/HeaderTodo';
import AddToDo from './Components/AddToDo';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [itemId, setItemId] = useState(1);
  return (
    <div className="App">
      {/* <Heading />
      <InputText />
      <LanguageSelection /> */}

      <HeaderTodo />
      <AddToDo todoList={todoList} setTodoList={setTodoList} itemId={itemId} setItemId={setItemId} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
