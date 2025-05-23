
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavLinks from './NavLinks';
import { useAuth } from '@/context/AuthContext';

type MobileMenuProps = {
  isOpen: boolean;
  links: Array<{ name: string; path: string }>;
  handleLogout: () => void;
  handleAuthClick: () => void;
};

export default function MobileMenu({ isOpen, links, handleLogout, handleAuthClick }: MobileMenuProps) {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.isAdmin;

  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 pb-4 animate-fade-in">
      <NavLinks links={links} isMobile={true} />
      
      {isAuthenticated ? (
        <div className="flex flex-col space-y-2 mt-4">
          <div className="px-4 py-2 font-medium">
            {user?.name} {isAdmin ? "(Admin)" : ""}
          </div>
          <Button 
            variant="outline" 
            className="flex items-center justify-center space-x-2"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>
      ) : (
        <div className="mt-4 px-4">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white"
            onClick={handleAuthClick}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
}
