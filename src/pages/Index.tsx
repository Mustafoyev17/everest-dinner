
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredMenu = menuItems.slice(0, 4);
  const { addToCart } = useCart();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Experience Culinary Excellence at Everest
            </h1>
            <p className="text-xl text-gray-100 mb-8 animate-fade-in">
              Indulge in the finest dining experience with authentic cuisine and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in">
              <Button asChild className="bg-restaurant-gold hover:bg-restaurant-light-gold text-white text-lg py-6 px-8">
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8">
                <Link to="/reservation">Reserve Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Restaurant</h2>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Welcome to Everest Restaurant, where we bring you the finest culinary experience. 
                Our restaurant combines elegant ambiance with exceptional cuisine, creating 
                memorable dining moments for our guests.
              </p>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Our skilled chefs prepare each dish with passion and precision, using only the 
                freshest ingredients sourced from local suppliers.
              </p>
              <Button asChild className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white">
                <Link to="/about" className="flex items-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                alt="Restaurant interior" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Featured Menu</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our chef's selected dishes that represent the best of our culinary offerings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMenu.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md menu-card">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-2">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-restaurant-blue dark:text-white">${item.price.toFixed(2)}</span>
                    <Button 
                      onClick={() => addToCart(item)}
                      size="sm" 
                      className="bg-restaurant-gold hover:bg-restaurant-light-gold text-white"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-restaurant-blue hover:bg-restaurant-light-blue text-white">
              <Link to="/menu" className="flex items-center">
                View Full Menu <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Customer Reviews</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what our customers have to say about their dining experience at Everest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "Absolutely amazing food and service! The Himalayan Thali was a delightful experience. Will definitely come back for more.",
                rating: 5
              },
              {
                name: "David Chen",
                review: "Great atmosphere and authentic flavors. The staff was very attentive and made excellent recommendations for my first visit.",
                rating: 5
              },
              {
                name: "Megan Williams",
                review: "The Butter Chicken and Naan bread were perfect. Loved the ambiance and the courteous staff. Highly recommended!",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-restaurant-gold fill-restaurant-gold" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-restaurant-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Table Today</h2>
            <p className="text-xl text-gray-100 mb-8">
              Experience the perfect dining atmosphere for family gatherings, special occasions, or a lovely evening out
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/10 p-4 rounded-lg flex items-center">
                <Users className="mr-2" size={24} />
                <span className="text-lg">Perfect for groups of all sizes</span>
              </div>
              <Button asChild className="bg-restaurant-gold hover:bg-restaurant-light-gold text-white text-lg py-6 px-8">
                <Link to="/reservation">Make Reservation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
