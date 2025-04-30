
import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaSearch,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaClipboardList,
  FaShoppingBag,
  FaMoneyBillWave,
} from "react-icons/fa"
import PropTypes from "prop-types"

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const profileRef = useRef(null)
  const notificationRef = useRef(null)
  const messageRef = useRef(null)
  const navigate = useNavigate()

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
    setIsNotificationOpen(false)
    setIsMessageOpen(false)
  }

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen)
    setIsProfileOpen(false)
    setIsMessageOpen(false)
  }

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen)
    setIsProfileOpen(false)
    setIsNotificationOpen(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  const handleNotificationClick = (notification) => {
    // Navigate to the appropriate page based on notification type
    setIsNotificationOpen(false)
    if (notification.type === "order") {
      navigate(`/orders/${notification.id}`)
    } else if (notification.type === "restaurant") {
      navigate(`/restaurants/${notification.id}`)
    } else if (notification.type === "driver") {
      navigate(`/drivers/${notification.id}`)
    }
  }

  const handleMessageClick = (message) => {
    // Navigate to the messages page with the selected conversation
    setIsMessageOpen(false)
    navigate(`/messages/${message.id}`)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false)
      }
      if (messageRef.current && !messageRef.current.contains(event.target)) {
        setIsMessageOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Sample notifications data
  const notifications = [
    {
      id: "order-123",
      type: "order",
      title: "New order received",
      message: "Order #12345 needs attention",
      time: "2 hours ago",
      isRead: false,
      icon: <FaShoppingBag className="text-white" />,
    },
    {
      id: "restaurant-456",
      type: "restaurant",
      title: "New restaurant registered",
      message: "Karachi Biryani House has registered",
      time: "5 hours ago",
      isRead: false,
      icon: <FaClipboardList className="text-white" />,
    },
    {
      id: "driver-789",
      type: "driver",
      title: "Driver approval pending",
      message: "Ahmed Khan is waiting for approval",
      time: "1 day ago",
      isRead: true,
      icon: <FaMoneyBillWave className="text-white" />,
    },
  ]

  // Sample messages data
  const messages = [
    {
      id: "msg-123",
      sender: "Ahmed Khan",
      avatar: null,
      message: "Hello, I have a question about my order...",
      time: "5 min ago",
      isRead: false,
    },
    {
      id: "msg-456",
      sender: "Karachi Biryani House",
      avatar: null,
      message: "We're having issues with the payment system",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: "msg-789",
      sender: "Fatima Ali",
      avatar: null,
      message: "Can you help me update my restaurant menu?",
      time: "1 day ago",
      isRead: true,
    },
    {
      id: "msg-101",
      sender: "Support Team",
      avatar: null,
      message: "The weekly report is now available",
      time: "2 days ago",
      isRead: true,
    },
    {
      id: "msg-112",
      sender: "System Notification",
      avatar: null,
      message: "Your account password was changed successfully",
      time: "3 days ago",
      isRead: true,
    },
  ]

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left side - Menu toggle and search */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            aria-label="Toggle sidebar"
          >
            <FaBars className="text-xl" />
          </button>

          <div className="hidden md:block relative">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div>
        </div>

        {/* Right side - Notifications, messages, profile */}
        <div className="flex items-center space-x-2">
          {/* Search button for mobile */}
          <button className="md:hidden p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <FaSearch className="text-xl" />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={toggleNotification}
              className="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none relative transition-colors duration-200"
              aria-label="Notifications"
            >
              <FaBell className="text-xl" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.filter((n) => !n.isRead).length}
              </span>
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50 max-h-96 overflow-y-auto">
                <div className="px-4 py-2 font-medium border-b flex justify-between items-center">
                  <span>Notifications</span>
                  <span className="text-xs text-teal-600 cursor-pointer hover:underline">Mark all as read</span>
                </div>
                {notifications.length > 0 ? (
                  <>
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className={`px-4 py-3 hover:bg-gray-50 border-b cursor-pointer transition-colors duration-200 ${!notification.isRead ? "bg-blue-50" : ""}`}
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div className="flex items-start">
                          <div
                            className={`flex-shrink-0 ${!notification.isRead ? "bg-teal-500" : "bg-gray-400"} rounded-full p-2`}
                          >
                            {notification.icon || <FaBell className="text-white" />}
                          </div>
                          <div className="ml-3 flex-1">
                            <p
                              className={`text-sm font-medium ${!notification.isRead ? "text-gray-900" : "text-gray-700"}`}
                            >
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                          {!notification.isRead && <div className="w-2 h-2 bg-teal-500 rounded-full"></div>}
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-2 text-center text-sm text-teal-600 hover:bg-gray-50 transition-colors duration-200">
                      <Link to="/notifications">View all notifications</Link>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    <div className="flex justify-center mb-3">
                      <FaBell className="text-gray-300 text-3xl" />
                    </div>
                    <p>No notifications yet</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="relative" ref={messageRef}>
            <button
              onClick={toggleMessage}
              className="p-2 text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none relative transition-colors duration-200"
              aria-label="Messages"
            >
              <FaEnvelope className="text-xl" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                {messages.filter((m) => !m.isRead).length}
              </span>
            </button>

            {isMessageOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50 max-h-96 overflow-y-auto">
                <div className="px-4 py-2 font-medium border-b flex justify-between items-center">
                  <span>Messages</span>
                  <span className="text-xs text-teal-600 cursor-pointer hover:underline">Mark all as read</span>
                </div>
                {messages.length > 0 ? (
                  <>
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`px-4 py-3 hover:bg-gray-50 border-b cursor-pointer transition-colors duration-200 ${!message.isRead ? "bg-blue-50" : ""}`}
                        onClick={() => handleMessageClick(message)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {message.avatar ? (
                              <img
                                src={message.avatar || "/placeholder.svg"}
                                alt={message.sender}
                                className="w-10 h-10 rounded-full"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                <FaUser className="text-teal-600" />
                              </div>
                            )}
                          </div>
                          <div className="ml-3 flex-1">
                            <p className={`text-sm font-medium ${!message.isRead ? "text-gray-900" : "text-gray-700"}`}>
                              {message.sender}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{message.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                          </div>
                          {!message.isRead && <div className="w-2 h-2 bg-teal-500 rounded-full"></div>}
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-2 text-center text-sm text-teal-600 hover:bg-gray-50 transition-colors duration-200">
                      <Link to="/messages">View all messages</Link>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    <div className="flex justify-center mb-3">
                      <FaEnvelope className="text-gray-300 text-3xl" />
                    </div>
                    <p>No messages yet</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={toggleProfile}
              className="flex items-center space-x-2 focus:outline-none transition-colors duration-200"
              aria-label="Profile"
            >
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <FaUser className="text-teal-600" />
              </div>
              <span className="hidden md:inline-block font-medium">Seller</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-50">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-900">Seller</p>
                  <p className="text-xs text-gray-500 truncate">seller@example.com</p>
                </div>

                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                >
                  <FaUserCircle className="mr-3 text-gray-500" /> Your Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                >
                  <FaCog className="mr-3 text-gray-500" /> Settings
                </Link>

                <div className="border-t border-gray-100"></div>

                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                >
                  <FaSignOutAlt className="mr-3" /> Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default Header
