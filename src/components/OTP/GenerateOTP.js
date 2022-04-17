import { useState } from 'react';

const GenerateOTP = (props) => {
  const [otp, setOtp] = useState('');

  const handleClickBtn = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp);

    // set OTP parent
    props.setOrgOTP(otp);
  };
  return (
    <div className="generate-otp">
      <button onClick={() => handleClickBtn()}>GenerateOTP</button>
      <div>Your OTP: {otp}</div>
    </div>
  );
};

export default GenerateOTP;
