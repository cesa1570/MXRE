import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-mxre-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="MXRE Logo" className="h-8 md:h-10 w-auto" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                                <a key={item} href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-gray-300 hover:text-white transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <button className="text-gray-300 hover:text-white transition-colors relative">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full flex items-center justify-center text-[8px] font-bold text-black">2</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-mxre-black border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                                <a key={item} href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white uppercase tracking-widest">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
