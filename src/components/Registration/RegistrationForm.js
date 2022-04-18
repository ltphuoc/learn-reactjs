import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Registration.scss';

function RegistrationForm(props) {
  const { onSubmit } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [gender] = useState(['Male', 'Female', 'Others']);
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const [check, setCheck] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      firstName,
      lastName,
      nickName,
      mail,
      password,
      date,
      gender: gender[check],
      mobile,
      address,
    };

    onSubmit(formValues);

    toast.success('Submit successful');

    setFirstName('');
    setLastName('');
    setNickName('');
    setMail('');
    setPassword('');
    setCheck(0);
    setDate('');
    setMobile('');
    setAddress('');
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="form-registraction">
        <h2>Registration form</h2>
        <div className="input-registration">
          <label>First Name:</label>
          <input
            required
            minLength={3}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Last Name:</label>
          <input
            required
            minLength={3}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Nick Name:</label>
          <input
            required
            minLength={3}
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Email:</label>
          <input
            required
            type="email"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Password:</label>
          <input
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Date of Birth:</label>
          <input
            required
            type="date"
            max="2022-04-14"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Gender:</label>
          <ul>
            {gender.map((item, index) => (
              <li key={index}>
                <input
                  type="radio"
                  checked={check === index}
                  onChange={() => {
                    setCheck(index);
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="input-registration">
          <label>Mobile:</label>
          <input
            required
            type="tel"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>
        <div className="input-registration">
          <label>Address:</label>
          <textarea
            required
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="action">
          <button>Submit</button>
          <button
            type="button"
            onClick={() => {
              setFirstName('');
              setLastName('');
              setNickName('');
              setMail('');
              setPassword('');
              setDate('');
              setCheck(0);
              setMobile('');
              setAddress('');
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default RegistrationForm;
