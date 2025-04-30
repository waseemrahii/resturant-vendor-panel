// "use client"

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { FaUser, FaCog, FaSignOutAlt, FaStore, FaBell } from "react-icons/fa"
// import { IoMdArrowDropdown } from "react-icons/io"
// import { useAuth } from "../../context/AuthContext"
// import { toast } from "react-toastify"

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const [notificationsOpen, setNotificationsOpen] = useState(false)
//   const { user, logout } = useAuth()
//   const navigate = useNavigate()

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen)
//     if (notificationsOpen) setNotificationsOpen(false)
//   }

//   const toggleNotifications = () => {
//     setNotificationsOpen(!notificationsOpen)
//     if (dropdownOpen) setDropdownOpen(false)
//   }

//   const handleLogout = () => {
//     logout()
//     toast.success("Logged out successfully")
//   }

//   const handleProfileClick = () => {
//     navigate("/profile")
//     setDropdownOpen(false)
//   }

//   // Sample notifications
//   const notifications = [
//     { id: 1, message: "New order received #1234", time: "5 min ago", isRead: false },
//     { id: 2, message: "Your payout request was approved", time: "1 hour ago", isRead: false },
//     { id: 3, message: "Customer left a 5-star review", time: "3 hours ago", isRead: true },
//   ]

//   return (
//     <div>
//       <nav className="p-2 flex h-12 justify-between items-center">
//         <div className="flex items-center">
//           <select name="" id="" className="mx-2 h-6 bg-white rounded text-primary-500">
//             <option value="en">English</option>
//             <option value="fr">French</option>
//             <option value="es">Spanish</option>
//           </select>
//         </div>

//         <div className="relative flex items-center gap-4">
//           {/* Notifications */}
//           <div className="relative">
//             <button
//               onClick={toggleNotifications}
//               className="w-8 h-8 flex justify-center items-center bg-white text-primary-500 rounded-full focus:outline-none"
//             >
//               <FaBell />
//               {notifications.some((n) => !n.isRead) && (
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               )}
//             </button>

//             {notificationsOpen && (
//               <div className="absolute top-10 right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
//                 <div className="flex justify-between items-center px-4 py-2 border-b">
//                   <h3 className="font-semibold">Notifications</h3>
//                   <button className="text-xs text-primary-600">Mark all as read</button>
//                 </div>
//                 <div className="max-h-80 overflow-y-auto">
//                   {notifications.map((notification) => (
//                     <div
//                       key={notification.id}
//                       className={`px-4 py-2 border-b hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50" : ""}`}
//                     >
//                       <p className="text-sm">{notification.message}</p>
//                       <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="px-4 py-2 text-center">
//                   <button
//                     onClick={() => navigate("/notifications")}
//                     className="text-sm text-primary-600 hover:underline"
//                   >
//                     View all notifications
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* User Menu */}
//           <div className="relative flex items-center">
//             <div className="w-10 h-10 flex justify-center items-center bg-white text-primary-500 rounded-full text-3xl focus:outline-none">
//               <FaStore />
//             </div>
//             <button onClick={toggleDropdown} className="flex items-center">
//               <span className="ml-2 text-white text-sm hidden md:block">
//                 {user?.restaurantName || "Restaurant Name"}
//               </span>
//               <IoMdArrowDropdown className="w-6 text-white" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
//                 <div className="flex flex-col items-center p-4 border-b">
//                   <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl mb-2">
//                     {user?.restaurantName?.charAt(0) || "R"}
//                   </div>
//                   <span className="text-gray-700 font-bold">{user?.restaurantName || "Restaurant Name"}</span>
//                   <span className="text-gray-500 text-sm">{user?.email || "restaurant@example.com"}</span>
//                 </div>
//                 <div>
//                   <button
//                     onClick={handleProfileClick}
//                     className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> Restaurant Profile
//                   </button>
//                   <button
//                     onClick={() => {
//                       navigate("/settings")
//                       setDropdownOpen(false)
//                     }}
//                     className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                   >
//                     <FaCog className="mr-2" /> Settings
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                   >
//                     <FaSignOutAlt className="mr-2" /> Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUser, FaCog, FaSignOutAlt, FaStore, FaBell } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-toastify"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
    if (notificationsOpen) setNotificationsOpen(false)
  }

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
    if (dropdownOpen) setDropdownOpen(false)
  }

  const handleLogout = () => {
    logout()
    toast.success("Logged out successfully")
  }

  const handleProfileClick = () => {
    navigate("/seller/profile")
    setDropdownOpen(false)
  }

  // Sample notifications
  const notifications = [
    { id: 1, message: "New order received #1234", time: "5 min ago", isRead: false },
    { id: 2, message: "Your payout request was approved", time: "1 hour ago", isRead: false },
    { id: 3, message: "Customer left a 5-star review", time: "3 hours ago", isRead: true },
  ]

  return (
    <div>
      <nav className="p-2 flex h-12 justify-between items-center">
        <div className="flex items-center">
          <select name="" id="" className="mx-2 h-6 bg-white rounded text-primary-500">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="relative flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="w-8 h-8 flex justify-center items-center bg-white text-primary-500 rounded-full focus:outline-none"
            >
              <FaBell />
              {notifications.some((n) => !n.isRead) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {notificationsOpen && (
              <div className="absolute top-10 right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="flex justify-between items-center px-4 py-2 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                  <button className="text-xs text-primary-600">Mark all as read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-2 border-b hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50" : ""}`}
                    >
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 text-center">
                  <button
                    onClick={() => navigate("/notifications")}
                    className="text-sm text-primary-600 hover:underline"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative flex items-center">
            <div className="w-10 h-10 flex justify-center items-center bg-white text-primary-500 rounded-full text-3xl focus:outline-none">
              <FaStore />
            </div>
            <button onClick={toggleDropdown} className="flex items-center">
              <span className="ml-2 text-white text-sm hidden md:block">
                {user?.restaurantName || "Restaurant Name"}
              </span>
              <IoMdArrowDropdown className="w-6 text-white" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="flex flex-col items-center p-4 border-b">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl mb-2">
                    {user?.restaurantName?.charAt(0) || "R"}
                  </div>
                  <span className="text-gray-700 font-bold">{user?.restaurantName || "Restaurant Name"}</span>
                  <span className="text-gray-500 text-sm">{user?.email || "restaurant@example.com"}</span>
                </div>
                <div>
                  <button
                    onClick={handleProfileClick}
                    className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                  >
                    <FaUser className="mr-2" /> Restaurant Profile
                  </button>
                  <button
                    onClick={() => {
                      navigate("/seller/settings")
                      setDropdownOpen(false)
                    }}
                    className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                  >
                    <FaCog className="mr-2" /> Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
