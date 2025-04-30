// "use client"

// import { useState, useEffect } from "react"
// import { FaCamera } from "react-icons/fa"
// import { toast } from "react-toastify"

// const SellerProfile = () => {
//   const [loading, setLoading] = useState(true)
//   const [saving, setSaving] = useState(false)
//   const [restaurant, setRestaurant] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     description: "",
//     cuisine: "",
//     openingTime: "",
//     closingTime: "",
//     logo: "",
//     coverImage: "",
//     deliveryRadius: "",
//     minimumOrder: "",
//     deliveryFee: "",
//     averagePreparationTime: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [logoPreview, setLogoPreview] = useState("")
//   const [coverPreview, setCoverPreview] = useState("")

//   useEffect(() => {
//     // Simulate API call to fetch restaurant profile
//     setTimeout(() => {
//       const mockRestaurant = {
//         name: "Tasty Bites Restaurant",
//         email: "contact@tastybites.com",
//         phone: "+1 (555) 123-4567",
//         address: "123 Food Street, Culinary District, NY 10001",
//         description: "We serve the most delicious food in town with fresh ingredients and authentic recipes.",
//         cuisine: "Italian, American",
//         openingTime: "09:00",
//         closingTime: "22:00",
//         logo: "/placeholder.svg?height=200&width=200",
//         coverImage: "/placeholder.svg?height=400&width=800",
//         deliveryRadius: "5",
//         minimumOrder: "15",
//         deliveryFee: "3.99",
//         averagePreparationTime: "25",
//       }

//       setRestaurant(mockRestaurant)
//       setLogoPreview(mockRestaurant.logo)
//       setCoverPreview(mockRestaurant.coverImage)
//       setLoading(false)
//     }, 1000)
//   }, [])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setRestaurant((prev) => ({
//       ...prev,
//       [name]: value,
//     }))

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: null,
//       }))
//     }
//   }

