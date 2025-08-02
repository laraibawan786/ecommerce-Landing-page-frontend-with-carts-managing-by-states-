import React from "react";
import { useCart } from "../context/CartContext";
import Img from "../assets/Product1.jpg";
import Img1 from "../assets/Product2.jpg";
import Img2 from "../assets/Product3.jpg";
import Img3 from "../assets/Product4.jpg";
import Img4 from "../assets/Product5.jpg";
import Img5 from "../assets/Product6.jpg";
import Img6 from "../assets/Product7.jpg";
import Img7 from "../assets/Product8.jpg";
import Img8 from "../assets/Product9.jpg";
const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 1800,
     image: Img, 
  },
  {
    id: 2,
    name: "Elegancia Court-Shoes",
    price: 4500,
     image: Img1, 
  },
  {
    id: 3,
    name: "Gentle-Women-III",
    price: 2999,
     image: Img2, 
  },
    {
    id: 4,
    name: "Royal Watches",
    price: 7999,
     image: Img3, 
  },
    {
    id: 5,
    name: "Court-Shoes",
    price: 8990,
     image: Img4, 
  },
    {
    id: 6,
    name: "Office Outfit",
    price: 8879,
     image: Img5, 
  },
    {
    id: 7,
    name: "Brown Blazzer",
    price: 5699,
     image: Img6, 
  },
    {
    id: 8,
    name: "MK Genuine (OffWhite)",
    price: 5999,
     image: Img7, 
  },
    {
    id: 9,
    name: "Dior Black",
    price: 6999,
     image: Img8, 
  },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-11 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center w-100 h-[400px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-7"
            />
            <h3 className="text-lg font-semibold text-gray-800 h-[200]">{product.name}</h3>
            <p className="text-gray-600 mb-2">PKR {product.price}</p>
            <button
              onClick={() => addToCart(product)}   // ✅ direct helper call
              className="mt-auto px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
