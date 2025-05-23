
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-restaurant-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Everest Restaurant</h3>
            <p className="mb-4 text-gray-300">
              Experience culinary excellence at Everest, where we serve delicious dishes in an elegant atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-restaurant-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-restaurant-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span className="text-gray-300">+998 xx xxx xx xx</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span className="text-gray-300">info@everest.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span className="text-gray-300">123 Restaurant Street, Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Everest Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
