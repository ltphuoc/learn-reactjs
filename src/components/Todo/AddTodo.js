const AddTodo = (props) => {
  const { todo, setTodo, handleSubmit } = props;

  return (
    <div>
      <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
