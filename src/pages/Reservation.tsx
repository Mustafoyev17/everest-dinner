
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { timeSlots } from '@/lib/data';

export default function Reservation() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Your reservation has been submitted successfully!");
      setIsSubmitting(false);
      
      // Reset form
      setDate(undefined);
      setTime("");
      setGuests("2");
      setName("");
      setPhone("");
      setEmail("");
      setSpecialRequests("");
    }, 1500);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-restaurant-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserve a Table</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Make your dining experience special by reserving your table in advance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left side - Form */}
            <div>
              <h2 className="text-2xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-6">
                Reservation Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Picker */}
                <div className="space-y-2">
                  <Label htmlFor="date">Date <span className="text-red-500">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        className="p-3"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time">Time <span className="text-red-500">*</span></Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select time">
                        {time ? (
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </div>
                        ) : (
                          "Select time"
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests <span className="text-red-500">*</span></Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select number of guests">
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {guests} {parseInt(guests) === 1 ? 'Person' : 'People'}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special requests or dietary requirements?"
                    className="w-full min-h-[100px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-blue dark:focus:ring-restaurant-light-gold dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-restaurant-blue hover:bg-restaurant-light-blue text-white py-6"
                >
                  {isSubmitting ? "Submitting..." : "Reserve Table"}
                </Button>
              </form>
            </div>
            
            {/* Right side - Info */}
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
                alt="Restaurant interior" 
                className="w-full h-72 object-cover rounded-lg shadow-lg" 
              />
              
              <div>
                <h2 className="text-2xl font-bold text-restaurant-blue dark:text-restaurant-light-gold mb-4">
                  Reservation Information
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Please complete the form to reserve your table at Everest Restaurant.
                    For parties larger than 8 people, please call us directly.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <ul className="space-y-2">
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
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p>For immediate assistance or special arrangements, please contact us:</p>
                    <p className="mt-2">
                      Phone: <span className="font-medium">+998 xx xxx xx xx</span>
                    </p>
                    <p>
                      Email: <span className="font-medium">reservations@everest.com</span>
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-restaurant-blue dark:text-restaurant-light-gold">
                      Reservation Policy
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Reservations are held for 15 minutes past the reservation time</li>
                      <li>Please inform us of cancellations at least 3 hours in advance</li>
                      <li>For special events, a deposit may be required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
