
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { useAuth } from "@/context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we need to redirect to checkout after successful login
    if (isAuthenticated) {
      const shouldCheckout = localStorage.getItem('checkoutAfterLogin');
      
      if (shouldCheckout === 'true') {
        localStorage.removeItem('checkoutAfterLogin');
        navigate('/checkout');
      } else if (user?.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    }
  }, [isAuthenticated, navigate, user]);

  // If user is already authenticated, wait for the useEffect to handle the redirect
  if (isAuthenticated) {
    return <div className="pt-32 min-h-screen flex items-center justify-center">Redirecting...</div>;
  }

  return (
    <div className="py-20 px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        {showLogin ? (
          <LoginForm onToggleForm={() => setShowLogin(false)} />
        ) : (
          <SignupForm onToggleForm={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default Auth;
