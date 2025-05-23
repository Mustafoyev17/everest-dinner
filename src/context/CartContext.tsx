
import React, { createContext, useState, useContext, useEffect } from 'react';
import { MenuItem } from '@/lib/data';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';

type CartItem = MenuItem & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  getCartTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const { user } = useAuth();

  // Load cart from localStorage when component mounts or user changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If user is logged in, try to get their specific cart
      const cartKey = user ? `cart_${user.id}` : 'cart';
      const savedCart = localStorage.getItem(cartKey);
      
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          localStorage.removeItem(cartKey);
          setCartItems([]);
        }
      }
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartKey = user ? `cart_${user.id}` : 'cart';
      localStorage.setItem(cartKey, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCartItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        toast.success(`Updated ${item.name} quantity in cart`);
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast.success(`Added ${item.name} to cart`);
        return [...currentItems, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(currentItems => {
      const item = currentItems.find(item => item.id === id);
      const filteredItems = currentItems.filter(item => item.id !== id);
      
      if (item) {
        toast.info(`Removed ${item.name} from cart`);
      }
      
      return filteredItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCartItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        updateQuantity, 
        getCartTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
