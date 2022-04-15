import RegistrationForm from './RegistrationForm';

function Registration() {
  const handleSubmitForm = (formValues) => {
    console.log(formValues);
    let accountList = localStorage.getItem('account_list');
    if (accountList) {
      let arr = JSON.parse(accountList);
      console.log(arr);
      arr.push(formValues);
      localStorage.setItem('account_list', JSON.stringify(arr));
    } else {
      localStorage.setItem('account_list', JSON.stringify([formValues]));
    }
  };

  return <RegistrationForm onSubmit={handleSubmitForm} />;
}

export default Registration;
