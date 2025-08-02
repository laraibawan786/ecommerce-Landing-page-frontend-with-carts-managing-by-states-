
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-semibold tracking-wide">OLD MONEY OUTFITS</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#home" className="text-gray-700 hover:text-black transition">Home</a>
        <a href="#products" className="text-gray-700 hover:text-black transition">Products</a>
        <a href="#cart" className="text-gray-700 hover:text-black transition">Cart</a>
         <a href="#cart" className="text-gray-700 hover:text-black transition">Contact us</a>
          <a href="#cart" className="text-gray-700 hover:text-black transition">Track your Order</a>
      </div>
      <button className="md:hidden text-gray-600 focus:outline-none">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
