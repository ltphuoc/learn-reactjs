import classNames from 'classnames';
import React from 'react';
import './TodoApp.scss';
const DisplayTodo = (props) => {
  const { todoList, handleDoneTodo, handleDeleteTodo, handleEditBtn, setTitle } = props;

  const handleRemoveClick = (id) => {
    handleDeleteTodo(id);
  };
  const handleDoneClick = (todo) => {
    handleDoneTodo(todo);
  };
  const handleEditClick = (todo) => {
    setTitle(todo.title);
    handleEditBtn(todo);
  };
  return (
    <div className="todo-app">
      {todoList &&
        todoList.length >= 0 &&
        todoList.map((todo) => (
          <li key={todo.id}>
            <span
              className={classNames({
                done: todo.isDone === true,
              })}
            >
              {todo.title}
            </span>
            <button onClick={() => handleEditClick(todo)}>
              <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt="" />
            </button>
            <button onClick={() => handleDoneClick(todo)}>✅</button>
            <button onClick={() => handleRemoveClick(todo.id)}>❌</button>
          </li>
        ))}
    </div>
  );
};

export default DisplayTodo;
