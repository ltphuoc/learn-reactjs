const AddTodo = (props) => {
  const { todo, setTodo, handleClickBtn } = props;

  return (
    <div>
      <label>Todo</label>
      <input
        value={todo}
        type="text"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          handleClickBtn();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
