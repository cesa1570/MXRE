import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="bg-mxre-black min-h-screen text-white font-sans antialiased selection:bg-white selection:text-black">
            <Navbar />
            <Hero />
            <FeaturedCollection />
            <Footer />
        </div>
    )
}

export default App
