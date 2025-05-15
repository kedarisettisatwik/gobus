import './login.css';
import partnership from '../stock/partnership.png';
import { useState } from 'react';

function Login() {
  const [phNo,setPhNo] = useState("");

  return (
    <section className="PartnerLoginMain flex">
      <div className="img">
        <img src={partnership} alt="Drive"></img>
      </div>
      <div>
        <p>Partner with <i style={{color:"green",fontWeight:"bold"}}>G</i><i style={{color:"orange",fontWeight:"bold"}}>O</i> Bus to grow your bus business</p>
        <span>Enter your phone number <i>*</i></span>
        <input type="tel" placeholder="78695.." pattern="\d{10}" maxLength='10' inputMode="numeric" value={phNo} onChange={(e) => setPhNo(e.target.value)}></input>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Login;
