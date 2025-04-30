"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaUtensils, FaSearch, FaFilter } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import ToggleSwitch from "../common/ToggleSwitch"
import ActionButton from "../common/ActionButton"

const Food = () => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample food data
  const initialFoods = [
    {
      id: 1,
      name: "Beef Burger",
      price: "$12.99",
      category: "Burgers",
      status: true,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-05-15T10:30:00Z",
      description: "Juicy beef patty with lettuce, tomato, and special sauce on a brioche bun.",
      calories: 650,
      preparationTime: "15 min",
      rating: 4.7,
      reviews: 128,
      ingredients: ["Beef patty", "Lettuce", "Tomato", "Onion", "Cheese", "Special sauce", "Brioche bun"],
      allergens: ["Gluten", "Dairy", "Egg"],
      featured: true,
      discount: 0,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: "$14.99",
      category: "Pizza",
      status: true,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-04-10T08:15:00Z",
      description: "Classic pizza with tomato sauce, fresh mozzarella, and basil leaves.",
      calories: 850,
      preparationTime: "20 min",
      rating: 4.5,
      reviews: 96,
      ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
      allergens: ["Gluten", "Dairy"],
      featured: true,
      discount: 10,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      price: "$16.99",
      category: "Indian",
      status: true,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-03-22T14:45:00Z",
      description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.",
      calories: 780,
      preparationTime: "30 min",
      rating: 4.8,
      reviews: 215,
      ingredients: ["Basmati rice", "Chicken", "Onions", "Tomatoes", "Yogurt", "Biryani masala", "Saffron"],
      allergens: ["Dairy"],
      featured: false,
      discount: 0,
    },
    {
      id: 4,
      name: "Caesar Salad",
      price: "$9.99",
      category: "Salads",
      status: false,
      image:
        "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-06-05T09:20:00Z",
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
      calories: 320,
      preparationTime: "10 min",
      rating: 4.3,
      reviews: 76,
      ingredients: ["Romaine lettuce", "Caesar dressing", "Croutons", "Parmesan cheese"],
      allergens: ["Gluten", "Dairy", "Egg"],
      featured: false,
      discount: 0,
    },
    {
      id: 5,
      name: "Chocolate Brownie",
      price: "$6.99",
      category: "Desserts",
      status: true,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-07-12T11:10:00Z",
      description: "Rich chocolate brownie served warm with vanilla ice cream.",
      calories: 450,
      preparationTime: "5 min",
      rating: 4.9,
      reviews: 184,
      ingredients: ["Chocolate", "Flour", "Sugar", "Eggs", "Butter", "Vanilla ice cream"],
      allergens: ["Gluten", "Dairy", "Egg"],
      featured: true,
      discount: 0,
    },
    {
      id: 6,
      name: "Vegetable Pasta",
      price: "$13.99",
      category: "Pasta",
      status: true,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      createdAt: "2023-07-18T13:25:00Z",
      description: "Penne pasta with mixed vegetables in a creamy sauce.",
      calories: 580,
      preparationTime: "18 min",
      rating: 4.4,
      reviews: 92,
      ingredients: ["Penne pasta", "Bell peppers", "Zucchini", "Mushrooms", "Cream sauce", "Parmesan"],
      allergens: ["Gluten", "Dairy"],
      featured: false,
      discount: 15,
    },
  ]

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setFoods(initialFoods)

      // Extract unique categories
      const uniqueCategories = [...new Set(initialFoods.map((food) => food.category))]
      setCategories(uniqueCategories)

      setLoading(false)
      toast.success("Menu items loaded successfully")
    }, 800)
  }, [])

  // Filter foods based on search query and selected category
  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || food.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleStatusToggle = (id) => {
    const updatedFoods = foods.map((food) => (food.id === id ? { ...food, status: !food.status } : food))
    setFoods(updatedFoods)
    const food = foods.find((f) => f.id === id)
    toast.info(`Food "${food.name}" status changed to ${!food.status ? "Active" : "Inactive"}`)
  }

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      setFoods(foods.filter((f) => f.id !== item.id))
      toast.success(`Food "${item.name}" deleted successfully`)
    }
  }

  const handleBulkDelete = (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected food(s)?`)) {
      setFoods(foods.filter((food) => !selectedItems.has(food.id)))
      toast.success(`${selectedItems.size} food(s) deleted successfully`)
    }
  }

  const columns = [
    {
      key: "image",
      label: "Image",
      sortable: false,
      render: (item) => (
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
      ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (item) => (
        <div>
          <span className="font-medium text-primary-900">{item.name}</span>
          {item.featured && (
            <span className="ml-2 px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs">Featured</span>
          )}
          {item.discount > 0 && (
            <span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
              {item.discount}% Off
            </span>
          )}
        </div>
      ),
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (item) => <span className="font-medium text-green-600">{item.price}</span>,
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (item) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{item.category}</span>
      ),
    },
    {
      key: "rating",
      label: "Rating",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <span className="text-amber-500 font-medium">{item.rating}</span>
          <span className="text-amber-500 ml-1">★</span>
          <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          <ToggleSwitch
            isOn={item.status}
            onToggle={() => handleStatusToggle(item.id)}
            size="small"
            showLabels={false}
          />
        </div>
      ),
    },
  ]

  const actionButtons = [
    {
      icon: <FaEye />,
      title: "View Food",
      onClick: (item) => {
        window.location.href = `/foods/view/${item.id}`
      },
      variant: "info",
    },
    {
      icon: <FaEdit />,
      title: "Edit Food",
      onClick: (item) => {
        window.location.href = `/foods/edit/${item.id}`
      },
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Food",
      onClick: handleDelete,
      variant: "danger",
    },
  ]

  const bulkActions = [
    {
      key: "delete",
      label: "Delete Selected",
      icon: <FaTrashAlt />,
      onClick: handleBulkDelete,
    },
  ]

  const expandableRow = (item) => (
    <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg m-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUtensils className="mr-2 text-amber-500" /> Food Details
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {item.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Price:</span> {item.price}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> {item.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Calories:</span> {item.calories} cal
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Preparation Time:</span> {item.preparationTime}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Description:</span> {item.description}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUtensils className="mr-2 text-amber-500" /> Ingredients & Info
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Ingredients:</span>
              </p>
              <div className="flex flex-wrap gap-1">
                {item.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {ingredient}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Allergens:</span>
              </p>
              <div className="flex flex-wrap gap-1">
                {item.allergens.map((allergen, idx) => (
                  <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">
                    {allergen}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Added On:</span> {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Rating:</span>{" "}
                <span className="text-amber-500 font-medium">{item.rating} ★</span> ({item.reviews} reviews)
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                <span className={item.status ? "text-green-600" : "text-red-600"}>
                  {item.status ? "Active" : "Inactive"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <ActionButton
          icon={<FaEdit />}
          label="Edit Food"
          showLabel={true}
          variant="success"
          onClick={() => (window.location.href = `/foods/edit/${item.id}`)}
        />
        <ActionButton
          icon={<FaEye />}
          label="View Details"
          showLabel={true}
          variant="primary"
          onClick={() => (window.location.href = `/foods/view/${item.id}`)}
        />
      </div>
    </div>
  )

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative flex-1 md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <Link
          to="/foods/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center whitespace-nowrap"
        >
          <FaPlus className="mr-2" /> Add Menu Item
        </Link>
      </div>

      <TableList
        data={filteredFoods}
        columns={columns}
        title="Menu Management"
        description="View and manage your restaurant's menu items"
        searchPlaceholder="Search foods..."
        loading={loading}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No menu items found"
        emptyStateIcon={<FaUtensils className="w-16 h-16 text-gray-300" />}
      />
    </div>
  )
}

export default Food
