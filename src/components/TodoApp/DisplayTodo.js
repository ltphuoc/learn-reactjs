import classNames from 'classnames';
import React from 'react';

const DisplayTodo = (props) => {
  const { handleDeleteTodo } = props;
  const { todoList, setTodoList } = props;

  const handleRemoveClick = (id) => {
    handleDeleteTodo(id);
  };
  return (
    <div>
      {todoList.map((todo, index) => (
        <li key={todo.id}>
          <span
            className={classNames({
              done: todo.isDone === true,
            })}
          >
            {todo.title}
          </span>
          <button>✅</button>
          <button onClick={() => handleRemoveClick(todo.id)}>❌</button>
        </li>
      ))}
    </div>
  );
};

export default DisplayTodo;
