import { useCallback, useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';

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
    // clear userOtp input
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
      {otp === '' && (
        <div>
          <SpinnerCircular size={100} />
        </div>
      )}
      {otp !== '' && <div>Your OTP: {otp}</div>}
    </div>
  );
};

export default GenerateOTP;
