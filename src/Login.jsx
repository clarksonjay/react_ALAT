import logo  from './assets/logo.png'
import coatOfArm from './assets/coat_of_arm.png'

function Login(){

  const styles = {
    width: "35px",
    height: "40px",
    marginRight: "8px",
    marginTop: "5px"
  }

  const style = {
    width: "20px",
    height: "30px",
    marginLeft: "8px"
  }

  return(
    <div className="main" id="main">
      <div className="link">
        <a href="#">Go to ALAT Website</a>
      </div>

      <div className="login">
        <div className="logo">
          <img src={logo} style={styles} alt="logo" />
          <span>Licensed by CBN</span>
          <img src={coatOfArm} style={style} alt="Coat of arm" />
        </div>

        <form action="" method="post">
          <div className="welcome">
            <h4>Welcome Back!</h4>
          </div>

          <div className="input-box">
            <p>Email Address/Username</p>
            <input type="email" required autocomplete='on' />
          </div>

          <div className="input-box">
            <p>Password <a href="#">Forgot password?</a></p>
            <input type="password" required autocomplete='on'/>
          </div>

          <button className="btn">Login</button>
        </form>

        <div className="new">
          <span>New to ALAT?</span> <a href="">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login




