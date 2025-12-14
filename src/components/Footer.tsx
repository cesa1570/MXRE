import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from './ui/Button';

export function Footer() {
    return (
        <footer className="bg-mxre-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold tracking-[0.2em] mb-6">MXRE</h2>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Redefining urban fashion with premium essentials.
                            Designed for the chaos of the modern city.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">Shop</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for early access to drops.</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border border-white/20 p-3 text-sm focus:border-white focus:outline-none placeholder:text-gray-600"
                            />
                            <Button variant="primary" className="w-full">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
                    <p>© 2025 MXRE Clothing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
