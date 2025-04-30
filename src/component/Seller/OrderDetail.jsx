"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  FaArrowLeft,
  FaPrint,
  FaCheck,
  FaTimes,
  FaMotorcycle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaMoneyBillWave,
  FaUtensils,
} from "react-icons/fa"
import { toast } from "react-toastify"

const OrderStatusSteps = ({ currentStatus }) => {
  const statuses = ["Pending", "Confirmed", "Preparing", "Ready for Pickup", "Out for Delivery", "Delivered"]
  const currentIndex = statuses.indexOf(currentStatus)

  return (
    <div className="w-full py-4">
      <div className="flex items-center">
        {statuses.map((status, index) => (
          <div key={index} className="flex-1 relative">
            <div className={`flex flex-col items-center`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  index <= currentIndex ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {index < currentIndex ? (
                  <FaCheck className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-medium">{index + 1}</span>
                )}
              </div>
              <span
                className={`text-xs mt-1 ${index <= currentIndex ? "text-green-600 font-medium" : "text-gray-500"}`}
              >
                {status}
              </span>
            </div>

            {index < statuses.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-0.5 ${
                  index < currentIndex ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const OrderDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState(null)
  const [updatingStatus, setUpdatingStatus] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch order details
    setTimeout(() => {
      const mockOrder = {
        id: id,
        orderNumber: `ORD-${id}`,
        customer: {
          name: "John Doe",
          phone: "+1 (555) 123-4567",
          address: "123 Main St, Apt 4B, New York, NY 10001",
          email: "john.doe@example.com",
        },
        items: [
          { id: 1, name: "Classic Burger", quantity: 2, price: 8.99, total: 17.98, notes: "No pickles please" },
          { id: 2, name: "French Fries", quantity: 1, price: 3.99, total: 3.99, notes: "" },
          { id: 3, name: "Chocolate Milkshake", quantity: 2, price: 4.99, total: 9.98, notes: "Extra chocolate syrup" },
        ],
        subtotal: 31.95,
        tax: 2.87,
        deliveryFee: 3.99,
        total: 38.81,
        paymentMethod: "Credit Card",
        status: "Preparing",
        orderType: "Delivery",
        createdAt: "2023-06-15T14:30:00Z",
        estimatedDeliveryTime: "2023-06-15T15:15:00Z",
        driver: {
          name: "Mike Wilson",
          phone: "+1 (555) 987-6543",
          vehicleInfo: "Honda Civic - White - XYZ 123",
        },
        specialInstructions: "Please ring doorbell and leave at door",
      }

      setOrder(mockOrder)
      setLoading(false)
    }, 1000)
  }, [id])

  const handleStatusUpdate = (newStatus) => {
    setUpdatingStatus(true)

    // Simulate API call to update order status
    setTimeout(() => {
      setOrder((prev) => ({
        ...prev,
        status: newStatus,
      }))
      setUpdatingStatus(false)
      toast.success(`Order status updated to ${newStatus}`)
    }, 800)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  }

  const getNextStatus = (currentStatus) => {
    const statusFlow = ["Pending", "Confirmed", "Preparing", "Ready for Pickup", "Out for Delivery", "Delivered"]
    const currentIndex = statusFlow.indexOf(currentStatus)

    if (currentIndex < statusFlow.length - 1) {
      return statusFlow[currentIndex + 1]
    }
    return null
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  const nextStatus = getNextStatus(order.status)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-orange-500 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => navigate("/seller/orders")}
            className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <FaArrowLeft className="text-white" />
          </button>
          <div>
            <h1 className="text-xl font-semibold">Order #{order.orderNumber}</h1>
            <p className="text-sm opacity-80">{formatDate(order.createdAt)}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => window.print()}
            className="bg-white text-orange-500 px-3 py-1 rounded-md text-sm font-medium flex items-center"
          >
            <FaPrint className="mr-1" /> Print
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Order Status */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">Order Status</h2>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : order.status === "Cancelled"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {order.status}
            </span>
          </div>

          <OrderStatusSteps currentStatus={order.status} />

          <div className="mt-4 flex justify-end">
            {nextStatus && (
              <button
                onClick={() => handleStatusUpdate(nextStatus)}
                disabled={updatingStatus}
                className={`px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center ${
                  updatingStatus ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <FaCheck className="mr-2" />
                {updatingStatus ? "Updating..." : `Mark as ${nextStatus}`}
              </button>
            )}

            {order.status !== "Cancelled" && order.status !== "Delivered" && (
              <button
                onClick={() => handleStatusUpdate("Cancelled")}
                disabled={updatingStatus}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center"
              >
                <FaTimes className="mr-2" />
                Cancel Order
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Customer Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Customer Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {order.customer.name}
              </p>
              <p className="text-gray-700 flex items-center">
                <FaPhoneAlt className="text-gray-400 mr-1" />
                <a href={`tel:${order.customer.phone}`} className="text-blue-500 hover:underline">
                  {order.customer.phone}
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {order.customer.email}
              </p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {order.orderType === "Delivery" ? "Delivery Information" : "Pickup Information"}
            </h2>
            <div className="space-y-2">
              {order.orderType === "Delivery" ? (
                <>
                  <p className="text-gray-700 flex items-start">
                    <FaMapMarkerAlt className="text-gray-400 mr-1 mt-1" />
                    <span>{order.customer.address}</span>
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <FaMotorcycle className="text-gray-400 mr-1" />
                    <span>Driver: {order.driver ? order.driver.name : "Not assigned yet"}</span>
                  </p>
                  {order.driver && (
                    <p className="text-gray-700 flex items-center">
                      <FaPhoneAlt className="text-gray-400 mr-1" />
                      <a href={`tel:${order.driver.phone}`} className="text-blue-500 hover:underline">
                        {order.driver.phone}
                      </a>
                    </p>
                  )}
                </>
              ) : (
                <p className="text-gray-700">Customer will pick up the order from your restaurant</p>
              )}
              <p className="text-gray-700 flex items-center">
                <FaRegClock className="text-gray-400 mr-1" />
                <span>
                  Estimated {order.orderType === "Delivery" ? "Delivery" : "Pickup"}:{" "}
                  {formatDate(order.estimatedDeliveryTime)}
                </span>
              </p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Payment Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700 flex items-center">
                <FaMoneyBillWave className="text-gray-400 mr-1" />
                <span>Method: {order.paymentMethod}</span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Subtotal:</span> ${order.subtotal.toFixed(2)}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Tax:</span> ${order.tax.toFixed(2)}
              </p>
              {order.orderType === "Delivery" && (
                <p className="text-gray-700">
                  <span className="font-medium">Delivery Fee:</span> ${order.deliveryFee.toFixed(2)}
                </p>
              )}
              <p className="text-gray-700 font-medium text-lg">Total: ${order.total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Order Items</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaUtensils className="text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          {item.notes && <div className="text-xs text-gray-500 mt-1">Note: {item.notes}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                      ${item.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="3" className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                    Subtotal
                  </td>
                  <td className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                    ${order.subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                    Tax
                  </td>
                  <td className="px-6 py-3 text-right text-sm font-medium text-gray-900">${order.tax.toFixed(2)}</td>
                </tr>
                {order.orderType === "Delivery" && (
                  <tr>
                    <td colSpan="3" className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                      Delivery Fee
                    </td>
                    <td className="px-6 py-3 text-right text-sm font-medium text-gray-900">
                      ${order.deliveryFee.toFixed(2)}
                    </td>
                  </tr>
                )}
                <tr>
                  <td colSpan="3" className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    Total
                  </td>
                  <td className="px-6 py-3 text-right text-base font-bold text-gray-900">${order.total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Special Instructions */}
        {order.specialInstructions && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Special Instructions</h2>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-gray-700">
              {order.specialInstructions}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderDetail
