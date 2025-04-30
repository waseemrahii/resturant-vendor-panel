"use client"

import { useState } from "react"
import { FiSave } from "react-icons/fi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import { BiTime } from "react-icons/bi"
import { FaRegCreditCard } from "react-icons/fa"
import { IoNotificationsOutline } from "react-icons/io5"

const SellerSettings = () => {
  const [activeTab, setActiveTab] = useState("general")

  const tabs = [
    { id: "general", label: "General", icon: <MdOutlineRestaurantMenu className="text-xl" /> },
    { id: "hours", label: "Business Hours", icon: <BiTime className="text-xl" /> },
    { id: "payment", label: "Payment Methods", icon: <FaRegCreditCard className="text-xl" /> },
    { id: "notifications", label: "Notifications", icon: <IoNotificationsOutline className="text-xl" /> },
  ]

  // General settings state
  const [generalSettings, setGeneralSettings] = useState({
    restaurantName: "My Restaurant",
    description: "Delicious food delivered to your doorstep",
    phoneNumber: "+1 (555) 123-4567",
    email: "contact@myrestaurant.com",
    address: "123 Food Street, Cuisine City",
    deliveryRadius: "5",
    minOrderAmount: "10",
    averagePreparationTime: "30",
  })

  // Business hours state
  const [businessHours, setBusinessHours] = useState({
    monday: { open: true, from: "09:00", to: "22:00" },
    tuesday: { open: true, from: "09:00", to: "22:00" },
    wednesday: { open: true, from: "09:00", to: "22:00" },
    thursday: { open: true, from: "09:00", to: "22:00" },
    friday: { open: true, from: "09:00", to: "22:00" },
    saturday: { open: true, from: "10:00", to: "23:00" },
    sunday: { open: true, from: "10:00", to: "22:00" },
  })

  // Payment methods state
  const [paymentMethods, setPaymentMethods] = useState({
    cash: true,
    creditCard: true,
    debitCard: true,
    onlinePayment: true,
    bankTransfer: false,
  })

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    newOrder: true,
    orderCancellation: true,
    orderDelivered: true,
    customerReview: true,
    promotionalEmails: false,
  })

  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBusinessHoursChange = (day, field, value) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: field === "open" ? !prev[day].open : value,
      },
    }))
  }

  const handlePaymentMethodChange = (method) => {
    setPaymentMethods((prev) => ({
      ...prev,
      [method]: !prev[method],
    }))
  }

  const handleNotificationChange = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save settings logic would go here
    alert("Settings saved successfully!")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input
                  type="text"
                  name="restaurantName"
                  value={generalSettings.restaurantName}
                  onChange={handleGeneralChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={generalSettings.phoneNumber}
                  onChange={handleGeneralChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={generalSettings.email}
                onChange={handleGeneralChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Description</label>
              <textarea
                name="description"
                value={generalSettings.description}
                onChange={handleGeneralChange}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={generalSettings.address}
                onChange={handleGeneralChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)</label>
                <input
                  type="number"
                  name="deliveryRadius"
                  value={generalSettings.deliveryRadius}
                  onChange={handleGeneralChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Order Amount ($)</label>
                <input
                  type="number"
                  name="minOrderAmount"
                  value={generalSettings.minOrderAmount}
                  onChange={handleGeneralChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Avg. Preparation Time (min)</label>
                <input
                  type="number"
                  name="averagePreparationTime"
                  value={generalSettings.averagePreparationTime}
                  onChange={handleGeneralChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        )

      case "hours":
        return (
          <div className="space-y-4">
            {Object.entries(businessHours).map(([day, hours]) => (
              <div key={day} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-md">
                <div className="w-28 font-medium capitalize">{day}</div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${day}-open`}
                    checked={hours.open}
                    onChange={() => handleBusinessHoursChange(day, "open")}
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`${day}-open`} className="text-sm text-gray-700">
                    Open
                  </label>
                </div>

                {hours.open && (
                  <div className="flex flex-1 items-center space-x-2">
                    <input
                      type="time"
                      value={hours.from}
                      onChange={(e) => handleBusinessHoursChange(day, "from", e.target.value)}
                      className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={hours.to}
                      onChange={(e) => handleBusinessHoursChange(day, "to", e.target.value)}
                      className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )

      case "payment":
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Select the payment methods you want to accept from customers:</p>

            {Object.entries(paymentMethods).map(([method, isEnabled]) => (
              <div key={method} className="flex items-center p-3 border border-gray-200 rounded-md">
                <input
                  type="checkbox"
                  id={`payment-${method}`}
                  checked={isEnabled}
                  onChange={() => handlePaymentMethodChange(method)}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor={`payment-${method}`} className="ml-2 block text-sm text-gray-700 capitalize">
                  {method.replace(/([A-Z])/g, " $1").trim()}
                </label>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">Payment Processing</h4>
              <p className="text-sm text-gray-600">
                Connect your bank account to receive payments directly. This can be configured in the Payment Account
                section.
              </p>
              <button className="mt-3 text-orange-600 text-sm font-medium hover:text-orange-700">
                Configure Payment Account
              </button>
            </div>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">Configure which notifications you want to receive:</p>

            {Object.entries(notificationSettings).map(([setting, isEnabled]) => (
              <div key={setting} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                <div>
                  <h4 className="font-medium text-gray-800 capitalize">{setting.replace(/([A-Z])/g, " $1").trim()}</h4>
                  <p className="text-xs text-gray-500 mt-1">{getNotificationDescription(setting)}</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={() => handleNotificationChange(setting)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                </label>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  const getNotificationDescription = (setting) => {
    const descriptions = {
      newOrder: "Get notified when a new order is placed",
      orderCancellation: "Get notified when an order is cancelled",
      orderDelivered: "Get notified when an order is delivered",
      customerReview: "Get notified when a customer leaves a review",
      promotionalEmails: "Receive promotional emails and updates",
    }
    return descriptions[setting] || ""
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Restaurant Settings</h2>

      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 text-sm font-medium mr-4 -mb-px ${
              activeTab === tab.id
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">{renderTabContent()}</div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <FiSave className="mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  )
}

export default SellerSettings
