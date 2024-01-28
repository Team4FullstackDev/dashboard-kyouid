import React, { useRef, useState } from "react";
import Box from "../components/Box";
import axios from "axios";

const AddProducts = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
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
  const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const thumbnailRef = useRef(null);

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
  // const handleImageChange = (e, index) => {
  //   const newImages = [...images];
  //   newImages[index - 1] = e.target.files[0];
  //   setImages(newImages);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if at least one image is selected
      if (images.length === 0) {
        alert("Please select at least one image");
        return;
      }

      const formData = new FormData();

      // Add product information to formData
      formData.append("title", title);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("minimumCredits", minimumCredits);
      formData.append("category", category);
      formData.append("character", character);
      formData.append("series", series);
      formData.append("manufacture", manufacture);

      // Add thumbnail to formData
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      // Add images to formData
      for (let i = 0; i < images.length; i++) {
        formData.append("image", images[i]);
      }

      // Send product information and images in a single request
      const createProduct = await axios.post(`${baseUrl}/products`, formData);

      console.log("Product created successfully:", createProduct.data);
      alert("Product and images are successfully uploaded!");
      resetForm();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("");
    setPrice("");
    setStock("");
    setMinimumCredits("");
    setCategory("");
    setCharacter("");
    setSeries("");
    setManufacture("");
    setThumbnail([]);
    setImages([]);
    thumbnailRef.current.value = "";
  };

  return (
    <>
      <Box>
        <div className="w-full mt-4 px-12">
          <form
            onSubmit={handleSubmit}
            className="mt-12"
            encType="multipart/form-data"
          >
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
                  name={status}
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
                  name={category}
                  id=""
                  className="  px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  onChange={(e) => setCategory(e.target.value)}
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
                  htmlFor="thumbnail"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Thumbnail :
                </label>
                <input
                  ref={thumbnailRef}
                  type="file"
                  id="thumbnail"
                  onChange={(e) =>
                    setThumbnail(e.target.files && e.target.files[0])
                  }
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
                <input
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  type="file"
                  name="image[]"
                  id="image"
                  onChange={(e) => setImages(e.target.files)}
                  multiple
                />
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
              className="bg-mod-color-orange-100 py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default AddProducts;
