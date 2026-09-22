function UserLogin() {
  return (
    <div className="form-shell">
      <h2>User Login</h2>
      <form className="form-grid">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="primary-btn" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default UserLogin;
