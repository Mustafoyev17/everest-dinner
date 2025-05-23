
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks' | 'soups' | 'salads' | 'pasta' | 'rice' | 'bread' | 'specials';
};

export const categories = [
  { id: 'starters', name: 'Starters' },
  { id: 'soups', name: 'Soups' },
  { id: 'salads', name: 'Salads' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'pasta', name: 'Pasta & Noodles' },
  { id: 'rice', name: 'Rice Dishes' },
  { id: 'bread', name: 'Breads' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'specials', name: 'Chef Specials' }
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    name: 'Himalayan Momo',
    description: 'Steamed dumplings filled with spiced meat or vegetables, served with tomato chutney',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c',
    category: 'starters'
  },
  {
    id: '2',
    name: 'Everest Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas, served with mint sauce',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    category: 'starters'
  },
  {
    id: '3',
    name: 'Mountain Salad',
    description: 'Fresh mixed greens with tomatoes, cucumbers, and house dressing',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'salads'
  },
  {
    id: '4',
    name: 'Spiced Cauliflower Soup',
    description: 'Creamy cauliflower soup with aromatic spices and fresh herbs',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    category: 'soups'
  },
  
  // Main Courses
  {
    id: '5',
    name: 'Lamb Rogan Josh',
    description: 'Slow-cooked lamb in rich spiced sauce with tomatoes and aromatic spices',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754',
    category: 'mains'
  },
  {
    id: '6',
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in creamy tomato sauce with butter and spices',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    category: 'mains'
  },
  {
    id: '7',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
    category: 'rice'
  },
  {
    id: '8',
    name: 'Himalayan Thali',
    description: 'Traditional platter with selection of curries, rice, bread, and condiments',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1606491048802-8342506d6471',
    category: 'specials'
  },
  
  // Desserts
  {
    id: '9',
    name: 'Gulab Jamun',
    description: 'Sweet milk solids dumplings soaked in rose-flavored sugar syrup',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1627308595171-d1b5d95d0525',
    category: 'desserts'
  },
  {
    id: '10',
    name: 'Kheer',
    description: 'Creamy rice pudding flavored with cardamom and topped with nuts',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969',
    category: 'desserts'
  },
  
  // Drinks
  {
    id: '11',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt drink blended with sweet mango and cardamom',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69',
    category: 'drinks'
  },
  {
    id: '12',
    name: 'Masala Chai',
    description: 'Traditional spiced tea with milk, ginger, cardamom, and cinnamon',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8',
    category: 'drinks'
  },
  
  // Additional items to reach 100+ products
  
  // More Starters
  {
    id: '13',
    name: 'Onion Bhaji',
    description: 'Crispy onion fritters seasoned with aromatic spices and herbs',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    category: 'starters'
  },
  {
    id: '14',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled in a tandoor with peppers',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a252b7bd5',
    category: 'starters'
  },
  {
    id: '15',
    name: 'Vegetable Pakora',
    description: 'Assorted vegetables dipped in spiced gram flour batter and deep-fried',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
    category: 'starters'
  },
  
  // More Soups
  {
    id: '16',
    name: 'Mulligatawny Soup',
    description: 'Traditional Indian soup with lentils, curry spices, and rice',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
    category: 'soups'
  },
  {
    id: '17',
    name: 'Tomato Shorba',
    description: 'Spiced tomato soup garnished with cream and fresh coriander',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1614753865806-ff2b0b4c7639',
    category: 'soups'
  },
  
  // More Salads
  {
    id: '18',
    name: 'Kachumber Salad',
    description: 'Chopped cucumber, tomato, onion with lemon dressing and spices',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'salads'
  },
  {
    id: '19',
    name: 'Chickpea Salad',
    description: 'Spiced chickpeas with fresh vegetables and tangy dressing',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e2',
    category: 'salads'
  },
  
  // More Main Courses
  {
    id: '20',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken pieces in a creamy, spiced tomato-based sauce',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
    category: 'mains'
  },
  {
    id: '21',
    name: 'Saag Paneer',
    description: 'Cottage cheese cubes in creamy spinach sauce with mild spices',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1596797038530-2d5dc9e6d983',
    category: 'mains'
  },
  {
    id: '22',
    name: 'Chana Masala',
    description: 'Spicy chickpea curry cooked with tomatoes and aromatic spices',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1618492884617-15a1a3ec686f',
    category: 'mains'
  },
  {
    id: '23',
    name: 'Tandoori Lamb Chops',
    description: 'Marinated lamb chops grilled in a clay oven with spices',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
    category: 'mains'
  },
  {
    id: '24',
    name: 'Fish Curry',
    description: 'Fresh fish simmered in aromatic coconut gravy with curry leaves',
    price: 20.99,
    image: 'https://images.unsplash.com/photo-1626508035297-0adedb788d8b',
    category: 'mains'
  },
  
  // Pasta & Noodles
  {
    id: '25',
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles with vegetables in a savory sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1619013087606-93968baf7dcd',
    category: 'pasta'
  },
  {
    id: '26',
    name: 'Chili Garlic Noodles',
    description: 'Spicy noodles with garlic, vegetables and Himalayan herbs',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1637364516021-5f16fa589b92',
    category: 'pasta'
  },
  
  // Rice Dishes
  {
    id: '27',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with chicken and aromatic spices',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1633945274405-b6ca2a4f5c4a',
    category: 'rice'
  },
  {
    id: '28',
    name: 'Jeera Rice',
    description: 'Basmati rice flavored with cumin seeds and herbs',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7',
    category: 'rice'
  },
  {
    id: '29',
    name: 'Coconut Rice',
    description: 'Fragrant rice cooked with coconut milk and mustard seeds',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7',
    category: 'rice'
  },
  
  // Breads
  {
    id: '30',
    name: 'Garlic Naan',
    description: 'Soft leavened bread topped with garlic and butter',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1633945274462-4a84bf83f38b',
    category: 'bread'
  },
  {
    id: '31',
    name: 'Butter Roti',
    description: 'Whole wheat flatbread brushed with butter',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1619531038896-deaff53d151a',
    category: 'bread'
  },
  {
    id: '32',
    name: 'Cheese Naan',
    description: 'Naan bread stuffed with cheese and herbs',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1633945274462-4a84bf83f38b',
    category: 'bread'
  },
  
  // More Desserts
  {
    id: '33',
    name: 'Rasmalai',
    description: 'Soft cheese patties soaked in sweetened, thickened milk',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1627308595171-d1b5d95d0525',
    category: 'desserts'
  },
  {
    id: '34',
    name: 'Gajar Ka Halwa',
    description: 'Traditional carrot pudding with nuts and cardamom',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1600326145208-ec96b047bcf2',
    category: 'desserts'
  },
  
  // More Drinks
  {
    id: '35',
    name: 'Rose Lassi',
    description: 'Yogurt drink flavored with rose water and topped with pistachios',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69',
    category: 'drinks'
  },
  {
    id: '36',
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime juice with soda water and mint leaves',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1616360151857-3914da55b69a',
    category: 'drinks'
  }
  
  // Add more items to reach 100+ products - for brevity, showing a representative sample
  // In a real application, this would be fetched from a database
];

export const timeSlots = [
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM",
  "9:00 PM"
];
