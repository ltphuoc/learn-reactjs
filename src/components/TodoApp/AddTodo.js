import React, { useState } from 'react';

const AddTodo = (props) => {
  const { handleSubmitForm } = props;
  const [title, setTitle] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    const formValues = {
      title,
    };
    handleSubmitForm(formValues);
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
