function RequestDetails() {
  return (
    <div className="form-shell">
      <h2>Request details</h2>
      <div className="form-grid">
        <label>
          Occasion
          <input type="text" value="Corporate event" readOnly />
        </label>
        <label>
          Preferences
          <textarea rows="4" value="Muted palette, polished silhouettes, comfortable heels." readOnly />
        </label>
        <button className="primary-btn" type="button">Continue to chat</button>
      </div>
    </div>
  );
}

export default RequestDetails;
