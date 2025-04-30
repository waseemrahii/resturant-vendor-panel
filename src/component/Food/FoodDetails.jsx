
import { useState, useEffect } from "react"
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
  FaInfoCircle,
  FaLeaf,
  FaPercentage,
  FaList,
  FaCheck,
  FaTrash,
  FaTimes,
} from "react-icons/fa"
import PageHeader from "../common/PageHeader"
import { toast } from "react-toastify"

const EditFood = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id
  const isViewMode = window.location.pathname.includes("/view/")

  const [loading, setLoading] = useState(isEditMode)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState([
    "Burgers",
    "Pizza",
    "Pasta",
    "Salads",
    "Desserts",
    "Drinks",
    "Indian",
    "Chinese",
    "Thai",
    "Mexican",
  ])

  const [food, setFood] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
    calories: "",
    preparationTime: "",
    ingredients: [""],
    allergens: [],
    featured: false,
    status: true,
    discount: 0,
  })

  const [errors, setErrors] = useState({})
  const [newIngredient, setNewIngredient] = useState("")
  const [newAllergen, setNewAllergen] = useState("")

  // Common allergens for selection
  const commonAllergens = ["Gluten", "Dairy", "Egg", "Nuts", "Peanuts", "Shellfish", "Soy", "Fish", "Sesame"]

  const {
    register,
    handleSubmit: handleFormSubmit,
    control,
    formState: { errors: formErrors },
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

  const attributes = [
    { id: "1", name: "Spicy" },
    { id: "2", name: "Vegan" },
    { id: "3", name: "Gluten-Free" },
    { id: "4", name: "Organic" },
    { id: "5", name: "Keto-Friendly" },
  ]

  useEffect(() => {
    if (isEditMode) {
      // Simulate API call to fetch food details
      setLoading(true)
      setTimeout(() => {
        // This would be replaced with an actual API call
        const sampleFoods = [
          {
            id: 1,
            name: "Beef Burger",
            price: "12.99",
            category: "Burgers",
            status: true,
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            description: "Juicy beef patty with lettuce, tomato, and special sauce on a brioche bun.",
            calories: "650",
            preparationTime: "15",
            ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Cheese", "Special sauce", "Brioche bun"],
            allergens: ["Gluten", "Dairy", "Egg"],
            featured: true,
            discount: 0,
          },
          {
            id: 2,
            name: "Margherita Pizza",
            price: "14.99",
            category: "Pizza",
            status: true,
            image:
              "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            description: "Classic pizza with tomato sauce, fresh mozzarella, and basil leaves.",
            calories: "850",
            preparationTime: "20",
            ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
            allergens: ["Gluten", "Dairy"],
            featured: true,
            discount: 10,
          },
        ]

        const foundFood = sampleFoods.find((f) => f.id === Number.parseInt(id))
        if (foundFood) {
          setFood(foundFood)
        } else {
          toast.error("Food item not found")
          navigate("/foods")
        }
        setLoading(false)
      }, 800)
    }
  }, [id, isEditMode, navigate])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFood({
      ...food,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...food.ingredients]
    updatedIngredients[index] = value
    setFood({
      ...food,
      ingredients: updatedIngredients,
    })
  }

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setFood({
        ...food,
        ingredients: [...food.ingredients, newIngredient.trim()],
      })
      setNewIngredient("")
    }
  }

  const removeIngredient = (index) => {
    const updatedIngredients = [...food.ingredients]
    updatedIngredients.splice(index, 1)
    setFood({
      ...food,
      ingredients: updatedIngredients,
    })
  }

  const toggleAllergen = (allergen) => {
    if (food.allergens.includes(allergen)) {
      setFood({
        ...food,
        allergens: food.allergens.filter((a) => a !== allergen),
      })
    } else {
      setFood({
        ...food,
        allergens: [...food.allergens, allergen],
      })
    }
  }

  const addCustomAllergen = () => {
    if (newAllergen.trim() && !food.allergens.includes(newAllergen.trim())) {
      setFood({
        ...food,
        allergens: [...food.allergens, newAllergen.trim()],
      })
      setNewAllergen("")
    }
  }

  const removeAllergen = (allergen) => {
    setFood({
      ...food,
      allergens: food.allergens.filter((a) => a !== allergen),
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!food.name.trim()) newErrors.name = "Name is required"
    if (!food.price) newErrors.price = "Price is required"
    if (isNaN(Number.parseFloat(food.price))) newErrors.price = "Price must be a number"
    if (!food.category) newErrors.category = "Category is required"
    if (!food.description.trim()) newErrors.description = "Description is required"
    if (food.calories && isNaN(Number.parseInt(food.calories))) newErrors.calories = "Calories must be a number"
    if (food.preparationTime && isNaN(Number.parseInt(food.preparationTime)))
      newErrors.preparationTime = "Preparation time must be a number"
    if (
      food.discount &&
      (isNaN(Number.parseInt(food.discount)) ||
        Number.parseInt(food.discount) < 0 ||
        Number.parseInt(food.discount) > 100)
    ) {
      newErrors.discount = "Discount must be a number between 0 and 100"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
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

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setSaving(true)

    // Simulate API call
    setTimeout(() => {
      setSaving(false)
      toast.success(isEditMode ? "Food item updated successfully" : "Food item created successfully")
      navigate("/foods")
    }, 1000)
  }

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
      if (!watch("restaurant")) newErrors.restaurant = "Restaurant is required"
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
                  formErrors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="Enter food name"
              />
            </div>
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name.message}</p>}
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
                  formErrors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {formErrors.price && <p className="text-red-500 text-sm mt-1">{formErrors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
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
                  formErrors.discountPrice
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {formErrors.discountPrice && (
              <p className="text-red-500 text-sm mt-1">{formErrors.discountPrice.message}</p>
            )}
          </div>

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
                  formErrors.restaurant ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
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
            {formErrors.restaurant && <p className="text-red-500 text-sm mt-1">{formErrors.restaurant.message}</p>}
          </div>

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
                  formErrors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category.message}</p>}
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
            {formErrors.image && <p className="text-red-500 text-sm mt-1">{formErrors.image.message}</p>}
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

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

      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-primary-500 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <FaUtensils className="mr-2" />
            <h1 className="text-xl font-semibold">
              {isViewMode ? "View Menu Item" : isEditMode ? "Edit Menu Item" : "Add New Menu Item"}
            </h1>
          </div>
          <button
            onClick={() => navigate("/foods")}
            className="bg-white text-primary-500 px-3 py-1 rounded-md flex items-center text-sm"
          >
            <FaArrowLeft className="mr-1" /> Back to Menu
          </button>
        </div>

        <form onSubmit={handleSubmitForm} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Item Name*</label>
                <input
                  type="text"
                  name="name"
                  value={food.name}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`w-full p-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter item name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)*</label>
                <input
                  type="text"
                  name="price"
                  value={food.price}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`w-full p-2 border rounded-md ${errors.price ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter price"
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                <select
                  name="category"
                  value={food.category}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`w-full p-2 border rounded-md ${errors.category ? "border-red-500" : "border-gray-300"}`}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
                  <input
                    type="text"
                    name="calories"
                    value={food.calories}
                    onChange={handleChange}
                    disabled={isViewMode}
                    className={`w-full p-2 border rounded-md ${errors.calories ? "border-red-500" : "border-gray-300"}`}
                    placeholder="e.g., 450"
                  />
                  {errors.calories && <p className="text-red-500 text-xs mt-1">{errors.calories}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prep Time (min)</label>
                  <input
                    type="text"
                    name="preparationTime"
                    value={food.preparationTime}
                    onChange={handleChange}
                    disabled={isViewMode}
                    className={`w-full p-2 border rounded-md ${
                      errors.preparationTime ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="e.g., 15"
                  />
                  {errors.preparationTime && <p className="text-red-500 text-xs mt-1">{errors.preparationTime}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                <textarea
                  name="description"
                  value={food.description}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className={`w-full p-2 border rounded-md ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  rows="4"
                  placeholder="Enter item description"
                ></textarea>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={food.image}
                  onChange={handleChange}
                  disabled={isViewMode}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter image URL"
                />
                {food.image && (
                  <div className="mt-2">
                    <img
                      src={food.image || "/placeholder.svg"}
                      alt={food.name}
                      className="h-32 w-32 object-cover rounded-md"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=128&width=128"
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
                <div className="space-y-2">
                  {food.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="text"
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                        disabled={isViewMode}
                        className="flex-1 p-2 border border-gray-300 rounded-md"
                        placeholder="Enter ingredient"
                      />
                      {!isViewMode && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(index)}
                          className="ml-2 p-2 text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  ))}
                  {!isViewMode && (
                    <div className="flex items-center mt-2">
                      <input
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md"
                        placeholder="Add new ingredient"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addIngredient())}
                      />
                      <button
                        type="button"
                        onClick={addIngredient}
                        className="ml-2 p-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Allergens</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {commonAllergens.map((allergen) => (
                    <button
                      key={allergen}
                      type="button"
                      onClick={() => !isViewMode && toggleAllergen(allergen)}
                      disabled={isViewMode}
                      className={`px-3 py-1 rounded-full text-sm ${
                        food.allergens.includes(allergen)
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {allergen}
                    </button>
                  ))}
                </div>
                {!isViewMode && (
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      value={newAllergen}
                      onChange={(e) => setNewAllergen(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md"
                      placeholder="Add custom allergen"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addCustomAllergen())}
                    />
                    <button
                      type="button"
                      onClick={addCustomAllergen}
                      className="ml-2 p-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                    >
                      <FaPlus />
                    </button>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {food.allergens.map((allergen) => (
                    <div
                      key={allergen}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center"
                    >
                      {allergen}
                      {!isViewMode && (
                        <button
                          type="button"
                          onClick={() => removeAllergen(allergen)}
                          className="ml-1 text-red-800 hover:text-red-900"
                        >
                          <FaTimes size={12} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
                <input
                  type="number"
                  name="discount"
                  value={food.discount}
                  onChange={handleChange}
                  disabled={isViewMode}
                  min="0"
                  max="100"
                  className={`w-full p-2 border rounded-md ${errors.discount ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter discount percentage"
                />
                {errors.discount && <p className="text-red-500 text-xs mt-1">{errors.discount}</p>}
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={food.featured}
                    onChange={handleChange}
                    disabled={isViewMode}
                    className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="featured" className="ml-2 text-gray-700">
                    Featured
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={food.status}
                    onChange={handleChange}
                    disabled={isViewMode}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {!isViewMode && (
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              >
                {saving ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FaSave className="mr-2" />
                    {isEditMode ? "Update Item" : "Add Item"}
                  </div>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default EditFood
