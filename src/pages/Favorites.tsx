
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/context/FavoritesContext';
import { useCart } from '@/context/CartContext';

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <Heart size={80} className="mx-auto mb-6 text-gray-300 dark:text-gray-600" />
            <h1 className="text-3xl font-bold mb-4">Your favorites list is empty</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Save your favorite dishes here for quick access later.
            </p>
            <Button asChild className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white">
              <Link to="/menu" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Browse Menu
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Favorites</h1>
          <Button asChild variant="outline" className="border-restaurant-blue text-restaurant-blue dark:border-restaurant-light-gold dark:text-restaurant-light-gold">
            <Link to="/menu" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Menu
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md menu-card">
              <div className="relative h-56">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <Heart 
                    size={20} 
                    className="fill-restaurant-gold text-restaurant-gold" 
                  />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-restaurant-blue dark:text-white text-lg">${item.price.toFixed(2)}</span>
                  <Button 
                    onClick={() => addToCart(item)}
                    className="bg-restaurant-gold hover:bg-restaurant-light-gold text-white flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
