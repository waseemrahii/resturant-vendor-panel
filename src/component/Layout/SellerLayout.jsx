
// import { useState, useEffect } from "react"
// import { Outlet, useLocation, useNavigate } from "react-router-dom"
// import { FaHome, FaUtensils, FaShoppingCart, FaWallet, FaStar, FaUserCog, FaCog } from "react-icons/fa"
// import { toast } from "react-toastify"
// import { useAuth } from "../../context/AuthContext"

// // Import the NotificationCenter
// import NotificationCenter from "../Seller/NotificationCenter"

// const SellerLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const { user, logout, isAuthenticated } = useAuth()
//   const location = useLocation()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Check if user is authenticated and has seller role
//     if (!isAuthenticated()) {
//       navigate("/login")
//       return
//     }

//     // Check if user has seller role (you can adjust this based on your role structure)
//     if (user && user.role !== "seller" && user.role !== "restaurant") {
//       toast.error("You don't have permission to access the seller panel")
//       navigate("/login")
//     }
//   }, [isAuthenticated, user, navigate])

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   const menuItems = [
//     { path: "/seller/dashboard", name: "Dashboard", icon: <FaHome /> },
//     { path: "/seller/menu", name: "Menu Items", icon: <FaUtensils /> },
//     { path: "/seller/orders", name: "Orders", icon: <FaShoppingCart /> },
//     { path: "/seller/payments", name: "Payments", icon: <FaWallet /> },
//     { path: "/seller/reviews", name: "Reviews", icon: <FaStar /> },
//     { path: "/seller/profile", name: "Profile", icon: <FaUserCog /> },
//     { path: "/seller/settings", name: "Settings", icon: <FaCog /> },
//   ]

//   const isActive = (path) => {
//     return location.pathname === path
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isSidebarOpen ? "w-64" : "w-20"
//         } bg-white shadow-lg fixed h-full transition-all duration-300 ease-in-out z-10 hidden md:block`}
//       >
//         <div className="flex h-16 items-center px-4 border-b">
//           <div className="flex items-center">
//             <img src="/placeholder.png?height=40&width=40" alt="Logo" className="h-10 w-10 rounded-full" />
//             {isSidebarOpen && <span className="ml-2 text-xl font-semibold text-gray-800">eFoodie</span>}
//           </div>
//           {isSidebarOpen && (
//             <div className="ml-auto flex items-center">
//               <NotificationCenter />
//               <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 ml-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}
//           {!isSidebarOpen && (
//             <button onClick={toggleSidebar} className="ml-auto text-gray-500 hover:text-gray-700">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
//               </svg>
//             </button>
//           )}
//         </div>

//         <nav className="mt-5 px-2">
//           {menuItems.map((item) => (
//             <a
//               key={item.path}
//               href={item.path}
//               onClick={(e) => {
//                 e.preventDefault()
//                 navigate(item.path)
//               }}
//               className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
//                 isActive(item.path)
//                   ? "bg-orange-500 text-white"
//                   : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
//               }`}
//             >
//               <span className="text-xl">{item.icon}</span>
//               {isSidebarOpen && <span className="ml-3">{item.name}</span>}
//             </a>
//           ))}
//         </nav>

//         <div className="absolute bottom-0 w-full border-t p-4">
//           <div className="flex items-center">
//             <img
//               src={user?.profileImage || "/placeholder.png?height=40&width=40"}
//               alt="User"
//               className="h-10 w-10 rounded-full"
//             />
//             {isSidebarOpen && (
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-700">{user?.name || "Restaurant Owner"}</p>
//                 <button onClick={logout} className="text-xs text-red-500 hover:text-red-700 transition-colors">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Header */}
//       <div className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-between px-4 z-20 md:hidden">
//         <div className="flex items-center">
//           <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 mr-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <img src="/placeholder.png?height=40&width=40" alt="Logo" className="h-8 w-8 rounded-full" />
//           <span className="ml-2 text-lg font-semibold text-gray-800">eFoodie Seller</span>
//         </div>
//         <div className="flex items-center">
//           <NotificationCenter />
//           <img
//             src={user?.profileImage || "/placeholder.png?height=32&width=32"}
//             alt="User"
//             className="h-8 w-8 rounded-full ml-2"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-30 md:hidden">
//           <div className="bg-white h-full w-64 p-4">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <img src="/placeholder.png?height=40&width=40" alt="Logo" className="h-8 w-8 rounded-full" />
//                 <span className="ml-2 text-lg font-semibold text-gray-800">eFoodie</span>
//               </div>
//               <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <nav>
//               {menuItems.map((item) => (
//                 <a
//                   key={item.path}
//                   href={item.path}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     navigate(item.path)
//                     toggleMobileMenu()
//                   }}
//                   className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
//                     isActive(item.path)
//                       ? "bg-orange-500 text-white"
//                       : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
//                   }`}
//                 >
//                   <span className="text-xl">{item.icon}</span>
//                   <span className="ml-3">{item.name}</span>
//                 </a>
//               ))}
//             </nav>

//             <div className="absolute bottom-0 left-0 right-0 border-t p-4">
//               <div className="flex items-center">
//                 <img
//                   src={user?.profileImage || "/placeholder.png?height=40&width=40"}
//                   alt="User"
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-700">{user?.name || "Restaurant Owner"}</p>
//                   <button onClick={logout} className="text-xs text-red-500 hover:text-red-700 transition-colors">
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div
//         className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 ${
//           isSidebarOpen ? "md:ml-64" : "md:ml-20"
//         } pt-16 md:pt-0 transition-all duration-300 ease-in-out`}
//       >
//         <div className="container mx-auto px-4 py-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SellerLayout



"use client"

import { useState } from "react"
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom"
import {
  FaHome,
  FaUtensils,
  FaShoppingCart,
  FaWallet,
  FaStar,
  FaUserCog,
  FaCog,
  FaMoneyBillWave,
  FaImage,
  FaChair,
  FaBullhorn,
} from "react-icons/fa"
import { toast } from "react-toastify"

// Import the NotificationCenter
import NotificationCenter from "../Seller/NotificationCenter"

const SellerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Mock user data - in a real app, this would come from your auth context
  const user = {
    name: "Restaurant Owner",
    profileImage: "/placeholder.png?height=40&width=40",
    role: "seller",
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const logout = () => {
    // Implement logout logic here
    toast.success("Logged out successfully")
    navigate("/seller/login")
  }

  const menuItems = [
    { path: "/seller/dashboard", name: "Dashboard", icon: <FaHome /> },
    { path: "/foods", name: "Menu Items", icon: <FaUtensils /> },
    { path: "/orders", name: "Orders", icon: <FaShoppingCart /> },
    { path: "/payments", name: "Payments", icon: <FaWallet /> },
    { path: "/withdrawals", name: "Withdrawals", icon: <FaMoneyBillWave /> },
    { path: "/reviews", name: "Reviews", icon: <FaStar /> },
    { path: "/profile", name: "Profile", icon: <FaUserCog /> },
    { path: "/gallery", name: "Gallery", icon: <FaImage /> },
    { path: "/dine-in", name: "Dine-In", icon: <FaChair /> },
    { path: "/promotions", name: "Promotions", icon: <FaBullhorn /> },
    { path: "/settings", name: "Settings", icon: <FaCog /> },
  ]

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg fixed h-full transition-all duration-300 ease-in-out z-10 hidden md:block`}
      >
        <div className="flex h-16 items-center px-4 border-b">
          <div className="flex items-center">
            <img src="/6amMart-1.svg?height=40&width=40" alt="Logo" className="h-10 w-10 rounded-full" />
            {isSidebarOpen && <span className="ml-2 text-xl font-semibold text-gray-800">eFoodie</span>}
          </div>
          {isSidebarOpen && (
            <div className="ml-auto flex items-center">
              <NotificationCenter />
              <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          )}
          {!isSidebarOpen && (
            <button onClick={toggleSidebar} className="ml-auto text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <nav className="mt-5 px-2 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-primary-500 text-white"
                  : "text-gray-600 hover:bg-primary-400 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full border-t p-4">
          <div className="flex items-center">
            <img
              src={user?.profileImage || "/placeholder.png?height=40&width=40"}
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            {isSidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{user?.name || "Restaurant Owner"}</p>
                <button onClick={logout} className="text-xs text-red-500 hover:text-red-700 transition-colors">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-between px-4 z-20 md:hidden">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src="/placeholder.png?height=40&width=40" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="ml-2 text-lg font-semibold text-gray-800">eFoodie Seller</span>
        </div>
        <div className="flex items-center">
          <NotificationCenter />
          <img
            src={user?.profileImage || "/placeholder.png?height=32&width=32"}
            alt="User"
            className="h-8 w-8 rounded-full ml-2"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-30 md:hidden">
          <div className="bg-white h-full w-64 p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img src="/placeholder.png?height=40&width=40" alt="Logo" className="h-8 w-8 rounded-full" />
                <span className="ml-2 text-lg font-semibold text-gray-800">eFoodie</span>
              </div>
              <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-orange-100 hover:text-orange-500"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 border-t p-4">
              <div className="flex items-center">
                <img
                  src={user?.profileImage || "/dev.jpg?height=40&width=40"}
                  alt="User"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">{user?.name || "Restaurant Owner"}</p>
                  <button onClick={logout} className="text-xs text-red-500 hover:text-red-700 transition-colors">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-20"
        } pt-16 md:pt-0 transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SellerLayout
