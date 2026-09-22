function DesignerLogin() {
  return (
    <div className="form-shell">
      <h2>Designer Login</h2>
      <form className="form-grid">
        <label>
          Studio email
          <input type="email" placeholder="studio@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="primary-btn" type="submit">Access dashboard</button>
      </form>
    </div>
  );
}

export default DesignerLogin;
