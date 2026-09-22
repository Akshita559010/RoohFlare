function AIAssistant() {
  return (
    <div className="dashboard-panel">
      <h2>AI style assistant</h2>
      <div className="form-grid" style={{ marginTop: 20 }}>
        <label>
          Ask for recommendations
          <textarea rows="5" placeholder="I need a polished outfit idea for a dinner meeting in autumn." />
        </label>
        <button className="primary-btn" type="button">Generate suggestions</button>
      </div>
    </div>
  );
}

export default AIAssistant;
