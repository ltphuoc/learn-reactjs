import { useState } from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

function Todo() {
  const [todo, setTodo] = useState('');

  const [listTodo, setListTodo] = useState(() => {
    return JSON.parse(localStorage.getItem('list-todo')) ?? [];
  });

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
  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <DisplayTodo
        listTodo={listTodo}
        handleDoneTodo={handleDoneTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default Todo;
