function PackageCard({ image, title, location, price }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-500">{location}</p>
                <p className="text-blue-500 font-bold mt-2">${price}</p>
            </div>
        </div>
    );
}

export default PackageCard;
