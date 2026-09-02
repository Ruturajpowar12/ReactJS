import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="text-center py-20">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-6">🛒</div>

        <h1 className="text-4xl font-bold text-gray-900">Your Cart is Empty</h1>

        <p className="text-gray-600 mt-3">
          You haven't added any products yet.
        </p>

        <Link
          to="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    </section>
  );
}

export default Cart;
