function BuySell() {
  return (
    <div className="dashboard-panel">
      <h2>Buy & sell</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Designer resale</h3>
          <p>List your pre-loved fashion pieces to a curated audience.</p>
          <button className="card-btn" type="button">List an item</button>
        </div>
        <div className="card">
          <h3>Lookbook shop</h3>
          <p>Browse curated looks that match the RoohFlare aesthetic.</p>
          <button className="card-btn" type="button">Browse now</button>
        </div>
      </div>
    </div>
  );
}

export default BuySell;
