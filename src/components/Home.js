import React, { useState } from 'react';
import AddTodo from './Todo/AddTodo';
import DisplayTodo from './Todo/DisplayTodo';

const Home = () => {
  const [todo, setTodo] = useState('');

  const [listTodo, setListTodo] = useState([
    { id: 'todo1', name: 'Learn React js' },
    { id: 'todo2', name: 'Learn Node js' },
    { id: 'todo3', name: 'Learn Next js' },
  ]);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleClickBtn = () => {
    if (!todo) return;
    let todoId = randomIntFromInterval(4, 9999999999999);
    let todoItem = {
      id: `todo${todoId}`,
      name: todo,
    };

    setListTodo([...listTodo, todoItem]);
    setTodo('');
  };

  const handleDeleteTodo = (id) => {
    setListTodo([...listTodo.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} handleClickBtn={handleClickBtn} />
      <DisplayTodo listTodo={listTodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

// class Home extends React.Component {
//   state = {
//     name: "",
//   };
//   render() {
//     return (
//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <br></br>
//         <br></br>
//         Hello Todo List with name: {this.state.name}
//       </div>
//     );
//   }
// }

export default Home;
