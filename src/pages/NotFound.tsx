
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Page Not Found</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Button asChild className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white">
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
