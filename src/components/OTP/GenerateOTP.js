import { useCallback, useEffect, useState } from 'react';

const GenerateOTP = (props) => {
  const [otp, setOtp] = useState('');

  const { defaultTime, setTime, setOrgOTP, setIsDisabled, setUserOTP } = props;

  const handleClickBtn = useCallback(() => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp);

    // set OTP parent
    setOrgOTP(otp);
    // set Time parent
    setTime(defaultTime);
    // set button able
    setIsDisabled(false);
    //
    setUserOTP('');
  }, [defaultTime, setTime, setOrgOTP, setIsDisabled, setUserOTP]);

  useEffect(() => {
    setTimeout(() => {
      handleClickBtn();
      setIsDisabled(false);
    }, 1500);
  }, [setIsDisabled, handleClickBtn]);

  return (
    <div className="generate-otp">
      <button onClick={() => handleClickBtn()}>Generate new OTP</button>
      <div>Your OTP: {otp}</div>
    </div>
  );
};

export default GenerateOTP;
