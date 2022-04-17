import { useState } from 'react';
import GenerateOTP from './GenerateOTP';
import InputOTP from './InputOTP';
import './OTP.scss';
const OTP = () => {
  const [orgOTP, setOrgOTP] = useState('');
  const [userOTP, setUserOTP] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = () => {
    if (+orgOTP === +userOTP) {
      alert('Correct');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="otp">
      <GenerateOTP setOrgOTP={setOrgOTP} />
      <InputOTP
        setUserOTP={setUserOTP}
        handleSubmit={handleSubmit}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
};

export default OTP;
