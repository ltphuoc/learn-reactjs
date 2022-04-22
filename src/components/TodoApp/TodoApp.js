import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import todoApi from './Api/todoApi';
import DisplayTodo from './DisplayTodo';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const handleSubmitForm = async (formValues) => {
    await todoApi.add(formValues);
    // const { newTodoList } = await todoApi.getAll();
    // setTodoList(newTodoList);
  };

  const handleDeleteTodo = async (id) => {
    await todoApi.delete(id);
    const newTodoList = [...todoList.filter((x) => x.id !== id)];

    setTodoList(newTodoList);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await todoApi.getAll();

        setTodoList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <div className="todo-list">
      <AddTodo handleSubmitForm={handleSubmitForm} />
      <DisplayTodo
        todoList={todoList}
        setTodoList={setTodoList}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoApp;
