
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-restaurant-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn about our story, our mission, and our passion for culinary excellence
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Founded in 2010, Everest Restaurant began with a simple vision: to bring the authentic 
                  flavors and culinary traditions to our community. What started as a small family-owned 
                  establishment has grown into one of the most respected dining destinations in the region.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our founder, Chef Alexander, trained in renowned culinary schools and traveled extensively
                  to master the art of regional cuisine. His passion for quality ingredients and traditional 
                  cooking methods forms the foundation of our restaurant's philosophy.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" 
                  alt="Chef preparing food" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Mission</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-restaurant-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-restaurant-blue dark:text-restaurant-light-gold">
                  Customer Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We strive to provide an exceptional dining experience for every guest, combining exquisite food with attentive service in an elegant atmosphere.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-restaurant-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-restaurant-blue dark:text-restaurant-light-gold">
                  Culinary Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We are committed to culinary excellence, using only the finest ingredients and traditional techniques to create authentic and innovative dishes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-restaurant-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-restaurant-blue dark:text-restaurant-light-gold">
                  Community Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  We aim to make a positive impact in our community by supporting local suppliers, reducing environmental footprint, and giving back through charity events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the talented individuals who make Everest Restaurant an extraordinary culinary destination
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alexander Kim",
                  title: "Executive Chef & Founder",
                  image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f",
                },
                {
                  name: "Sophia Martinez",
                  title: "Head Chef",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                },
                {
                  name: "Michael Johnson",
                  title: "Restaurant Manager",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                },
                {
                  name: "Ella Williams",
                  title: "Pastry Chef",
                  image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-restaurant-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl max-w-3xl mx-auto">
                The principles that guide everything we do at Everest Restaurant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Quality & Freshness</h3>
                <p className="text-gray-100">
                  We never compromise on the quality of our ingredients. From locally sourced
                  produce to premium meats and seafood, each component of our dishes is selected
                  with utmost care to ensure exceptional flavor and freshness.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Tradition & Innovation</h3>
                <p className="text-gray-100">
                  We honor traditional cooking techniques while embracing creative innovation.
                  Our chefs continually explore new ways to present classic flavors, resulting
                  in dishes that are both familiar and exciting.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Hospitality & Service</h3>
                <p className="text-gray-100">
                  We believe exceptional service is as important as exceptional food. Our staff
                  is dedicated to creating a warm, welcoming atmosphere where every guest feels
                  valued and cared for throughout their dining experience.
                </p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Sustainability & Community</h3>
                <p className="text-gray-100">
                  We are committed to sustainable practices and supporting our local community.
                  From reducing waste to partnering with local farmers and producers, we strive
                  to make a positive impact beyond our restaurant walls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
