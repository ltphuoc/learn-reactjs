const DisplayTodo = (props) => {
  const handleDeleteTodo = (id) => {
    props.handleDeleteTodo(id);
  };
  const listTodo = props.listTodo;

  return (
    <div>
      <div>----- List Todo -----</div>
      {listTodo.map((item, index) => {
        return (
          <div>
            <ul>
              <li>
                <span
                  key={item.id}
                  onClick={() => {
                    handleDeleteTodo(item.id);
                  }}
                >
                  {item.name}
                </span>
                <button>Done</button>
                <button>Remove</button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
