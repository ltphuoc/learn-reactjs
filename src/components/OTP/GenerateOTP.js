import { useEffect, useState } from 'react';

const GenerateOTP = (props) => {
  const [otp, setOtp] = useState('');

  const { defaultTime, setTime, setOrgOTP, setIsDisabled } = props;

  useEffect(() => {
    setTimeout(() => {
      handleClickBtn();
      setIsDisabled(false );
    }, 2000);
  }, []);

  const handleClickBtn = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp);

    // set OTP parent
    setOrgOTP(otp);
    // set Time parent
    setTime(defaultTime);
  };

  return (
    <div className="generate-otp">
      <button onClick={() => handleClickBtn()}>Generate new OTP</button>
      <div>Your OTP: {otp}</div>
    </div>
  );
};

export default GenerateOTP;
