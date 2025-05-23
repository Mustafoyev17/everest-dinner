
import { Link, useLocation } from 'react-router-dom';

type NavLink = {
  name: string;
  path: string;
};

type NavLinksProps = {
  links: NavLink[];
  isMobile?: boolean;
};

export default function NavLinks({ links, isMobile = false }: NavLinksProps) {
  const location = useLocation();
  const activeClass = "text-restaurant-gold";
  
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              location.pathname === link.path ? activeClass : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-medium hover:text-restaurant-gold transition-colors ${
            location.pathname === link.path ? activeClass : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
