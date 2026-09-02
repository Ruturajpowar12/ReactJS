import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 30000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Products</h1>

        <p className="text-gray-600 mt-2">Explore our latest products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-5xl">🛍️</span>
            </div>

            <div className="p-5">
              <p className="text-sm text-blue-600 font-medium">
                {product.category}
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-1">
                {product.name}
              </h2>

              <p className="text-lg font-bold mt-3">
                ₹{product.price.toLocaleString()}
              </p>

              <Link
                to={`/products/${product.id}`}
                className="block text-center bg-gray-900 text-white mt-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
