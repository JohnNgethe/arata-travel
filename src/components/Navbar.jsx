import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Arata Travel</Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/packages" className="hover:text-blue-200">Packages</Link></li>
                        <li><Link to="/destinations" className="hover:text-blue-200">Destinations</Link></li>
                        <li><Link to="/hotels" className="hover:text-blue-200">Hotels</Link></li>
                        <li><Link to="/activities" className="hover:text-blue-200">Activities</Link></li>
                        <li><Link to="/shop" className="hover:text-blue-200">Shop</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );


}

export default Navbar;
