import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="form-shell">
      <h2>Welcome to RoohFlare</h2>
      <p>Choose the account type that fits your journey.</p>
      <div className="cta-row" style={{ marginTop: 24 }}>
        <Link className="primary-btn" to="/user-login">User login</Link>
        <Link className="secondary-btn" to="/designer-login">Designer login</Link>
      </div>
    </div>
  );
}

export default Login;
