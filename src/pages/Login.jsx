import "../assets/pages/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="logo">
          <img src="logo-head.png" alt="HelaiNusa" />
          <h1>HelaiNusa.</h1>
        </div>
        <div className="welcome-text">
          <h2>Login to Your Account</h2>
          <button class="submit">
            <Link to="/Signup">Don't have an account?</Link>
          </button>
        </div>
      </div>
      <div className="right-side">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="input-group">
              <input type="checkbox" id="privacy-policy" />
              <label htmlFor="privacy-policy">
                I agree to the
                <span className="privacy-policy">privacy policy</span>
              </label>
            </div>
            <button class="next-login">
              <Link to="/ProductPage">Login</Link>
              <link rel="stylesheet" href="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
