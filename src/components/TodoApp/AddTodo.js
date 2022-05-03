import React from 'react';

const AddTodo = (props) => {
  const { handleSubmitForm, title, setTitle, isUpdate } = props;
  // const [title, setTitle] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    const formValues = {
      title,
    };
    setTitle('');
    handleSubmitForm(formValues);
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      {!isUpdate && <button type="submit">Add</button>}
      {isUpdate && <button type="submit">Submit</button>}
    </form>
  );
};

export default AddTodo;
