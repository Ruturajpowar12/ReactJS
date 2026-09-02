import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      description:
        "Powerful laptop suitable for work, study and entertainment.",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 30000,
      category: "Electronics",
      description: "Modern smartphone with excellent performance and camera.",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
      description: "Comfortable headphones with clear and powerful sound.",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      description: "Compact keyboard perfect for everyday typing.",
    },
  ];

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Product Not Found</h1>

        <Link
          to="/products"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-8"
      >
        ← Go Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}

        <div className="h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
          <span className="text-8xl">🛍️</span>
        </div>

        {/* Product Info */}

        <div>
          <p className="text-blue-600 font-medium">{product.category}</p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>

          <p className="text-3xl font-bold mt-5">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 leading-7 mt-6">{product.description}</p>

          <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg mt-8 font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
