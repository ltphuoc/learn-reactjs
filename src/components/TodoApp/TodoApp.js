import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import todoApi from './Api/todoApi';
import DisplayTodo from './DisplayTodo';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await todoApi.getAll();

        setTodoList(data);
      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    })();
  }, []);

  const handleSubmitForm = async (formValues) => {
    if (isUpdate) {
      try {
        const { data } = await todoApi.update(todoUpdate.id, {
          ...todoUpdate,
          title,
        });
        console.log(data);
        if (data) {
          const newTodoList = [...todoList.filter((x) => x.id !== todoUpdate.id), data];
          setTodoList(newTodoList);
          setIsUpdate(false);
        }
      } catch (error) {
        console.log('Failed to update api', error);
      }
    } else {
      try {
        const { data } = await todoApi.add(formValues);

        if (data) {
          const newTodoList = [...todoList, data];
          setTodoList(newTodoList);
        }
      } catch (error) {
        console.log('Failed to add data', error);
      }
    }
  };

  const handleDoneTodo = async (todo) => {
    try {
      const { data } = await todoApi.update(todo.id, {
        ...todo,
        isDone: todo.isDone === true ? false : true,
      });

      if (data) {
        // let newTodoList = [...todoList];
        // let newTodo = { ...newTodoList[todo.id], isDone: todo.isDone === true ? true : false };
        // newTodoList[todo.id] = newTodo;
        const newTodoList = [...todoList.filter((x) => x.id !== todo.id), data];
        setTodoList(newTodoList);
      }
    } catch (error) {
      console.log('Failed to update api', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await todoApi.delete(id);
      console.log(response.status === 200);
      if (response) {
        const newTodoList = [...todoList.filter((x) => x.id !== id)];

        setTodoList(newTodoList);
      }
    } catch (error) {
      console.log('Failed to remove data', error);
    }
  };

  const handleEditBtn = async (todo) => {
    setIsUpdate(true);
    setTodoUpdate(todo);
  };

  const [filterStatus, setFilterStatus] = useState('all');

  const handleShowAllClick = () => {
    setFilterStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilterStatus(true);
  };
  const handleShowOngoingClick = () => {
    setFilterStatus(false);
  };

  const renderedListTodo = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.isDone
  );

  return (
    <div className="todo-list">
      <button onClick={handleShowAllClick}>Show All</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowOngoingClick}>Show Ongoing</button>
      <AddTodo
        handleSubmitForm={handleSubmitForm}
        title={title}
        setTitle={setTitle}
        isUpdate={isUpdate}
      />
      <DisplayTodo
        title={title}
        setTitle={setTitle}
        // todoList={todoList}
        todoList={renderedListTodo}
        setTodoList={setTodoList}
        handleDeleteTodo={handleDeleteTodo}
        handleDoneTodo={handleDoneTodo}
        handleEditBtn={handleEditBtn}
      />
    </div>
  );
};

export default TodoApp;
