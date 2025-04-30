
// import { useState, useEffect } from "react"
// import { FaPlus, FaSearch, FaFilter, FaEdit, FaTrash, FaEye } from "react-icons/fa"
// import { Link } from "react-router-dom"

// const SellerMenuItems = () => {
//   const [loading, setLoading] = useState(true)
//   const [menuItems, setMenuItems] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterCategory, setFilterCategory] = useState("all")
//   const [categories, setCategories] = useState([])

//   useEffect(() => {
//     // Simulate API call to fetch menu items
//     setTimeout(() => {
//       const mockCategories = ["Burgers", "Pizza", "Salads", "Desserts", "Beverages"]
//       setCategories(mockCategories)

//       const mockMenuItems = [
//         {
//           id: 1,
//           name: "Classic Burger",
//           category: "Burgers",
//           price: 8.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 2,
//           name: "Veggie Pizza",
//           category: "Pizza",
//           price: 12.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 3,
//           name: "Caesar Salad",
//           category: "Salads",
//           price: 7.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 4,
//           name: "Chocolate Cake",
//           category: "Desserts",
//           price: 5.99,
//           status: "inactive",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 5,
//           name: "Iced Coffee",
//           category: "Beverages",
//           price: 3.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 6,
//           name: "Chicken Burger",
//           category: "Burgers",
//           price: 9.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 7,
//           name: "Margherita Pizza",
//           category: "Pizza",
//           price: 11.99,
//           status: "active",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//         {
//           id: 8,
//           name: "Greek Salad",
//           category: "Salads",
//           price: 8.99,
//           status: "inactive",
//           image: "/placeholder.svg?height=80&width=80",
//         },
//       ]

//       setMenuItems(mockMenuItems)
//       setLoading(false)
//     }, 1000)
//   }, [])

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   const handleFilterChange = (e) => {
//     setFilterCategory(e.target.value)
//   }

//   const filteredItems = menuItems.filter((item) => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = filterCategory === "all" || item.category === filterCategory
//     return matchesSearch && matchesCategory
//   })

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h1 className="text-2xl font-bold mb-4 md:mb-0">Menu Items</h1>
//         <Link
//           to="/seller/menu/add"
//           className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center"
//         >
//           <FaPlus className="mr-2" /> Add New Item
//         </Link>
//       </div>

//       {/* Search and Filter */}
//       <div className="bg-white rounded-lg shadow p-4 mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaSearch className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search menu items..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaFilter className="text-gray-400" />
//             </div>
//             <select
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={filterCategory}
//               onChange={handleFilterChange}
//             >
//               <option value="all">All Categories</option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Menu Items Table */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Item
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Category
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Price
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Status
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredItems.length > 0 ? (
//                 filteredItems.map((item) => (
//                   <tr key={item.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10">
//                           <img
//                             className="h-10 w-10 rounded-full object-cover"
//                             src={item.image || "/placeholder.svg"}
//                             alt={item.name}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{item.category}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
//                       >
//                         {item.status === "active" ? "Active" : "Inactive"}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <div className="flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-900">
//                           <FaEye />
//                         </button>
//                         <button className="text-indigo-600 hover:text-indigo-900">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-600 hover:text-red-900">
//                           <FaTrash />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
//                     No menu items found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SellerMenuItems



"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SellerMenuItems = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [menuItems, setMenuItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [showFilters, setShowFilters] = useState(false)
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const [itemToDelete, setItemToDelete] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch menu items
    setTimeout(() => {
      const mockCategories = ["Burgers", "Pizza", "Salads", "Desserts", "Beverages", "Sides", "Specials"]
      
      const mockMenuItems = [
        {
          id: 1,
          name: "Classic Burger",
          description: "Juicy beef patty with lettuce, tomato, onions, pickles, and our special sauce on a toasted bun.",
          price: 8.99,
          discountPrice: 7.99,
          category: "Burgers",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false,
          preparationTime: 15,
          calories: 650,
          rating: 4.8,
          orderCount: 120
        },
        {
          id: 2,
          name: "Veggie Burger",
          description: "Plant-based patty with lettuce, tomato, onions, pickles, and vegan mayo on a toasted bun.",
          price: 9.99,
          discountPrice: null,
          category: "Burgers",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: true,
          isVegan: true,
          isGlutenFree: false,
          preparationTime: 12,
          calories: 450,
          rating: 4.5,
          orderCount: 85
        },
        {
          id: 3,
          name: "Margherita Pizza",
          description: "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
          price: 12.99,
          discountPrice: null,
          category: "Pizza",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: true,
          isVegan: false,
          isGlutenFree: false,
          preparationTime: 20,
          calories: 850,
          rating: 4.7,
          orderCount: 95
        },
        {
          id: 4,
          name: "Caesar Salad",
          description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
          price: 8.99,
          discountPrice: null,
          category: "Salads",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: true,
          isVegan: false,
          isGlutenFree: false,
          preparationTime: 8,
          calories: 320,
          rating: 4.3,
          orderCount: 65
        },
        {
          id: 5,
          name: "Chocolate Milkshake",
          description: "Rich and creamy chocolate milkshake topped with whipped cream.",
          price: 4.99,
          discountPrice: null,
          category: "Beverages",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: true,
          isVegan: false,
          isGlutenFree: true,
          preparationTime: 5,
          calories: 450,
          rating: 4.9,
          orderCount: 150
        },
        {
          id: 6,
          name: "French Fries",
          description: "Crispy golden fries seasoned with salt.",
          price: 3.99,
          discountPrice: null,
          category: "Sides",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: true,
          isVegan: true,
          isGlutenFree: true,
          preparationTime: 10,
          calories: 380,
          rating: 4.6,
          orderCount: 200
        },
        {
          id: 7,
          name: "Cheesecake",
          description: "Creamy New York style cheesecake with graham cracker crust.",
          price: 6.99,
          discountPrice: 5.99,
          category: "Desserts",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: false,
          isVegetarian: true,
          isVegan: false,
          isGlutenFree: false,
          preparationTime: 0,
          calories: 420,
          rating: 4.8,
          orderCount: 75
        },
        {
          id: 8,
          name: "Special BBQ Ribs",
          description: "Slow-cooked BBQ ribs with our signature sauce.",
          price: 16.99,
          discountPrice: 14.99,
          category: "Specials",
          image: "/placeholder.svg?height=80&width=80",
          isAvailable: true,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: true,
          preparationTime: 25,
          calories: 780,
          rating: 4.9,
          orderCount: 60
        }
      ]

      setCategories(mockCategories)
      setMenuItems(mockMenuItems)
      setFilteredItems(mockMenuItems)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    // Apply filters and sorting
    let result = [...menuItems]

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(item => item.category === selectedCategory)
    }

    // Availability filter
    if (availabilityFilter !== "all") {
      const isAvailable = availabilityFilter === "available"
      result = result.filter(item => item.isAvailable === isAvailable)
    }

    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        item => 
          item.name.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      )
    }

    // Sorting
    result.sort((a, b) => {
      let comparison = 0
      
      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name)
          break
        case "price":
          comparison = a.price - b.price
          break
        case "category":
          comparison = a.category.localeCompare(b.category)
          break
        case "popularity":
          comparison = b.orderCount - a.orderCount
          break
        default:
          comparison = a.name
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

    setFilteredItems(result)
  }, [menuItems, selectedCategory, searchTerm, sortField, sortDirection, availabilityFilter])
