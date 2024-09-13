import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navItems } from '../nav-items';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.to
                      ? 'bg-blue-700'
                      : 'hover:bg-blue-500'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center py-4">
        <p>&copy; 2024 Our Community. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;