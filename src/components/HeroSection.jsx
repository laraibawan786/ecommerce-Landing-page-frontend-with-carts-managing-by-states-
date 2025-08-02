
import heroImage from "../assets/hero.JPEG"; 

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full bg-white py-16 px-6 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto"
    >
      {/* Left Text */}
      <div className="text-center lg:text-left flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Unveil Your Style <br className="hidden md:block" />
          With Every Step
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Discover exclusive collections designed for trendsetters like you.
        </p>
        <a
          href="#products"
          className="inline-block mt-6 px-8 py-3 bg-black text-white text-lg rounded-md hover:bg-gray-900 transition"
        >
          Shop Now
        </a>
      </div>

      <div className="flex-1">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
