import Hero from "../components/Hero";
import PackageCard from "../components/PackageCard";

const samplePackages = [
    { id: 1, title: "Tropical Paradise", location: "Bali, Indonesia", price: 1200, image: "/bali.jpg" },
    { id: 2, title: "Mountain Adventure", location: "Swiss Alps, Switzerland", price: 1500, image: "/swiss.jpg" },
    { id: 3, title: "Safari Experience", location: "Maasai Mara, Kenya", price: 1800, image: "/mara.jpg" },
];

function Home() {
    return (
        <div>
            <Hero />
            <div className="text-center p-10">
                <h2 className="text-3xl font-semibold">Popular Travel Packages</h2>
                <p className="text-gray-600">Choose from our best-curated experiences</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {samplePackages.map((pkg) => (
                        <PackageCard key={pkg.id} {...pkg} />
                    ))}
                </div>
                <div className="bg-gray-100 py-10 mt-10 text-center">
                    <h2 className="text-3xl font-semibold">Why Choose Arata Travel?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 max-w-5xl mx-auto">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold">Handpicked Destinations</h3>
                            <p className="text-gray-600 mt-2">We offer the most breathtaking and exclusive
                                locations.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold">Best Price Guarantee</h3>
                            <p className="text-gray-600 mt-2">Get the best deals and discounts on all packages.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold">24/7 Support</h3>
                            <p className="text-gray-600 mt-2">We're here to assist you anytime, anywhere.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
