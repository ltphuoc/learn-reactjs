import classNames from 'classnames';
import { useState } from 'react';
import './Todo.scss';
const DisplayTodo = (props) => {
  const { listTodo, handleDeleteTodo, handleDoneTodo } = props;

  const handleClick = (id) => {
    handleDeleteTodo(id);
  };
  const handleDone = (item, index) => {
    handleDoneTodo(item, index);
  };

  return (
    <div>
      <div>----- List Todo -----</div>
      <ul className="todo-list">
        {listTodo.map((item, index) => {
          return (
            <li
              key={item.id}
              className={classNames({
                completed: item.status === 'completed',
              })}
            >
              <span>{item.name}</span>
              <button
                onClick={() => {
                  handleDone(item, index);
                }}
              >
                ✅
              </button>
              <button
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTodo;
