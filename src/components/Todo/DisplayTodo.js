const DisplayTodo = (props) => {
  const handleDeleteTodo = (id) => {
    props.handleDeleteTodo(id);
  };
  const listTodo = props.listTodo;

  return (
    <div>
      <div>----- List Todo -----</div>
      <ul>
        {listTodo.map((item, index) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <button>Done</button>
              <button
                onClick={() => {
                  handleDeleteTodo(item.id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTodo;
