import './login.css';
import bus2 from '../stock/bus2.jpg';

function Login() {
  return (
    <section className="DriverLoginMain flex">
      <div className="img">
        <img src={bus2} alt="Drive"></img>
      </div>
      <div>
        <p>Buckle up and Start a Safe Journey! <br></br><i style={{color:"green",fontWeight:"bold"}}>G</i><i style={{color:"orange",fontWeight:"bold"}}>O</i> Bus</p>
        <span>Enter your phone number <i>*</i></span>
        <input type="tel" placeholder="78695.." pattern="[0-9]*" inputMode="numeric"></input>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Login;
