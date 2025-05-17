import './login.css';
import partnership from '../stock/partnership.png';
import { useState } from 'react';

function Login() {
  const [phNo,setPhNo] = useState("");
  const [otpSent,SetotpSent] = useState(true);
  const [otp,setOtp] = useState('');

  const sendOTP = () => {
    if (phNo.length != 10){
      window.alert("Please enter a valid 10 digits phone number");
    }
    else{
      SetotpSent(false);
    }
  }

  const validateOTP = () => {
    console.log("done");
  }

  return (
    <section className="PartnerLoginMain flex">
      <div className="img">
        <img src={partnership} alt="Drive"></img>
      </div>
      <div>
        {
          otpSent ? 
            <>
            <span>Enter your phone number <i>*</i></span>
            <input type="tel" placeholder="78695.." pattern="\d{10}" maxLength='10' inputMode="numeric" value={phNo} onChange={(e) => setPhNo(e.target.value)}></input>
            </>
            :
            <>
            <span>OTP sent to {phNo}</span> <br></br>
            <input style={{width:"200px"}} type="number" min="100000" max="999999" value={otp} onChange={(e) => setOtp(e.target.value)}></input>
            </>
        }

        {
          otpSent ?
          <button onClick={sendOTP}>Get OTP</button>
          :
          <button onClick={validateOTP}>Get Started</button>
        }
      </div>
    </section>
  );
}

export default Login;
