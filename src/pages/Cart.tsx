
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/menu" className="px-6 py-2">
              Browse Menu
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)]">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-start border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm"
            >
              <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden mb-4 sm:mb-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                <div className="mt-2 font-semibold">${item.price.toFixed(2)}</div>
              </div>
              
              <div className="flex flex-col items-end space-y-2 mt-4 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="w-8 text-center">{item.quantity}</span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 hover:bg-red-100 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-4">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 border-red-200 hover:bg-red-100 dark:hover:bg-red-900/20"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <CheckoutButton total={getCartTotal()} />
              
              <div className="mt-4 text-center">
                <Link 
                  to="/menu" 
                  className="text-restaurant-blue dark:text-restaurant-light-gold hover:underline text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
