
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from '@/context/AuthContext';

type NavbarIconsProps = {
  cartCount: number;
  favoritesCount: number;
  handleLogout: () => void;
  handleAuthClick: () => void;
  isMobile?: boolean;
};

export default function NavbarIcons({ 
  cartCount, 
  favoritesCount, 
  handleLogout, 
  handleAuthClick,
  isMobile = false
}: NavbarIconsProps) {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.isAdmin;

  if (isMobile) {
    return (
      <div className="flex md:hidden items-center space-x-4">
        <ThemeToggle />
        
        <Link to="/favorites" className="relative p-2 hover:text-restaurant-gold">
          <Heart size={22} />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-restaurant-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </Link>

        <Link to="/cart" className="relative p-2 hover:text-restaurant-gold">
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-restaurant-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ThemeToggle />

      <Link to="/favorites" className="relative p-2 hover:text-restaurant-gold">
        <Heart size={24} />
        {favoritesCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-restaurant-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {favoritesCount}
          </span>
        )}
      </Link>

      <Link to="/cart" className="relative p-2 hover:text-restaurant-gold">
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-restaurant-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium hidden lg:block">
            {user?.name} {isAdmin ? "(Admin)" : ""}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center space-x-1"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      ) : (
        <Button 
          variant="default" 
          size="sm" 
          className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white ml-2"
          onClick={handleAuthClick}
        >
          Login
        </Button>
      )}
    </div>
  );
}
