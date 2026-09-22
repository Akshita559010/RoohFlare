import OrderCard from '../components/OrderCard';

function MyOrders() {
  return (
    <div className="dashboard-panel">
      <h2>My orders</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <OrderCard title="Order #1024" details="Redesign in progress" />
        <OrderCard title="Order #984" details="Awaiting feedback" />
        <OrderCard title="Order #876" details="Delivered" />
      </div>
    </div>
  );
}

export default MyOrders;
