function DesignerSelection() {
  return (
    <div className="dashboard-panel">
      <h2>Choose your designer</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Leah Styles</h3>
          <p>Minimal tailoring and elevated everyday styling.</p>
          <button className="card-btn" type="button">Select</button>
        </div>
        <div className="card">
          <h3>Iman Noor</h3>
          <p>Modern luxury silhouettes and event dressing.</p>
          <button className="card-btn" type="button">Select</button>
        </div>
        <div className="card">
          <h3>Rhea Lane</h3>
          <p>Avant-garde combinations with a wearable edge.</p>
          <button className="card-btn" type="button">Select</button>
        </div>
      </div>
    </div>
  );
}

export default DesignerSelection;
