import React from 'react';
import Link from 'next/link';

function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/about' },
    { name: 'What We Do', href: '/services' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-black/10 border-b border-white/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <img
                className="h-11 w-56 object-contain"
                src="https://indidevelopers.com/assets/blackLogo-CnkHWG4m.png"
                alt="Indidevelopers Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300 hover:bg-white/10 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="bg-(--color) text-white hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder for now) */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;