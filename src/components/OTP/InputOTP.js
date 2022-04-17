import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';

const InputOTP = (props) => {
  const { setUserOTP, handleSubmit, isDisabled, setIsDisabled } = props;

  const [userOtp, setUserOtp] = useState('');

  const handleChange = (otp) => {
    setUserOtp(otp);

    // setOTP Parent
    setUserOTP(otp);
  };

  const [time, setTime] = useState(10);

  return (
    <div className="input-otp">
      <div>Enter otp code</div>
      <OtpInput
        value={userOtp}
        onChange={handleChange}
        inputStyle={'input-otp__code'}
        numInputs={6}
        separator={<span>-</span>}
      />
      <div className="timer">
        <CountDown setIsDisabled={setIsDisabled} time={time} setTime={setTime} />
      </div>
      <div className="action">
        <button
          onClick={() => {
            setTime(10);
            setIsDisabled(false);
          }}
        >
          Clear
        </button>
        <button disabled={isDisabled} onClick={() => handleSubmit()}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
