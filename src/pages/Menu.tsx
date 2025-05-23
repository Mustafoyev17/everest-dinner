
import { useState, useEffect } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { menuItems, categories } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { useAdminProducts } from '@/hooks/useAdminProducts';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { products } = useAdminProducts(); // Use the admin products

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFavoriteToggle = (item: typeof menuItems[0]) => {
    if (isFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-restaurant-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic dishes prepared with fresh ingredients
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="w-full justify-start bg-gray-100 dark:bg-gray-800 p-1 flex-wrap">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-restaurant-blue dark:data-[state=active]:text-restaurant-light-gold"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => {
            const categoryProducts = products.filter(item => item.category === category.id);
            
            if (categoryProducts.length === 0) {
              return (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="text-center py-10">
                    <p className="text-gray-500 dark:text-gray-400">No items available in this category</p>
                  </div>
                </TabsContent>
              );
            }
            
            return (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProducts.map(item => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md menu-card">
                      <div className="relative h-56">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Image+Not+Available';
                          }}
                        />
                        <button 
                          onClick={() => handleFavoriteToggle(item)}
                          className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <Heart 
                            size={20} 
                            className={isFavorite(item.id) ? 'fill-restaurant-gold text-restaurant-gold' : 'text-gray-500 dark:text-gray-300'} 
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
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
