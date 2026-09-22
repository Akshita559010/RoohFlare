function OrderConfirmation() {
  return (
    <div className="form-shell">
      <h2>Order confirmed</h2>
      <p>Your redesign request has been placed successfully.</p>
      <p style={{ color: '#4a4a4a' }}>Confirmation number: RF-28491</p>
      <button className="primary-btn" type="button" style={{ marginTop: 16 }}>Track order</button>
    </div>
  );
}

export default OrderConfirmation;
