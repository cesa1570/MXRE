import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import heroBg from '../assets/images/hero_background.png';

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mxre-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-mxre-black via-transparent to-black/20 z-10" />
                <img
                    src={heroBg}
                    alt="MXRE Urban Background"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-gray-300 tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
                        Est. 2025 // Urban Essentials
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-6">
                        REDEFINE <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            YOUR STYLE
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light tracking-wide">
                        Premium streetwear for the modern individual. embrace the chaos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="w-full sm:w-auto">
                            Shop Drop
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            View Lookbook
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs tracking-widest uppercase writing-vertical-rl">Scroll</span>
            </motion.div>
        </section>
    );
}
