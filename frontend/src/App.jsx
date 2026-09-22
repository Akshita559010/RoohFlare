import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import UserLogin from './pages/UserLogin';
import DesignerLogin from './pages/DesignerLogin';
import UserDashboard from './pages/UserDashboard';
import DesignerDashboard from './pages/DesignerDashboard';
import Redesign from './pages/Redesign';
import DesignerSelection from './pages/DesignerSelection';
import RequestDetails from './pages/RequestDetails';
import Chat from './pages/Chat';
import DesignPreview from './pages/DesignPreview';
import OrderConfirmation from './pages/OrderConfirmation';
import MyOrders from './pages/MyOrders';
import Design from './pages/Design';
import AIAssistant from './pages/AIAssistant';
import BuySell from './pages/BuySell';
import FeedbackPage from './pages/Feedback';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/designer-login" element={<DesignerLogin />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/designer-dashboard" element={<DesignerDashboard />} />
          <Route path="/redesign" element={<Redesign />} />
          <Route path="/designer-selection" element={<DesignerSelection />} />
          <Route path="/request-details" element={<RequestDetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/design-preview" element={<DesignPreview />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/design" element={<Design />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
