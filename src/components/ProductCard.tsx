import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Overlay Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <Button className="w-full bg-white text-black hover:bg-gray-200 uppercase font-bold tracking-widest text-xs py-3">
                        Add to Bag - ฿{price.toLocaleString()}
                    </Button>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">Oversized Fit</p>
                </div>
                <p className="text-sm font-medium text-white">฿{price.toLocaleString()}</p>
            </div>
        </motion.div>
    );
}
