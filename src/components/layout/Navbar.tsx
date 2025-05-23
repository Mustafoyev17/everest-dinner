
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useAuth } from '@/context/AuthContext';

// Import the new components
import NavLogo from './navbar/NavLogo';
import NavLinks from './navbar/NavLinks';
import NavbarIcons from './navbar/NavbarIcons';
import MobileMenu from './navbar/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const { user, logout, isAuthenticated, checkIsAdmin } = useAuth();
  const navigate = useNavigate();
  const isAdmin = checkIsAdmin();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAuthClick = () => {
    navigate('/auth');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Add admin link if user is admin
  if (isAdmin) {
    navLinks.push({ name: 'Admin Panel', path: '/admin' });
  }

  const navbarClass = scrolled 
    ? "bg-white dark:bg-restaurant-dark shadow-md" 
    : "bg-transparent";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLogo />
          <NavLinks links={navLinks} />

          {/* Right Icons */}
          <div className="flex items-center justify-end">
            <NavbarIcons 
              cartCount={cartItems.length}
              favoritesCount={favorites.length}
              handleLogout={handleLogout}
              handleAuthClick={handleAuthClick}
            />

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <NavbarIcons 
                cartCount={cartItems.length}
                favoritesCount={favorites.length}
                handleLogout={handleLogout}
                handleAuthClick={handleAuthClick}
                isMobile={true}
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 text-gray-600 dark:text-gray-200 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isOpen}
          links={navLinks}
          handleLogout={handleLogout}
          handleAuthClick={handleAuthClick}
        />
      </div>
    </nav>
  );
}
