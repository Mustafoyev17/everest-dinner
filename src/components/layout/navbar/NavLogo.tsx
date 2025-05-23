
import { Link } from 'react-router-dom';

export default function NavLogo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="font-bold text-2xl md:text-3xl font-['Playfair_Display'] text-restaurant-blue dark:text-restaurant-light-gold">
        Everest
      </span>
    </Link>
  );
}
