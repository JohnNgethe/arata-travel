import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Destinations from "./pages/Destinations";
import Hotels from "./pages/Hotels";
import Activities from "./pages/Activities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Packages from "./pages/Packages.jsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/activities" element={<Activities />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
