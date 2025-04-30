// //validation done

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// // import TitleHead from "../Header/TitleHead";

// const CreateBanner = () => {
//   const [selectedCategory, setSelectedCategory] = useState("vendor");
//   const [options, setOptions] = useState([]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     switch (category) {
//       case "vendor":
//         setOptions(["Select Restaurant", "Vendor 1", "Vendor 2"]);
//         break;
//       case "product":
//         setOptions(["Select Food", "Product 1", "Product 2"]);
//         break;
//       case "external":
//         setOptions(["Select External Link", "Link 1", "Link 2"]);
//         break;
//       default:
//         setOptions([]);
//     }
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission here
//   };

//   return (
//     <>
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full md:w-11/12 lg:w-3/4"
//         >
//           <fieldset className="border rounded-md border-gray-300 px-4 py-5">
//             <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//               Banner Items
//             </legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-[1rem] font-semibold mb-2">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   {...register("title", { required: "Title is required" })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 {errors.title && (
//                   <p className="text-red-500 text-sm">{errors.title.message}</p>
//                 )}
//                 <div className="flex items-center gap-2 pt-4">
//                   <input
//                     type="checkbox"
//                     {...register("isPublish")}
//                     className="h-4 w-4"
//                   />
//                   <label className="block text-[1rem] font-semibold mb-2">
//                     IS Publish
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-[1rem] font-semibold mb-2">
//                   Set Order
//                 </label>
//                 <select
//                   {...register("order", { required: "Set Order is required" })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select Order</option>
//                   <option value="1">1st Order</option>
//                   {/* Add options as needed */}
//                 </select>
//                 {errors.order && (
//                   <p className="text-red-500 text-sm">{errors.order.message}</p>
//                 )}
//               </div>

//               <div className="mt-4">
//                 <label className="block text-[1rem] font-semibold mb-2">
//                   Image
//                 </label>
//                 <input
//                   type="file"
//                   {...register("image", { required: "Image is required" })}
//                   className=""
//                 />
//                 {errors.image && (
//                   <p className="text-red-500 text-sm">{errors.image.message}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-[1rem] font-semibold mb-2">
//                   Banner Position
//                 </label>
//                 <select
//                   id="dropdown"
//                   {...register("position", {
//                     required: "Banner Position is required",
//                   })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select Position</option>
//                   <option value="top">Top</option>
//                   <option value="left">Left</option>
//                   {/* Add options as needed */}
//                 </select>
//                 {errors.position && (
//                   <p className="text-red-500 text-sm">
//                     {errors.position.message}
//                   </p>
//                 )}
//               </div>

//               <div className="">
//                 <div className="mt-4">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       value="vendor"
//                       {...register("category", {
//                         required: "Category is required",
//                       })}
//                       checked={selectedCategory === "vendor"}
//                       onChange={() => handleCategoryChange("vendor")}
//                       className="form-radio text-red-600"
//                     />
//                     <span className="ml-2 text-gray-700 text-[1rem] font-semibold">
//                       Vendor
//                     </span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       value="product"
//                       {...register("category", {
//                         required: "Category is required",
//                       })}
//                       checked={selectedCategory === "product"}
//                       onChange={() => handleCategoryChange("product")}
//                       className="form-radio text-gray-600"
//                     />
//                     <span className="ml-2 text-gray-700 text-[1rem] font-semibold">
//                       Product
//                     </span>
//                   </label>
//                   <label className="inline-flex items-center">
//                     <input
//                       type="radio"
//                       value="external"
//                       {...register("category", {
//                         required: "Category is required",
//                       })}
//                       checked={selectedCategory === "external"}
//                       onChange={() => handleCategoryChange("external")}
//                       className="form-radio text-gray-600"
//                     />
//                     <span className="ml-2 text-gray-700 text-[1rem] font-semibold">
//                       External Link
//                     </span>
//                   </label>
//                 </div>
//                 <div className="my-4">
//                   <label
//                     htmlFor="dropdown"
//                     className="block text-gray-700 text-[1rem] font-semibold"
//                   >
//                     {selectedCategory === "vendor"
//                       ? "Vendor"
//                       : selectedCategory === "product"
//                       ? "Product"
//                       : "External Link"}
//                   </label>
//                   <select
//                     id="dropdown"
//                     {...register("dropdown", {
//                       required: "Selection is required",
//                     })}
//                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   >
//                     <option value="">Select {selectedCategory}</option>
//                     {options.map((option, index) => (
//                       <option key={index} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.dropdown && (
//                     <p className="text-red-500 text-sm">
//                       {errors.dropdown.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </fieldset>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
//             >
//               <FaFileInvoice /> Save
//             </button>
//             <button
//               type="button"
//               className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
//             >
//               <FaArrowRotateLeft /> Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateBanner;

