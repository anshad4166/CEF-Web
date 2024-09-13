import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="CEF Logo" className="h-10 w-auto mr-2" />
              <span className="font-bold text-xl">CEF</span>
            </Link>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            {navItems.map((item) => (
              <li key={item.to} className="md:inline-block">
                <Link
                  to={item.to}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.to
                      ? 'bg-blue-700'
                      : 'hover:bg-blue-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
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
        <p>&copy; 2024 Chennamangallur Entrepreneurs Forum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;