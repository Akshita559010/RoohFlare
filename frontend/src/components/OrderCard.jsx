function OrderCard({ title = 'Order Summary', details = 'Ready for review' }) {
  return (
    <div className="order-card">
      <h3>{title}</h3>
      <p>{details}</p>
      <button className="primary-btn" type="button">View details</button>
    </div>
  );
}

export default OrderCard;