"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaImage, FaLink, FaGlobe, FaCalendarAlt } from "react-icons/fa"
import TitleHead from "../Header/TitleHead"

const CreateBanner = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: null,
    imagePreview: "",
    link: "",
    linkType: "internal", // internal or external
    status: true,
    position: "top",
    startDate: "",
    endDate: "",
    priority: 0,
  })

  const [loading, setLoading] = useState(isEditMode)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (isEditMode) {
      // Simulate API call to fetch banner data
      setLoading(true)
      setTimeout(() => {
        // Mock data for editing
        const mockBanner = {
          id,
          title: "Special Offer",
          subtitle: "Get 20% off on your first order",
          imagePreview: "https://foodie.siswebapp.com/images/banner-1.jpg",
          link: "/offers/special",
          linkType: "internal",
          status: true,
          position: "top",
          startDate: "2023-08-01",
          endDate: "2023-12-31",
          priority: 1,
        }
        setFormData(mockBanner)
        setLoading(false)
      }, 800)
    }
  }, [id, isEditMode])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setFormData((prev) => ({
            ...prev,
            image: files[0],
            imagePreview: e.target.result,
          }))
        }
        reader.readAsDataURL(files[0])
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.imagePreview && !formData.image) {
      newErrors.image = "Banner image is required"
    }

    if (formData.link && formData.linkType === "external" && !formData.link.startsWith("http")) {
      newErrors.link = "External link must start with http:// or https://"
    }

    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = "End date must be after start date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      navigate("/banners-items")
    }, 1000)
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead
        title={isEditMode ? "Edit Banner" : "Create Banner"}
        desc={isEditMode ? "Edit Banner" : "Create Banner"}
        link="/banner-items"
        desc2="> Banner"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex items-center">
            <FaImage className="text-3xl mr-4" />
            <h1 className="text-2xl font-bold">{isEditMode ? "Edit Banner" : "Create New Banner"}</h1>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Banner Title*
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.title ? "border-red-500" : ""
                }`}
                placeholder="Enter banner title"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
                Subtitle
              </label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                value={formData.subtitle}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                placeholder="Enter banner subtitle"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Banner Image*</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.imagePreview ? (
                    <div>
                      <img
                        src={formData.imagePreview || "/placeholder.svg"}
                        alt="Banner preview"
                        className="mx-auto h-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }))}
                        className="mt-2 px-2 py-1 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-900 hover:text-primary-700"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                Banner Link
              </label>
              <div className="flex">
                <div className="inline-block relative w-32">
                  <select
                    name="linkType"
                    value={formData.linkType}
                    onChange={handleChange}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="internal">Internal</option>
                    <option value="external">External</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <input
                  id="link"
                  name="link"
                  type="text"
                  value={formData.link}
                  onChange={handleChange}
                  className={`shadow appearance-none border border-l-0 rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.link ? "border-red-500" : ""
                  }`}
                  placeholder={formData.linkType === "internal" ? "/products/category" : "https://example.com"}
                />
              </div>
              <div className="flex items-center mt-1">
                {formData.linkType === "internal" ? (
                  <FaLink className="text-xs text-gray-500 mr-1" />
                ) : (
                  <FaGlobe className="text-xs text-gray-500 mr-1" />
                )}
                <p className="text-xs text-gray-500">
                  {formData.linkType === "internal"
                    ? "Internal links should start with /"
                    : "External links should start with http:// or https://"}
                </p>
              </div>
              {errors.link && <p className="text-red-500 text-xs mt-1">{errors.link}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Banner Position</label>
              <div className="mt-2">
                <div className="flex items-center">
                  <input
                    id="position-top"
                    name="position"
                    type="radio"
                    value="top"
                    checked={formData.position === "top"}
                    onChange={handleChange}
                    className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
                  />
                  <label htmlFor="position-top" className="ml-3 block text-sm font-medium text-gray-700">
                    Top
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    id="position-middle"
                    name="position"
                    type="radio"
                    value="middle"
                    checked={formData.position === "middle"}
                    onChange={handleChange}
                    className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
                  />
                  <label htmlFor="position-middle" className="ml-3 block text-sm font-medium text-gray-700">
                    Middle
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    id="position-bottom"
                    name="position"
                    type="radio"
                    value="bottom"
                    checked={formData.position === "bottom"}
                    onChange={handleChange}
                    className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
                  />
                  <label htmlFor="position-bottom" className="ml-3 block text-sm font-medium text-gray-700">
                    Bottom
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                      errors.endDate ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                Priority
              </label>
              <input
                id="priority"
                name="priority"
                type="number"
                min="0"
                max="10"
                value={formData.priority}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
              />
              <p className="text-xs text-gray-500 mt-1">Higher priority banners will be shown first (0-10)</p>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm font-medium">Active</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/banner-items")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
              isSaving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaSave className="mr-2" />
            {isSaving ? "Saving..." : "Save Banner"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateBanner
