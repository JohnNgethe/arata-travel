function Hero() {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-5">
                <h1 className="text-4xl md:text-6xl font-bold">Explore the World with Arata Travel</h1>
                <p className="text-lg md:text-xl mt-4">Unforgettable experiences, breathtaking destinations, and exclusive deals.</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-lg transition">
                    Discover Packages
                </button>
            </div>
        </div>
    );
}

export default Hero;
