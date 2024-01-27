import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const EditProducts = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [msg, setMsg] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [minimumCredits, setMinimumCredits] = useState("");
  const [category, setCategory] = useState("");
  const [series, setSeries] = useState("");
  const [character, setCharacter] = useState("");
  const [manufacture, setManufacture] = useState("");

  const categories = [
    { value: "Nendoroid" },
    { value: "Scaled Figure" },
    { value: "Prize Figure" },
    { value: "Pop Up Parade" },
    { value: "Model Kit" },
    { value: "Figma" },
    { value: "Merchandise" },
    { value: "Plush" },
    { value: "Light Novel" },
    { value: "Manga" },
    { value: "" },
  ];

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${baseUrl}/products/${id}`, {
        title,
        description,
        status,
        price,
        stock,
        minimumCredits,
        category,
        character,
        series,
        manufacture,
      });
      navigate("/");
      alert("Product updated successfully");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const getProductById = async () => {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    setCategory(response.data.data.category);
    setTitle(response.data.data.title);
    setDescription(response.data.data.description);
    setStatus(response.data.data.status);
    setPrice(response.data.data.price);
    setStock(response.data.data.stock);
    setMinimumCredits(response.data.data.minimumCredits);
    setCharacter(response.data.data.character);
    setSeries(response.data.data.series);
    setManufacture(response.data.data.manufacture);
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      <Box>
        <div className="w-full mt-4 px-12">
          <form onSubmit={updateProduct} className="mt-12">
            {/* information Product */}
            <div id="information" className=" mb-4">
              <p className="text-3xl font-bold">Informasi Produk</p>
              <div className="mt-4 mb-4">
                <label
                  htmlFor="productName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Name :
                </label>
                <input
                  type="text"
                  id="productName"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Status :
                </label>
                <select
                  name=""
                  id=""
                  className="  px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value=""> </option>
                  <option value="Ready Stock">Ready Stock</option>
                  <option value="Pre Order">Pre Order</option>
                  <option value="Late Pre-Order"> Late Pre-Order</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stock"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Stock :
                </label>
                <input
                  type="number"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="w-32 px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Category :
                </label>
                <select
                  name=""
                  id=""
                  className="  px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                >
                  {categories
                    .sort((a, b) => a.value.localeCompare(b.value))
                    .map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.value}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description :
                </label>
                <textarea
                  type=""
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
            </div>
            {/* end information Product */}

            {/* detail Product */}
            <div id="detail" className="mt-12 mb-4">
              <p className="text-3xl font-bold">Detail Product </p>
              <div className="mt-4 mb-4">
                <label
                  htmlFor="character"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Character :
                </label>
                <input
                  type="text"
                  id="character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="series"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Series:
                </label>
                <input
                  type="text"
                  id="series"
                  value={series}
                  onChange={(e) => setSeries(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="manufacture"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Manufacture :
                </label>
                <input
                  type="text"
                  id="manufacture"
                  value={manufacture}
                  onChange={(e) => setManufacture(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Upload Image:
                </label>

                {/* <div className="grid grid-cols-3 gap-4">
                  <input
                    type="file"
                    id="image"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    className=" px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                  <input
                    type="file"
                    id="image"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    className=" px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                  <input
                    type="file"
                    id="image"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    className=" px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div> */}
              </div>
            </div>
            {/* end detail Product */}

            {/* price Product */}
            <div id="price" className=" mt-12 mb-4">
              <p className="text-3xl font-bold">Price Product </p>
              <div className="mt-4 mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price :
                </label>
                <input
                  type="number"
                  id="character"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="minimumCredits"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Minimum Credits:
                </label>
                <input
                  type="number"
                  id="minimumCredits"
                  value={minimumCredits}
                  onChange={(e) => setMinimumCredits(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>
            </div>
            {/* end price Product */}

            <button
              type="submit"
              className="bg-mod-color-orange-100   font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default EditProducts;
