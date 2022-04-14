import { useState } from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

function Todo() {
  const [todo, setTodo] = useState('');

  const [listTodo, setListTodo] = useState(() => {
    return JSON.parse(localStorage.getItem('list-todo')) ?? [];
  });

  const [filterStatus, setFilterStatus] = useState('all');
  const handleSubmit = () => {
    if (!todo) return;
    let todoId = listTodo.length + 1;
    let todoItem = {
      id: todoId,
      name: todo,
      status: 'pending',
    };
    const newListTodo = [...listTodo, todoItem];

    setListTodo(newListTodo);
    setTodo('');

    localStorage.setItem('list-todo', JSON.stringify(newListTodo));
  };

  const handleDeleteTodo = (id) => {
    const newListTodo = [...listTodo.filter((item) => item.id !== id)];

    setListTodo(newListTodo);

    localStorage.setItem('list-todo', JSON.stringify(newListTodo));
  };

  const handleDoneTodo = (item, index) => {
    const newTodoList = [...listTodo];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'pending' ? 'completed' : 'pending',
    };

    setListTodo(newTodoList);
    localStorage.setItem('list-todo', JSON.stringify(newTodoList));
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
  };
  const handleShowOngoingClick = () => {
    setFilterStatus('pending');
  };

  const renderedListTodo = listTodo.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );

  return (
    <div>
      <div className="">
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowOngoingClick}>Show Ongoing</button>
      </div>
      <AddTodo todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <DisplayTodo
        listTodo={renderedListTodo}
        handleDoneTodo={handleDoneTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default Todo;
