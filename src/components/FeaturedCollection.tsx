import { ProductCard } from './ProductCard';
import hoodieImg from '../assets/images/product_hoodie.png';
import tshirtImg from '../assets/images/product_tshirt.png';
import pantsImg from '../assets/images/product_pants.png';

const PRODUCTS = [
    {
        id: '1',
        name: 'Ghost Hoodie',
        price: 2490,
        image: hoodieImg
    },
    {
        id: '2',
        name: 'Chaos Tee',
        price: 1290,
        image: tshirtImg
    },
    {
        id: '3',
        name: 'Tactical Cargo',
        price: 3290,
        image: pantsImg
    }
];

export function FeaturedCollection() {
    return (
        <section className="py-24 bg-mxre-black px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                        Latest Drops
                    </h2>
                    <a href="#" className="hidden md:block text-sm text-gray-400 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-white transition-colors pb-1">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-sm text-white border-b border-white pb-1 uppercase tracking-widest">
                        View All Products
                    </a>
                </div>
            </div>
        </section>
    );
}
