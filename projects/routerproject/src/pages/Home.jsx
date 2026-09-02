import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="text-center py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-600 font-semibold mb-3">
          Welcome to Simple Shop
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Everything you need,
          <span className="text-blue-600"> in one place.</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Discover quality products at simple and affordable prices.
        </p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
