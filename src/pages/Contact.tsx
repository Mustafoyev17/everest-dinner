
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setIsSubmitting(false);
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-restaurant-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or feedback
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full min-h-[150px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-blue dark:focus:ring-restaurant-light-gold dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-restaurant-blue hover:bg-restaurant-light-blue text-white flex items-center justify-center gap-2 py-6"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-restaurant-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">Address</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        123 Restaurant Street<br />
                        Tashkent, Uzbekistan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-restaurant-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        +998 xx xxx xx xx
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-restaurant-gold mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        info@everest.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-restaurant-blue dark:text-restaurant-light-gold">
                  Opening Hours
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 12:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                {/* Placeholder for map - in a real project, this would be a Google Maps embed */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Map would be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
