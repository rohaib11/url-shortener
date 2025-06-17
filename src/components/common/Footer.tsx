import { Link } from 'react-router-dom';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from './SocialIcons';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: TwitterIcon,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramIcon,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: GitHubIcon,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: LinkedInIcon,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Short.ly, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
