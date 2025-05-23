
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { useState } from 'react';

type CheckoutButtonProps = {
  total: number;
  disabled?: boolean;
};

const CheckoutButton = ({ total, disabled }: CheckoutButtonProps) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please login to complete your order");
      
      // Store the checkout intent in localStorage
      localStorage.setItem('checkoutAfterLogin', 'true');
      
      navigate('/auth');
      return;
    }

    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={disabled || total <= 0 || isProcessing}
      className="w-full bg-restaurant-blue hover:bg-restaurant-light-blue text-white py-3 rounded-md"
    >
      {isProcessing ? "Processing..." : isAuthenticated ? "Proceed to Checkout" : "Login to Checkout"}
    </Button>
  );
};

export default CheckoutButton;
