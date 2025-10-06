import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CarDetails() {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Car not found");
        }
        return response.json();
      })
      .then((data) => {
        setCar(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);


  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-700 text-xl">
        Loading car details...
      </div>
    );
  }


  if (error || !car || !car.id) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-xl">
        {error || "Car not found."}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative h-[60vh]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-extrabold mb-2">{car.name}</h1>
          <p className="text-2xl">{car.price}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">About this car</h2>
        <p className="text-gray-700 leading-relaxed mb-8">{car.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/store"
            className="text-red-500 hover:text-red-600 font-semibold text-lg mb-4 sm:mb-0"
          >
            ← Back to Store
          </Link>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Buy Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CarDetails;
