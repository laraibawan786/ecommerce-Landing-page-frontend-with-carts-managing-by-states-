import React from "react";
import { useCart } from "../context/CartContext"; 
import shirtImg from "../assets/image1.jpg"; 
import shirtImg1 from "../assets/image2.jpg";
import shirtImg2 from "../assets/image3.jpg";
import shirtImg3 from "../assets/image4.jpg";
import shirtImg4 from "../assets/image6.jpg";
import shirtImg5 from "../assets/image5.jpg";
const categories = [
   {
    id: 1,
    name: "LONG_COURTS",
    image: shirtImg,   
  },
  {
    id: 2,
    name: "Pants",
    image: shirtImg1
   
  },
  {
    id: 3,
    name: "Shirts",
   image: shirtImg2
  },
  {
    id: 4,
    name: "Accesories",
   image: shirtImg3
  },
  {
    id: 5,
    name: "Shoes",
   image: shirtImg4
  },
  {
    id: 6,
    name: "Bags",
   image: shirtImg5
  },
];

const CategoryCards = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (category) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: category.id,
        name: category.name,
     
      },
    });
  };

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white w-100 h-[600px]"

          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-100 object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
