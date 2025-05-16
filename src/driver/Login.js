import './login.css';
import bus2 from '../stock/bus2.jpg';
import { useState } from 'react';

function Login() {
  
  const [phNo,setPhNo] = useState("");

  return (
    <section className="DriverLoginMain flex">
      <div className="img">
        <img src={bus2} alt="Drive"></img>
      </div>
      <div>
        <p>Buckle up and Start a Safe Journey! <br></br><i style={{color:"green",fontWeight:"bold"}}>G</i><i style={{color:"#ff725e",fontWeight:"bold"}}>O</i> Bus</p>
        <span>Enter your phone number <i>*</i></span>
        <input type="tel" placeholder="78695.." pattern="[0-9]*" inputMode="numeric" value={phNo} onChange={(e) => setPhNo(e.target.value)}></input>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Login;
