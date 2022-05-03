import { useState } from 'react';
import GenerateOTP from './GenerateOTP';
import InputOTP from './InputOTP';
import { ToastContainer, toast } from 'react-toastify';
import './OTP.scss';
import 'react-toastify/dist/ReactToastify.css';

const OTP = () => {
  const [orgOTP, setOrgOTP] = useState('');
  const [userOTP, setUserOTP] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const defaultTime = 15;
  const [time, setTime] = useState(0);

  const handleSubmit = () => {
    if (+orgOTP === +userOTP) {
      toast.success('Correct');
      // reset
      setIsDisabled(true);
      setTime(0);
    } else {
      toast.error('Invalid');
    }
  };

  return (
    <div className="otp">
      <GenerateOTP
        setIsDisabled={setIsDisabled}
        setOrgOTP={setOrgOTP}
        setTime={setTime}
        defaultTime={defaultTime}
        setUserOTP={setUserOTP}
      />
      <InputOTP
        userOTP={userOTP}
        setUserOTP={setUserOTP}
        handleSubmit={handleSubmit}
        isDisabled={orgOTP === '' ? true : isDisabled}
        // isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        time={time}
        setTime={setTime}
      />
      <ToastContainer />
    </div>
  );
};

export default OTP;
