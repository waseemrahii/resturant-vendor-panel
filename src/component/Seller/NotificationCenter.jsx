"use client"

import { useState, useEffect } from "react"
import { FaBell, FaCheck, FaTimes } from "react-icons/fa"

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    // Simulate fetching notifications
    const mockNotifications = [
      {
        id: 1,
        type: "order",
        message: "New order #ORD-123 received",
        time: "5 minutes ago",
        read: false,
      },
      {
        id: 2,
        type: "review",
        message: "New 5-star review from John D.",
        time: "1 hour ago",
        read: false,
      },
      {
        id: 3,
        type: "system",
        message: "Your weekly sales report is ready",
        time: "3 hours ago",
        read: true,
      },
      {
        id: 4,
        type: "order",
        message: "Order #ORD-118 was delivered",
        time: "Yesterday",
        read: true,
      },
    ]

    setNotifications(mockNotifications)
    setUnreadCount(mockNotifications.filter((n) => !n.read).length)

    // Simulate receiving a new notification every 30 seconds
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "order" : "review",
        message:
          Math.random() > 0.5
            ? `New order #ORD-${Math.floor(Math.random() * 1000)} received`
            : `New review from Customer ${Math.floor(Math.random() * 100)}`,
        time: "Just now",
        read: false,
      }

      setNotifications((prev) => [newNotification, ...prev])
      setUnreadCount((prev) => prev + 1)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
    setUnreadCount(0)
  }

  const removeNotification = (id) => {
    const notification = notifications.find((n) => n.id === id)
    if (notification && !notification.read) {
      setUnreadCount((prev) => Math.max(0, prev - 1))
    }

    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return "🛍️"
      case "review":
        return "⭐"
      case "system":
        return "🔔"
      default:
        return "📌"
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <FaBell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50">
          <div className="py-2 px-3 bg-gray-100 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>

            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="text-xs text-orange-600 hover:text-orange-800">
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-50 flex items-start ${notification.read ? "" : "bg-orange-50"}`}
                  >
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    <div className="flex-shrink-0 flex ml-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-orange-500 hover:text-orange-700 mr-1"
                          title="Mark as read"
                        >
                          <FaCheck className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="text-gray-400 hover:text-gray-600"
                        title="Remove notification"
                      >
                        <FaTimes className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center text-gray-500">
                <p>No notifications</p>
              </div>
            )}
          </div>

          <div className="py-2 px-3 bg-gray-100 text-xs text-center text-gray-500">
            <a href="/seller/settings" className="text-orange-600 hover:underline">
              Manage notification settings
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationCenter
