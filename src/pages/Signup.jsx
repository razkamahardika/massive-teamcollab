import "../assets/pages/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="left-side1">
        <div className="logo">
          <img alt="#" src="/logo.png" />
          <span>HelaiNusa.</span>
        </div>
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              First Name
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              Last Name
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              Email
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              Password
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="checkbox" id="privacy-policy" />
              <label htmlFor="privacy-policy">
                I agree to the{" "}
                <span className="privacy-policy">privacy policy</span>
              </label>
            </div>
            <button class="next_login">
              <Link to="/Signup1">Signup</Link>
            </button>
          </form>
        </div>
      </div>
      <div className="right-side1">
        <h2>Create a New Account</h2>
        <button class="submit">
          <Link to="/Login">Already have an account?</Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
