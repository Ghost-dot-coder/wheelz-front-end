import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Store() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all cars from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter cars by search term
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-xl">
        Loading cars...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Header />

      {/* Header Section */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Explore Our Cars</h1>
        <p className="text-lg text-gray-300">
          Browse through our wide selection of premium vehicles.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mt-8 mb-6 px-6">
        <input
          type="text"
          placeholder="Search cars by name..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cars Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filteredCars.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-700 mb-4">{car.price}</p>
                  <Link
                    to={`/cars/${car.id}`}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10 text-lg">
            No cars found.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Store;
