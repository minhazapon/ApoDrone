import React, { useState } from "react";

const ProductManager = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    location: "",
    image: null,
  }); // Form data

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] }); // Handle image upload
    } else {
      setForm({ ...form, [name]: value }); // Handle text inputs
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.price ||
      !form.description ||
      !form.location ||
      !form.image
    ) {
      alert("Please fill in all fields and upload an image!");
      return;
    }

    // Generate a URL for the uploaded image to preview
    const imageUrl = URL.createObjectURL(form.image);
    setProducts([...products, { ...form, id: Date.now(), image: imageUrl }]);
    setForm({ name: "", price: "", description: "", location: "", image: null }); // Reset form
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6  droFont">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Add Your Products</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-2">Price ($)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-black"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-md p-4 shadow-md flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-1">Price: ${product.price}</p>
                <p className="text-gray-600 mb-1">Location: {product.location}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  onClick={() => handleDelete(product.id)

                    

                  }
                  className="mt-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
                <button className=" droFont btn mt-5 bg-cyan-400 text-white ">Buy</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManager;
