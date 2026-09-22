import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/design', label: 'Design' },
  { to: '/redesign', label: 'Redesign' },
  { to: '/buy-sell', label: 'Buy & Sell' },
  { to: '/my-orders', label: 'My Orders' },
  { to: '/ai-assistant', label: 'AI Assistant' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/login', label: 'Login' },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <div className="brand" aria-label="RoohFlare brand">
          <span className="brand-mark">R</span>
          <span>RoohFlare</span>
        </div>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
