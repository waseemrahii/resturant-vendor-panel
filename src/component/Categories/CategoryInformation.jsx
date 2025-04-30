// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { FaFileInvoice, FaArrowRotateLeft, FaUtensils } from "react-icons/fa6"
// import { useNavigate, useParams } from "react-router-dom"

// const CategoryInformation = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       description: "",
//       publish: false,
//       showInHomePage: false,
//     },
//   })

//   const [imagePreview, setImagePreview] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const onSubmit = (data) => {
//     setIsLoading(true)
//     console.log(data)
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false)
//       navigate("/categories")
//     }, 1500)
//   }

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6 max-w-4xl mx-auto">
//       <div className="mb-6 -mx-6 -mt-6 px-6 py-4 bg-primary-500 rounded-t-lg">
//         <div className="flex items-center">
//           <div className="p-2 bg-white rounded-full mr-3">
//             <FaUtensils className="text-primary-900 text-xl" />
//           </div>
//           <h2 className="text-white text-xl font-semibold">{isEditMode ? "Edit Category" : "Create New Category"}</h2>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Category Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             {...register("name", { required: "Category name is required" })}
//             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
//             placeholder="Enter category name"
//           />
//           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Description</label>
//           <textarea
//             {...register("description")}
//             rows="4"
//             className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
//             placeholder="Enter category description"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Category Image <span className="text-red-500">*</span>
//           </label>
//           <div className="flex items-center justify-center w-full">
//             <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//               {imagePreview ? (
//                 <div className="relative w-full h-full">
//                   <img
//                     src={imagePreview || "/placeholder.svg?height=200&width=200"}
//                     alt="Preview"
//                     className="w-full h-full object-contain p-2"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setImagePreview(null)}
//                     className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                   <svg
//                     className="w-8 h-8 mb-4 text-gray-500"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 20 16"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                     />
//                   </svg>
//                   <p className="mb-2 text-sm text-gray-500">
//                     <span className="font-semibold">Click to upload</span> or drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500">SVG, PNG, JPG or WEBP (MAX. 2MB)</p>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 className="hidden"
//                 {...register("image", { required: !imagePreview && "Category image is required" })}
//                 onChange={handleImageChange}
//                 accept="image/*"
//               />
//             </label>
//           </div>
//           {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="publish"
//               {...register("publish")}
//               className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//             />
//             <label htmlFor="publish" className="ml-2 text-gray-700">
//               Publish
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="showInHomePage"
//               {...register("showInHomePage")}
//               className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//             />
//             <label htmlFor="showInHomePage" className="ml-2 text-gray-700">
//               Show In HomePage
//             </label>
//           </div>
//           <p className="text-gray-500 text-sm">Maximum 5 categories will show in homepage</p>
//         </div>

//         {/* Form Actions */}
//         <div className="flex flex-wrap justify-center gap-4 pt-4">
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
//           >
//             {isLoading ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Saving...
//               </>
//             ) : (
//               <>
//                 <FaFileInvoice className="mr-2" /> Save
//               </>
//             )}
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/categories")}
//             className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
//           >
//             <FaArrowRotateLeft className="mr-2" /> Back
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CategoryInformation

"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaFolder, FaImage, FaTrash } from "react-icons/fa"
import TitleHead from "../Header/TitleHead"

const CategoryInformation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    imagePreview: "",
    parentCategory: "",
    priority: "0",
    status: true,
  })

  const [loading, setLoading] = useState(isEditMode)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  // Mock data for parent categories
  const [parentCategories, setParentCategories] = useState([])

  useEffect(() => {
    // Load mock data for parent categories
    setParentCategories([
      { id: 1, name: "Fast Food" },
      { id: 2, name: "Italian" },
      { id: 3, name: "Chinese" },
      { id: 4, name: "Desserts" },
      { id: 5, name: "Beverages" },
    ])

    if (isEditMode) {
      // Simulate API call to fetch category data
      setLoading(true)
      setTimeout(() => {
        // Mock data for editing
        const mockCategory = {
          id,
          name: "Burgers",
          description: "Delicious burger options",
          imagePreview: "https://foodie.siswebapp.com/images/category-burger.jpg",
          parentCategory: "1", // Fast Food
          priority: "2",
          status: true,
        }
        setFormData(mockCategory)
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

    if (!formData.name.trim()) {
      newErrors.name = "Category name is required"
    }

    if (!isEditMode && !formData.image && !formData.imagePreview) {
      newErrors.image = "Category image is required"
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
      navigate("/categories")
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
        title={isEditMode ? "Edit Category" : "Create Category"}
        desc={isEditMode ? "Edit Category" : "Create Category"}
        link="/categories"
        desc2="> Category"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex items-center">
            <FaFolder className="text-3xl mr-4" />
            <h1 className="text-2xl font-bold">{isEditMode ? "Edit Category" : "Create New Category"}</h1>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Category Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter category name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                placeholder="Describe this category"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parentCategory">
                Parent Category
              </label>
              <div className="inline-block relative w-full">
                <select
                  id="parentCategory"
                  name="parentCategory"
                  value={formData.parentCategory}
                  onChange={handleChange}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">None (Top Level Category)</option>
                  {parentCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category Image*</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.imagePreview ? (
                    <div>
                      <img
                        src={formData.imagePreview || "/placeholder.svg"}
                        alt="Category preview"
                        className="mx-auto h-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }))}
                        className="mt-2 px-2 py-1 text-xs text-red-600 hover:text-red-800 flex items-center justify-center mx-auto"
                      >
                        <FaTrash className="mr-1" /> Remove
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
              <p className="text-xs text-gray-500 mt-1">Higher priority categories will be shown first (0-10)</p>
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
            onClick={() => navigate("/categories")}
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
            {isSaving ? "Saving..." : "Save Category"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryInformation
