import OtpInput from 'react-otp-input';
import CountDown from './CountDown';

const InputOTP = (props) => {
  const { userOTP, setUserOTP, handleSubmit, isDisabled, setIsDisabled } = props;

  // const [userOtp, setUserOtp] = useState('');

  const { time, setTime } = props;
  // const timeDefault = 15;
  // const [time, setTime] = useState(timeDefault);

  const handleChange = (otp) => {
    // setUserOtp(otp);

    // setOTP Parent
    setUserOTP(otp);
  };

  return (
    <div className="input-otp">
      <div>Enter otp code</div>
      <OtpInput
        value={userOTP}
        isDisabled={isDisabled}
        isInputNum={true}
        isInputSecure
        onChange={handleChange}
        inputStyle={'input-otp__code'}
        numInputs={6}
        separator={<span>-</span>}
      />
      <div className="timer">
        <CountDown setIsDisabled={setIsDisabled} time={time} setTime={setTime} />
      </div>
      <div className="action">
        {/* <button
          onClick={() => {
            setUserOtp('');
            // setTime(timeDefault);
            setTime(timeDefault);
            setIsDisabled(false);
          }}
        >
          Clear
        </button> */}
        <button disabled={isDisabled} onClick={() => handleSubmit()}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
