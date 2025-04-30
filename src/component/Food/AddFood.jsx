


import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import {
  FaUtensils,
  FaStore,
  FaTag,
  FaImage,
  FaPlus,
  FaSave,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
  FaLeaf,
  FaPercentage,
  FaList,
  FaCheck,
} from "react-icons/fa"
import PageHeader from "../common/PageHeader"
import { toast } from "react-toastify"

const AddFood = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      discountPrice: "",
      restaurant: "",
      category: "",
      quantity: 1,
      attribute: "",
      description: "",
      publish: true,
      nonVeg: false,
      takeawayOption: true,
      calories: "",
      grams: "",
      fat: "",
      carbs: "",
      proteins: "",
      icons: [],
      specifications: [],
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      nutFree: false,
      organic: false,
      halal: false,
      kosher: false,
      sodium: "",
    },
  })

  const {
    fields: iconFields,
    append: appendIconField,
    remove: removeIconField,
  } = useFieldArray({
    control,
    name: "icons",
  })
  const {
    fields: specFields,
    append: appendSpecField,
    remove: removeSpecField,
  } = useFieldArray({
    control,
    name: "specifications",
  })

  // Modify the currentStep state to include a review step
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4 // Now 4 steps including review

  const [showAddons, setShowAddons] = useState(false)
  const [showSpecifications, setShowSpecifications] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Mock data for dropdowns
  const restaurants = [
    { id: "1", name: "Burger King" },
    { id: "2", name: "Pizza Hut" },
    { id: "3", name: "McDonald's" },
    { id: "4", name: "Subway" },
    { id: "5", name: "KFC" },
  ]

  const categories = [
    { id: "1", name: "Burgers" },
    { id: "2", name: "Pizza" },
    { id: "3", name: "Pasta" },
    { id: "4", name: "Salads" },
    { id: "5", name: "Desserts" },
    { id: "6", name: "Beverages" },
  ]

  const attributes = [
    { id: "1", name: "Spicy" },
    { id: "2", name: "Vegan" },
    { id: "3", name: "Gluten-Free" },
    { id: "4", name: "Organic" },
    { id: "5", name: "Keto-Friendly" },
  ]

  // Function to toggle visibility of fields
  const handleAddIconsClick = () => {
    setShowAddons((prevState) => !prevState)
    if (!iconFields.length) {
      appendIconField({ title: "", price: "" })
    }
  }

  // Function to toggle visibility of additional specifications
  const handleAddSpecificationsClick = () => {
    setShowSpecifications((prevState) => !prevState)
    if (!specFields.length) {
      appendSpecField({ label: "", value: "" })
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!watch("name")) newErrors.name = "Food name is required"
      if (!watch("price")) newErrors.price = "Price is required"
      // if (!watch("restaurant")) newErrors.restaurant = "Restaurant is required"
      if (!watch("category")) newErrors.category = "Category is required"
    }

    return Object.keys(newErrors).length > 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      toast.error("Please fill all required fields")
      return
    }
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const onSubmit = (data, e) => {
    // Only process if explicitly submitted via the submit button
    if (e && e.nativeEvent.submitter && e.nativeEvent.submitter.type === "submit") {
      setIsLoading(true)
      console.log(data)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        toast.success(isEditMode ? "Food item updated successfully!" : "Food item created successfully!")
        navigate("/foods")
      }, 1500)
    }
  }

  // Add a new renderReviewStep function after renderAddonsStep

  // Update the renderStepIndicator function to include the review step
  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {step === 1 && <FaUtensils />}
                {step === 2 && <FaLeaf />}
                {step === 3 && <FaList />}
                {step === 4 && <FaCheck />}
              </div>
              <div
                className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
              >
                {step === 1 && "Basic Info"}
                {step === 2 && "Nutrition"}
                {step === 3 && "Add-ons & Specs"}
                {step === 4 && "Review"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>
    )
  }

  const renderBasicInfoStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaUtensils className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUtensils className="text-gray-400" />
              </div>
              <input
                type="text"
                {...register("name", { required: "Food name is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="Enter food name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="text"
                {...register("price", {
                  required: "Price is required",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Please enter a valid price",
                  },
                })}
                className={`w-full p-3 pl-8 bg-gray-50 border ${
                  errors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">PK</span>
              <div className="absolute right-3 top-3 text-gray-500">
                <FaPercentage />
              </div>
              <input
                type="text"
                {...register("discountPrice", {
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Please enter a valid price",
                  },
                })}
                className={`w-full p-3 pl-8 pr-10 bg-gray-50 border ${
                  errors.discountPrice ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {errors.discountPrice && <p className="text-red-500 text-sm mt-1">{errors.discountPrice.message}</p>}
          </div>
{/* 
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaStore className="text-gray-400" />
              </div>
              <select
                {...register("restaurant", { required: "Restaurant is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.restaurant ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
              >
                <option value="">Select Restaurant</option>
                {restaurants.map((restaurant) => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.restaurant && <p className="text-red-500 text-sm mt-1">{errors.restaurant.message}</p>}
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaTag className="text-gray-400" />
              </div>
              <select
                {...register("category", { required: "Category is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Quantity</label>
            <input
              type="number"
              {...register("quantity", { valueAsNumber: true })}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter quantity"
            />
            <p className="text-gray-500 text-sm mt-1">For unlimited set -1</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Food Attribute</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLeaf className="text-gray-400" />
              </div>
              <select
                {...register("attribute")}
                className="pl-10 w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Attribute</option>
                {attributes.map((attribute) => (
                  <option key={attribute.id} value={attribute.id}>
                    {attribute.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-contain p-2"
                    />
                    <button
                      type="button"
                      onClick={() => setImagePreview(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaImage className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 2MB)</p>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  {...register("image", { required: !imagePreview && "Food image is required" })}
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </label>
            </div>
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              {...register("description")}
              rows="4"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter food description"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="publish"
                  {...register("publish")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="publish" className="ml-2 text-gray-700">
                  Publish
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nonVeg"
                  {...register("nonVeg")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="nonVeg" className="ml-2 text-gray-700">
                  Non-Vegetarian
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="takeaway"
                  {...register("takeawayOption")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="takeaway" className="ml-2 text-gray-700">
                  Takeaway Option
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderNutritionStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaLeaf className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Nutritional Information</h2>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 mb-6">
          <div className="flex items-start">
            <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-green-800">Nutritional Information</h4>
              <p className="text-xs text-green-700 mt-1">
                Providing accurate nutritional information helps customers make informed choices. This information will
                be displayed on the food item page.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
            <div className="relative">
              <input
                type="text"
                {...register("calories")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 250"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">kcal</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Serving Size</label>
            <div className="relative">
              <input
                type="text"
                {...register("grams")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 180"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fat</label>
            <div className="relative">
              <input
                type="text"
                {...register("fat")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 12"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Carbs</label>
            <div className="relative">
              <input
                type="text"
                {...register("carbs")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 30"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Proteins</label>
            <div className="relative">
              <input
                type="text"
                {...register("proteins")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 15"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sodium</label>
            <div className="relative">
              <input
                type="text"
                {...register("sodium")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">mg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-md font-medium text-gray-800 mb-3">Dietary Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vegetarian"
                {...register("vegetarian")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="vegetarian" className="ml-2 text-sm text-gray-700">
                Vegetarian
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vegan"
                {...register("vegan")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="vegan" className="ml-2 text-sm text-gray-700">
                Vegan
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="glutenFree"
                {...register("glutenFree")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="glutenFree" className="ml-2 text-sm text-gray-700">
                Gluten Free
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="dairyFree"
                {...register("dairyFree")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="dairyFree" className="ml-2 text-sm text-gray-700">
                Dairy Free
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="nutFree"
                {...register("nutFree")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="nutFree" className="ml-2 text-sm text-gray-700">
                Nut Free
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="organic"
                {...register("organic")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="organic" className="ml-2 text-sm text-gray-700">
                Organic
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="halal"
                {...register("halal")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="halal" className="ml-2 text-sm text-gray-700">
                Halal
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="kosher"
                {...register("kosher")}
                className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
              />
              <label htmlFor="kosher" className="ml-2 text-sm text-gray-700">
                Kosher
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAddonsStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaList className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Add-ons & Specifications</h2>
        </div>

        {/* Add-ons Section */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaPlus className="mr-2 text-primary-900" /> Add-ons
          </h3>

          <button
            type="button"
            onClick={handleAddIconsClick}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> {showAddons ? "Hide Add-ons" : "Add Add-ons"}
          </button>

          {showAddons && (
            <div className="mt-4 space-y-4">
              {iconFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Add-on Name</label>
                    <input
                      type="text"
                      {...register(`icons.${index}.title`)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g. Extra Cheese"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="text"
                        {...register(`icons.${index}.price`)}
                        className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeIconField(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => appendIconField({ title: "", price: "" })}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Another
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Food Specifications */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaList className="mr-2 text-primary-900" /> Food Specifications
          </h3>

          <button
            type="button"
            onClick={handleAddSpecificationsClick}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> {showSpecifications ? "Hide Specifications" : "Add Specifications"}
          </button>

          {showSpecifications && (
            <div className="mt-4 space-y-4">
              {specFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                    <input
                      type="text"
                      {...register(`specifications.${index}.label`)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g. Allergens"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                    <input
                      type="text"
                      {...register(`specifications.${index}.value`)}
                      className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g. Contains nuts, dairy"
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeSpecField(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => appendSpecField({ label: "", value: "" })}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Another
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mt-6">
          <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Add-ons & Specifications</h4>
            <p className="text-xs text-blue-600 mt-1">
              Add-ons allow customers to customize their order with extra options. Specifications provide additional
              information about the food item such as ingredients, allergens, or preparation methods.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Update the form to include the review step
  // In the form section, update the conditional rendering:

  // Update the button logic

  return (
    <>
      <PageHeader
        title={isEditMode ? "Edit Food" : "Create Food"}
        description={isEditMode ? "Update Food Details" : "Add New Food Item"}
        actions={[
          {
            label: "Back to Foods",
            onClick: () => navigate("/foods"),
            variant: "outline",
          },
        ]}
      />

      {/* Notice we're NOT using a form element here */}
      <div className="max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          {renderStepIndicator()}

          {currentStep === 1 && renderBasicInfoStep()}
          {currentStep === 2 && renderNutritionStep()}
          {currentStep === 3 && renderAddonsStep()}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <FaCheck className="text-primary-900" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Review Food Information</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
                <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
                  <p className="text-xs text-green-600 mt-1">
                    Please review all information below before submitting. Once submitted, you can still edit the food
                    item details later.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Food Name</p>
                      <p className="text-sm text-gray-900">{watch("name") || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Price</p>
                      <p className="text-sm text-gray-900">${watch("price") || "0.00"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Discount Price</p>
                      <p className="text-sm text-gray-900">
                        {watch("discountPrice") ? `$${watch("discountPrice")}` : "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Restaurant</p>
                      <p className="text-sm text-gray-900">
                        {restaurants.find((r) => r.id === watch("restaurant"))?.name || "Not selected"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Category</p>
                      <p className="text-sm text-gray-900">
                        {categories.find((c) => c.id === watch("category"))?.name || "Not selected"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Quantity</p>
                      <p className="text-sm text-gray-900">{watch("quantity") || "1"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Food Attribute</p>
                      <p className="text-sm text-gray-900">
                        {attributes.find((a) => a.id === watch("attribute"))?.name || "Not selected"}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-500">Description</p>
                      <p className="text-sm text-gray-900">{watch("description") || "Not provided"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-500">Options</p>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <span className="text-sm text-gray-900">
                          {watch("publish") ? "Published" : "Not Published"}
                        </span>
                        <span className="text-sm text-gray-900">
                          {watch("nonVeg") ? "Non-Vegetarian" : "Vegetarian"}
                        </span>
                        <span className="text-sm text-gray-900">
                          {watch("takeawayOption") ? "Takeaway Available" : "No Takeaway"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-md font-semibold text-gray-800 mb-3">Nutritional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Calories</p>
                      <p className="text-sm text-gray-900">{watch("calories") || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Serving Size</p>
                      <p className="text-sm text-gray-900">{watch("grams") ? `${watch("grams")}g` : "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Fat</p>
                      <p className="text-sm text-gray-900">{watch("fat") ? `${watch("fat")}g` : "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Carbs</p>
                      <p className="text-sm text-gray-900">{watch("carbs") ? `${watch("carbs")}g` : "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Proteins</p>
                      <p className="text-sm text-gray-900">
                        {watch("proteins") ? `${watch("proteins")}g` : "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Sodium</p>
                      <p className="text-sm text-gray-900">
                        {watch("sodium") ? `${watch("sodium")}mg` : "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {iconFields.length > 0 && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">Add-ons</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {iconFields.map((field, index) => (
                        <div key={field.id} className="flex justify-between">
                          <p className="text-sm text-gray-900">{watch(`icons.${index}.title`) || "Unnamed Add-on"}</p>
                          <p className="text-sm text-gray-900">${watch(`icons.${index}.price`) || "0.00"}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {specFields.length > 0 && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-md font-semibold text-gray-800 mb-3">Specifications</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {specFields.map((field, index) => (
                        <div key={field.id} className="flex justify-between">
                          <p className="text-sm font-medium text-gray-500">
                            {watch(`specifications.${index}.label`) || "Unnamed Label"}
                          </p>
                          <p className="text-sm text-gray-900">
                            {watch(`specifications.${index}.value`) || "Not provided"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/foods")}
                className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  if (isLoading) return

                  if (validateStep(currentStep)) {
                    toast.error("Please fill all required fields")
                    return
                  }

                  setIsLoading(true)

                  // Get the form data
                  const data = getValues()
                  console.log(data)

                  // Simulate API call
                  setTimeout(() => {
                    setIsLoading(false)
                    toast.success(isEditMode ? "Food item updated successfully!" : "Food item created successfully!")
                    navigate("/foods")
                  }, 1500)
                }}
                disabled={isLoading}
                className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" /> {isEditMode ? "Update Food" : "Save Food"}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddFood
