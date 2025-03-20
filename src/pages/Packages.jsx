import { useState } from "react";
import PackageCard from "../components/PackageCard";

const allPackages = [
    { id: 1, title: "Tropical Paradise", location: "Bali, Indonesia", price: 1200, image: "/bali.jpg" },
    { id: 2, title: "Mountain Adventure", location: "Swiss Alps, Switzerland", price: 1500, image: "/swiss.jpg" },
    { id: 3, title: "Safari Experience", location: "Maasai Mara, Kenya", price: 1800, image: "/mara.jpg" },
    { id: 4, title: "Desert Safari", location: "Dubai, UAE", price: 900, image: "/dubai.jpg" },
    { id: 5, title: "City Lights", location: "New York, USA", price: 1300, image: "/nyc.jpg" },
];

function Packages() {
    const [filteredPackages, setFilteredPackages] = useState(allPackages);
    const [sortOrder, setSortOrder] = useState("default");
    const [selectedLocation, setSelectedLocation] = useState("all");

    // Get unique locations for dropdown
    const uniqueLocations = ["All", ...new Set(allPackages.map((pkg) => pkg.location))];

    const sortPackages = (order) => {
        let sorted = [...filteredPackages];

        if (order === "price-low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (order === "price-high") {
            sorted.sort((a, b) => b.price - a.price);
        }

        setFilteredPackages(sorted);
        setSortOrder(order);
    };

    const filterByLocation = (location) => {
        setSelectedLocation(location);

        if (location === "All") {
            setFilteredPackages(allPackages);
        } else {
            setFilteredPackages(allPackages.filter((pkg) => pkg.location === location));
        }
    };

    return (
        <div className="p-10">
            <h2 className="text-3xl font-semibold text-center">Explore Our Travel Packages</h2>

            {/* Sorting & Filtering Controls */}
            <div className="flex justify-between my-4">
                {/* Location Filter */}
                <select
                    value={selectedLocation}
                    onChange={(e) => filterByLocation(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                >
                    {uniqueLocations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>

                {/* Sorting Dropdown */}
                <select
                    value={sortOrder}
                    onChange={(e) => sortPackages(e.target.value)}
                    className="px-4 py-2 border rounded-lg"
                >
                    <option value="default">Sort by Default</option>
                    <option value="price-low">Sort by Price: Low to High</option>
                    <option value="price-high">Sort by Price: High to Low</option>
                </select>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {filteredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} {...pkg} />
                ))}
            </div>
        </div>
    );
}

export default Packages;
