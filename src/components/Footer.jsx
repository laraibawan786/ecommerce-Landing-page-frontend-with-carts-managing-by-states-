

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12 mt-20 border-t">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-light text-gray-800">
          Join Our Newsletter<br />for 10% Off
        </h2>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
