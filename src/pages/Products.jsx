import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
const Products = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      const sortedProducts = response.data.data.products.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setProducts(sortedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    console.log(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const deleteProduct = async (id) => {
    const confirmation = window.confirm(
      "Do you really want to delete the product?"
    );

    if (confirmation) {
      try {
        await axios.delete(`${baseUrl}/products/${id}`);
        alert("Product deleted successfully");
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert(
          "An error occurred while deleting the product. Please try again."
        );
      }
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Box>
        <Title>Products</Title>
        <div className="flex flex-wrap mt-4">
          <table className="table-auto min-w-full overflow-x-auto text-left text-sm ">
            <thead className="border-b border-black">
              <tr>
                <th className="px-6 pb-3">No</th>
                <th className="px-6 pb-3">Name</th>
                <th className="px-6 pb-3">Status</th>
                <th className="px-6 pb-3">Description</th>
                <th className="px-6 pb-3">Stok</th>
                <th className="px-6 pb-3">Minimum Credits</th>
                <th className="px-6 pb-3">Price</th>
                <th className="px-6 pb-3">Category</th>
                <th className="px-6 pb-3">Series</th>
                <th className="px-6 pb-3">Character</th>
                <th className="px-6 pb-3">Manufacture</th>
                <th className="px-6 pb-3">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {currentProducts.map((product, index) => (
                <tr key={product.id}>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 uppercase">
                    {product.title.substring(0, 20) + "..."}
                  </td>
                  <td className="px-6 py-4 uppercase">{product.status}</td>
                  <td className="px-6 py-4 uppercase">
                    {product.description.substring(0, 20) + "..."}
                  </td>
                  <td className="px-6 py-4 capitalize">{product.stock}</td>
                  <td className="px-6 py-4 capitalize">
                    {product.minimumCredits}
                  </td>
                  <td className="px-6 py-4 capitalize">{product.price}</td>
                  <td className="px-6 py-4 capitalize truncate">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 capitalize">{product.series}</td>
                  <td className="px-6 py-4 capitalize">{product.character}</td>
                  <td className="px-6 py-4 capitalize">
                    {product.manufacture}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
      <div className="flex  w-full mt-4  justify-center">
        <nav className="">
          <ul className="flex gap-x-2">
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={`p-4 ${
                  currentPage === pageNumber
                    ? "active active:bg-violet-700"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Products;
