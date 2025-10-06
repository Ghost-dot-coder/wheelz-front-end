import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-xl">
        Loading cars...
      </div>
    );
  }

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

      <section className="bg-[url('https://images.unsplash.com/photo-1605719122561-21e3cdbc62a7')] bg-cover bg-center h-[75vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Ride</h1>
          <p className="text-lg mb-6">
            Explore a wide range of cars, from luxury to budget-friendly.
          </p>
          <Link
            to="/store"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Cars</h2>

        {cars.length === 0 ? (
          <p className="text-center text-gray-600">
            No cars available right now.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.slice(0, 3).map(
              (
                car // <-- Only first 3 cars
              ) => (
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
              )
            )}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Home;
