"use client"

import { useState, useEffect } from "react"
import { FaChartLine, FaUtensils, FaShoppingBag, FaStar, FaMoneyBillWave, FaPercent } from "react-icons/fa"
import { MdDeliveryDining, MdCancel, MdCheckCircle, MdLocalShipping, MdAccessTimeFilled } from "react-icons/md"
import StatisticGraph from "./DashboardCards/StatisticGraph"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({
    totalEarnings: 0,
    totalOrders: 0,
    totalFoods: 0,
    averageRating: 0,
    pendingPayout: 0,
    walletBalance: 0,
    orderStatus: {
      pending: 0,
      preparing: 0,
      ready: 0,
      delivered: 0,
      cancelled: 0,
    },
    popularItems: [],
    recentOrders: [],
    monthlySales: [],
  })

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setDashboardData({
            totalEarnings: 4587.75,
            totalOrders: 124,
            totalFoods: 48,
            averageRating: 4.7,
            pendingPayout: 1250.5,
            walletBalance: 3337.25,
            orderStatus: {
              pending: 5,
              preparing: 8,
              ready: 3,
              delivered: 102,
              cancelled: 6,
            },
            popularItems: [
              {
                id: 1,
                name: "Chicken Burger",
                sales: 42,
                revenue: 545.7,
                image:
                  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
              },
              {
                id: 2,
                name: "Margherita Pizza",
                sales: 38,
                revenue: 493.9,
                image:
                  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
              },
              {
                id: 3,
                name: "Caesar Salad",
                sales: 27,
                revenue: 269.73,
                image:
                  "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
              },
            ],
            recentOrders: [
              { id: "ORD-12345", customer: "John Doe", amount: 45.75, status: "delivered", time: "2 hours ago" },
              { id: "ORD-12346", customer: "Jane Smith", amount: 32.5, status: "preparing", time: "30 minutes ago" },
              { id: "ORD-12347", customer: "Robert Johnson", amount: 68.25, status: "pending", time: "5 minutes ago" },
            ],
            monthlySales: [
              { month: "Jan", sales: 2400 },
              { month: "Feb", sales: 1398 },
              { month: "Mar", sales: 9800 },
              { month: "Apr", sales: 3908 },
              { month: "May", sales: 4800 },
              { month: "Jun", sales: 3800 },
              { month: "Jul", sales: 4300 },
            ],
          })
          setIsLoading(false)
          toast.success("Dashboard data loaded successfully")
        }, 1000)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setIsLoading(false)
        toast.error("Failed to load dashboard data")
      }
    }

    fetchDashboardData()
  }, [])

  const cardData = [
    {
      title: "Total Earnings",
      value: `$${dashboardData.totalEarnings.toFixed(2)}`,
      icon: <FaMoneyBillWave />,
      link: "/payments",
      bgColor: "bg-green-100",
      iconBg: "bg-green-500",
    },
    {
      title: "Total Orders",
      value: dashboardData.totalOrders,
      icon: <FaShoppingBag />,
      link: "/orders",
      bgColor: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      title: "Menu Items",
      value: dashboardData.totalFoods,
      icon: <FaUtensils />,
      link: "/foods",
      bgColor: "bg-amber-100",
      iconBg: "bg-amber-500",
    },
    {
      title: "Average Rating",
      value: dashboardData.averageRating,
      icon: <FaStar />,
      link: "/reviews",
      bgColor: "bg-purple-100",
      iconBg: "bg-purple-500",
    },
  ]

  const cardData2 = [
    {
      title: "Pending Payout",
      value: `$${dashboardData.pendingPayout.toFixed(2)}`,
      icon: <FaMoneyBillWave />,
      link: "/payouts",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-500",
    },
    {
      title: "Wallet Balance",
      value: `$${dashboardData.walletBalance.toFixed(2)}`,
      icon: <FaMoneyBillWave />,
      link: "/wallet",
      bgColor: "bg-indigo-100",
      iconBg: "bg-indigo-500",
    },
  ]

  const orderStatusCards = [
    {
      title: "Pending Orders",
      value: dashboardData.orderStatus.pending,
      icon: <MdAccessTimeFilled className="text-yellow-500" />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      link: "/orders?status=pending",
    },
    {
      title: "Preparing",
      value: dashboardData.orderStatus.preparing,
      icon: <MdLocalShipping className="text-blue-500" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      link: "/orders?status=preparing",
    },
    {
      title: "Ready for Pickup",
      value: dashboardData.orderStatus.ready,
      icon: <MdCheckCircle className="text-green-500" />,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      link: "/orders?status=ready",
    },
    {
      title: "Delivered",
      value: dashboardData.orderStatus.delivered,
      icon: <MdDeliveryDining className="text-green-600" />,
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      link: "/orders?status=delivered",
    },
    {
      title: "Cancelled",
      value: dashboardData.orderStatus.cancelled,
      icon: <MdCancel className="text-red-500" />,
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      link: "/orders?status=cancelled",
    },
  ]

  // Skeleton loader for cards
  const CardSkeleton = () => (
    <div className="animate-pulse rounded-lg shadow p-4">
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-1/4 mt-4"></div>
    </div>
  )

  // Skeleton for popular items
  const PopularItemSkeleton = () => (
    <div className="animate-pulse flex items-center p-4 border-b">
      <div className="h-12 w-12 bg-gray-200 rounded-md mr-3"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="h-5 bg-gray-200 rounded w-16"></div>
    </div>
  )

  return (
    <div className="w-full">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Your Restaurant Dashboard</h1>
            <p className="text-gray-600">Here's what's happening with your restaurant today.</p>
          </div>
          <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full">
            <FaUtensils className="text-primary-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => <CardSkeleton key={index} />)
          : cardData.map((card, index) => (
              <Link to={card.link} key={index} className="transform transition-transform hover:scale-105">
                <div className={`${card.bgColor} rounded-lg shadow p-4`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-700 font-medium">{card.title}</h3>
                    <div className={`${card.iconBg} text-white p-2 rounded-full`}>{card.icon}</div>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
                </div>
              </Link>
            ))}
      </div>

      {/* Secondary Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {isLoading
          ? Array(2)
              .fill(0)
              .map((_, index) => <CardSkeleton key={index} />)
          : cardData2.map((card, index) => (
              <Link to={card.link} key={index} className="transform transition-transform hover:scale-105">
                <div className={`${card.bgColor} rounded-lg shadow p-4`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-700 font-medium">{card.title}</h3>
                    <div className={`${card.iconBg} text-white p-2 rounded-full`}>{card.icon}</div>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
                </div>
              </Link>
            ))}
      </div>

      {/* Order Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {isLoading
          ? Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="animate-pulse rounded-lg shadow p-3">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded w-1/4 mt-2 ml-7"></div>
                </div>
              ))
          : orderStatusCards.map((card, index) => (
              <Link to={card.link} key={index} className="transform transition-transform hover:scale-105">
                <div className={`${card.bgColor} rounded-lg shadow p-3 flex items-center`}>
                  <div className="mr-3">{card.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">{card.title}</h3>
                    <p className={`text-lg font-bold ${card.textColor}`}>{card.value}</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
        <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
          <FaChartLine className="mr-2" /> Sales Analytics
        </h2>
        <div className="p-4">
          {isLoading ? (
            <div className="animate-pulse h-64 bg-gray-200 rounded"></div>
          ) : (
            <StatisticGraph data={dashboardData.monthlySales} />
          )}
        </div>
      </div>

      {/* Popular Items & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Popular Items */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
            <FaUtensils className="mr-2" /> Popular Items
          </h2>
          <div className="p-4">
            {isLoading ? (
              <>
                <PopularItemSkeleton />
                <PopularItemSkeleton />
                <PopularItemSkeleton />
              </>
            ) : (
              <>
                {dashboardData.popularItems.map((item) => (
                  <div key={item.id} className="flex items-center p-3 border-b hover:bg-gray-50">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mr-3"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=48&width=48"
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.sales} orders</p>
                    </div>
                    <div className="text-green-600 font-semibold">${item.revenue.toFixed(2)}</div>
                  </div>
                ))}
                <div className="mt-3 text-center">
                  <Link
                    to="/foods"
                    className="text-primary-600 hover:text-primary-800 text-sm font-medium hover:underline"
                  >
                    View all menu items
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
            <FaShoppingBag className="mr-2" /> Recent Orders
          </h2>
          <div className="p-4">
            {isLoading ? (
              <>
                <PopularItemSkeleton />
                <PopularItemSkeleton />
                <PopularItemSkeleton />
              </>
            ) : (
              <>
                {dashboardData.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center p-3 border-b hover:bg-gray-50">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{order.id}</h3>
                      <p className="text-sm text-gray-500">
                        {order.customer} • {order.time}
                      </p>
                    </div>
                    <div className="mr-4 font-semibold text-green-600">${order.amount.toFixed(2)}</div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "preparing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                ))}
                <div className="mt-3 text-center">
                  <Link
                    to="/orders"
                    className="text-primary-600 hover:text-primary-800 text-sm font-medium hover:underline"
                  >
                    View all orders
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
          <FaUtensils className="mr-2" /> Quick Actions
        </h2>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/food/create"
            className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
              <FaUtensils className="text-green-600 text-xl" />
            </div>
            <h3 className="font-medium text-gray-800">Add New Item</h3>
          </Link>

          <Link
            to="/orders?status=pending"
            className="bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="bg-yellow-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
              <MdAccessTimeFilled className="text-yellow-600 text-xl" />
            </div>
            <h3 className="font-medium text-gray-800">Pending Orders</h3>
          </Link>

          <Link
            to="/coupons/create"
            className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg text-center transition-colors"
          >
            <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
              <FaPercent className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-medium text-gray-800">Create Coupon</h3>
          </Link>

          <Link to="/payouts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors">
            <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
              <FaMoneyBillWave className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-medium text-gray-800">Request Payout</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
