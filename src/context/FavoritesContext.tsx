
import React, { createContext, useState, useContext, useEffect } from 'react';
import { MenuItem } from '@/lib/data';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';

type FavoritesContextType = {
  favorites: MenuItem[];
  addToFavorites: (item: MenuItem) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<MenuItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });
  
  const { user } = useAuth();

  // Load favorites from localStorage when component mounts or user changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If user is logged in, try to get their specific favorites
      const favKey = user ? `favorites_${user.id}` : 'favorites';
      const savedFavorites = localStorage.getItem(favKey);
      
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch (e) {
          localStorage.removeItem(favKey);
          setFavorites([]);
        }
      }
    }
  }, [user]);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favKey = user ? `favorites_${user.id}` : 'favorites';
      localStorage.setItem(favKey, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const addToFavorites = (item: MenuItem) => {
    setFavorites(currentItems => {
      const existingItem = currentItems.find(favItem => favItem.id === item.id);
      
      if (existingItem) {
        toast.info('Item is already in favorites');
        return currentItems;
      } else {
        toast.success('Added to favorites');
        return [...currentItems, item];
      }
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(currentItems => currentItems.filter(item => item.id !== id));
    toast.info('Removed from favorites');
  };

  const isFavorite = (id: string) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
