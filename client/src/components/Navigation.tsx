import { useState, useEffect } from "react";
import { Wrench, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/services", label: "Services", isRoute: true },
    { href: "#about", label: "About", isRoute: false }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-wider">
                RELIANCE EQUIPMENT
              </h1>
              <p className="text-xs font-mono text-gray-600">EST. 1982</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-semibold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-semibold transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            ))}
            <Button 
              asChild 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover-lift"
            >
              <a href="#contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-red-600 font-semibold py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-red-600 font-semibold py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button 
                asChild 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold mt-2"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