//   const handleLogoChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setLogoPreview(reader.result)
//         setRestaurant((prev) => ({
//           ...prev,
//           logo: file,
//         }))
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleCoverChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setCoverPreview(reader.result)
//         setRestaurant((prev) => ({
//           ...prev,
//           coverImage: file,
//         }))
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!restaurant.name.trim()) newErrors.name = "Restaurant name is required"
//     if (!restaurant.email.trim()) newErrors.email = "Email is required"
//     if (!restaurant.phone.trim()) newErrors.phone = "Phone number is required"
//     if (!restaurant.address.trim()) newErrors.address = "Address is required"
//     if (!restaurant.openingTime) newErrors.openingTime = "Opening time is required"
//     if (!restaurant.closingTime) newErrors.closingTime = "Closing time is required"

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (restaurant.email && !emailRegex.test(restaurant.email)) {
//       newErrors.email = "Invalid email format"
//     }

//     // Validate phone format (simple validation)
//     const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/
//     if (restaurant.phone && !phoneRegex.test(restaurant.phone)) {
//       newErrors.phone = "Invalid phone number format"
//     }

//     // Validate numeric fields
//     if (restaurant.deliveryRadius && isNaN(Number.parseFloat(restaurant.deliveryRadius))) {
//       newErrors.deliveryRadius = "Must be a number"
//     }

//     if (restaurant.minimumOrder && isNaN(Number.parseFloat(restaurant.minimumOrder))) {
//       newErrors.minimumOrder = "Must be a number"
//     }

//     if (restaurant.deliveryFee && isNaN(Number.parseFloat(restaurant.deliveryFee))) {
//       newErrors.deliveryFee = "Must be a number"
//     }

//     if (restaurant.averagePreparationTime && isNaN(Number.parseInt(restaurant.averagePreparationTime))) {
//       newErrors.averagePreparationTime = "Must be a number"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       toast.error("Please fix the errors in the form")
//       return
//     }

//     setSaving(true)

//     // Simulate API call to update restaurant profile
//     setTimeout(() => {
//       setSaving(false)
//       toast.success("Restaurant profile updated successfully")
//     }, 1500)
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <h1 className="text-2xl font-bold mb-6">Restaurant Profile</h1>

//       <form onSubmit={handleSubmit}>
//         {/* Cover Image */}
//         <div className="mb-6 relative">
//           <div className="h-48 md:h-64 rounded-lg overflow-hidden bg-gray-100">
//             <img
//               src={coverPreview || "/placeholder.svg?height=400&width=800"}
//               alt="Restaurant Cover"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <label
//             htmlFor="coverImage"
//             className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
//           >
//             <FaCamera className="text-gray-700" />
//             <input
//               type="file"
//               id="coverImage"
//               className="hidden"
//               accept="image/*"
//               onChange={handleCoverChange}
//             />
//           </label>
//         </div>

//         {/* Logo */}
//         <div className="mb-6 flex justify-center">
//           <div className="relative">
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-white -mt-12 md:-mt-16">
//               <img
//                 src={logoPreview || "/placeholder.svg?height=200&width=200"}
//                 alt="Restaurant Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <label
//               htmlFor="logo"
//               className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
//             >
//               <FaCamera className="text-gray-700" />
//               <input type="file" id="logo" className="hidden" accept="image/*" onChange={handleLogoChange} />
//             </label>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Restaurant Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={restaurant.name}
//                 onChange={handleChange}
//                 className={`w-full p-2 border ${
//                   errors.name ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
//               />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={restaurant.email}
//                 onChange={handleChange}
//                 className={`w-full p-2 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={restaurant.phone}
//                 onChange={handleChange}
//                 className={`w-full p-2 border ${
//                   errors.phone ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
//               />
//               {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Types</label>
//               <input
//                 type="text"
//                 name="cuisine"
//                 value={restaurant.cuisine}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="e.g., Italian, Chinese, Mexican"
//               />
//               <p className="text-gray-500 text-xs mt-1">Separate multiple cuisines with commas</p>
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={restaurant.address}
//                 onChange={handleChange}
//                 className={`w-full p-2 border ${
//                   errors.address ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
//               />
//               {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//               <textarea
//                 name="description"
//                 value={restaurant.description}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Tell customers about your restaurant..."
//               ></textarea>
//             </div>
//           </div>

//           <hr className="my-6" />

//           <h2 className="text-xl font-semibold mb-4">Operating Hours</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium">

// \




import { useState, useEffect } from "react"
import { FaStore, FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import { Link } from "react-router-dom"

const SellerProfile = () => {
  const [storeData, setStoreData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch store data
    setLoading(true)
    setTimeout(() => {
      setStoreData({
        id: "store123",
        name: "Gourmet Delights",
        description: "Specializing in artisanal foods and gourmet ingredients",
        logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&h=500&q=80",
        coverImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1470&q=80",
        address: "123 Culinary Ave, Foodville, CA 94123",
        phone: "+1 (555) 123-4567",
        email: "contact@gourmetdelights.com",
        website: "www.gourmetdelights.com",
        openingHours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
        joinedDate: "June 15, 2022",
        rating: 4.8,
        totalSales: "$124,500",
        totalOrders: 1245,
        categories: ["Gourmet", "Organic", "Specialty Foods"],
        featured: true,
      })
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Cover Image */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-6">
        <img
          src={storeData.coverImage || "/placeholder.svg"}
          alt="Store Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{storeData.name}</h1>
            <p className="text-sm opacity-90 mt-2">{storeData.description}</p>
          </div>
        </div>
        <Link
          to="/store-profile/edit"
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaEdit className="text-gray-700" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Store Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
          <div className="flex items-center mb-6">
            <img
              src={storeData.logo || "/placeholder.svg"}
              alt={storeData.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{storeData.name}</h2>
              <div className="flex items-center mt-1">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                  {storeData.featured ? "Featured Store" : "Active"}
                </span>
                <span className="ml-2 flex items-center text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="ml-1 text-sm">{storeData.rating}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-gray-500 mt-1 mr-3" />
              <span>{storeData.address}</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-500 mr-3" />
              <span>{storeData.phone}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-3" />
              <span>{storeData.email}</span>
            </div>
            <div className="flex items-start">
              <FaClock className="text-gray-500 mt-1 mr-3" />
              <span>{storeData.openingHours}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {storeData.categories.map((category, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Member since {storeData.joinedDate}</p>
          </div>
        </div>

        {/* Store Stats */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Store Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Total Sales</p>
                <p className="text-2xl font-bold text-blue-900">{storeData.totalSales}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700 font-medium">Total Orders</p>
                <p className="text-2xl font-bold text-green-900">{storeData.totalOrders}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-700 font-medium">Rating</p>
                <p className="text-2xl font-bold text-purple-900">{storeData.rating}/5.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/foods" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center">
                <FaStore className="mx-auto text-xl text-gray-700 mb-2" />
                <span className="text-sm font-medium">Manage Products</span>
              </Link>
              <Link to="/orders" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center">
                <svg
                  className="mx-auto h-5 w-5 text-gray-700 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="text-sm font-medium">View Orders</span>
              </Link>
              <Link
                to="/promotions/special-offers"
                className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center"
              >
                <svg
                  className="mx-auto h-5 w-5 text-gray-700 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a4 4 0 118 0v7m-8 0H4"
                  />
                </svg>
                <span className="text-sm font-medium">Create Offer</span>
              </Link>
              <Link to="/reports/sales" className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center">
                <svg
                  className="mx-auto h-5 w-5 text-gray-700 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm font-medium">View Reports</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Link to="/orders" className="text-sm text-primary-600 hover:text-primary-800">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    New order received <span className="font-bold">#ORD-2345</span>
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="text-sm font-medium text-green-600">$45.80</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Order <span className="font-bold">#ORD-2344</span> completed
                  </p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
                <span className="text-sm font-medium text-green-600">$78.25</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Order <span className="font-bold">#ORD-2343</span> is being prepared
                  </p>
                  <p className="text-xs text-gray-500">8 hours ago</p>
                </div>
                <span className="text-sm font-medium text-green-600">$32.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerProfile
