
import './App.css';
import { useState } from 'react';
function App() {
  const products = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
    { id: 6, name: "Fig" },
    { id: 7, name: "Grape" },
    { id: 8, name: "Honeydew" }
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="mb-5 p-2 border border-gray-300 rounded-md w-1/2 "
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className="w-1/2 bg-white rounded-lg shadow-lg p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ul
              key={product.id}
              className="p-2 border-b last:border-none hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              {product.name}
            </ul>
          ))
        ) : (
          <ul className="p-2 text-gray-500">No products found</ul>
        )}
      </ul>
    </div>
  );
}

export default App;
