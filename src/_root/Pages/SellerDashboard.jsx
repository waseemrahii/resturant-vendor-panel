// "use client"

// import { useState, useEffect } from "react"
// import { FaUtensils, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa"
// import CardBox from "../../component/Dashboard/DashboardCards/CardBox"
// import RecentOrder from "../../component/Dashboard/RecentOrder"
// import StatisticGraph from "../../component/Dashboard/DashboardCards/StatisticGraph"
// import TopOrderCard from "../../component/Dashboard/TopOrderCard"

// const SellerDashboard = () => {
//   const [loading, setLoading] = useState(true)
//   const [dashboardData, setDashboardData] = useState({
//     totalSales: 0,
//     totalOrders: 0,
//     pendingOrders: 0,
//     totalMenuItems: 0,
//     recentOrders: [],
//     topSellingItems: [],
//     monthlySales: [],
//   })

//   useEffect(() => {
//     // Simulate API call to fetch dashboard data
//     setTimeout(() => {
//       setDashboardData({
//         totalSales: 12580,
//         totalOrders: 156,
//         pendingOrders: 8,
//         totalMenuItems: 42,
//         recentOrders: [
//           { id: "ORD-001", customer: "John Doe", total: 45.99, status: "Delivered", date: "2023-06-15" },
//           { id: "ORD-002", customer: "Jane Smith", total: 32.5, status: "Processing", date: "2023-06-15" },
//           { id: "ORD-003", customer: "Mike Johnson", total: 78.25, status: "Pending", date: "2023-06-14" },
//           { id: "ORD-004", customer: "Sarah Williams", total: 25.99, status: "Delivered", date: "2023-06-14" },
//           { id: "ORD-005", customer: "David Brown", total: 56.75, status: "Delivered", date: "2023-06-13" },
//         ],
//         topSellingItems: [
//           { name: "Chicken Burger", orders: 45, revenue: 1350 },
//           { name: "Veggie Pizza", orders: 38, revenue: 1140 },
//           { name: "Beef Tacos", orders: 32, revenue: 960 },
//           { name: "Caesar Salad", orders: 28, revenue: 840 },
//         ],
//         monthlySales: [
//           { month: "Jan", sales: 4500 },
//           { month: "Feb", sales: 5200 },
//           { month: "Mar", sales: 4800 },
//           { month: "Apr", sales: 5800 },
//           { month: "May", sales: 6500 },
//           { month: "Jun", sales: 7200 },
//         ],
//       })
//       setLoading(false)
//     }, 1000)
//   }, [])

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <h1 className="text-2xl font-bold mb-6">Restaurant Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <CardBox
//           title="Total Sales"
//           value={`$${dashboardData.totalSales.toLocaleString()}`}
//           icon={<FaMoneyBillWave className="text-green-500" />}
//           bgColor="bg-green-100"
//         />
//         <CardBox
//           title="Total Orders"
//           value={dashboardData.totalOrders}
//           icon={<FaShoppingCart className="text-blue-500" />}
//           bgColor="bg-blue-100"
//         />
//         <CardBox
//           title="Pending Orders"
//           value={dashboardData.pendingOrders}
//           icon={<FaShoppingCart className="text-yellow-500" />}
//           bgColor="bg-yellow-100"
//         />
//         <CardBox
//           title="Menu Items"
//           value={dashboardData.totalMenuItems}
//           icon={<FaUtensils className="text-purple-500" />}
//           bgColor="bg-purple-100"
//         />
//       </div>

//       {/* Charts and Tables */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
//           <StatisticGraph data={dashboardData.monthlySales} />
//         </div>
//         <div className="bg-white rounded-lg shadow p-4">
//           <h2 className="text-lg font-semibold mb-4">Top Selling Items</h2>
//           <TopOrderCard topItems={dashboardData.topSellingItems} />
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
//         <RecentOrder orders={dashboardData.recentOrders} />
//       </div>
//     </div>
//   )
// }

// export default SellerDashboard


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FaUtensils,
  FaShoppingCart,
  FaStar,
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaEllipsisV,
  FaExternalLinkAlt,
} from "react-icons/fa"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

const SellerDashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)
  const [timeRange, setTimeRange] = useState("week")
  const [orderStatusFilter, setOrderStatusFilter] = useState("all")

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    setTimeout(() => {
      const mockData = {
        restaurantName: "Tasty Bites Restaurant",
        summary: {
          totalOrders: 128,
          totalSales: 3245.75,
          averageRating: 4.7,
          pendingOrders: 5,
        },
        trends: {
          ordersChange: 12.5,
          salesChange: 8.3,
          ratingChange: 0.2,
        },
        recentOrders: [
          {
            id: "ORD-1234",
            customer: "John Doe",
            total: 42.5,
            status: "Preparing",
            time: "10 minutes ago",
            items: 3,
          },
          {
            id: "ORD-1233",
            customer: "Sarah Smith",
            total: 28.75,
            status: "Ready for Pickup",
            time: "25 minutes ago",
            items: 2,
          },
          {
            id: "ORD-1232",
            customer: "Mike Johnson",
            total: 35.2,
            status: "Delivered",
            time: "1 hour ago",
            items: 4,
          },
          {
            id: "ORD-1231",
            customer: "Emily Wilson",
            total: 19.99,
            status: "Delivered",
            time: "2 hours ago",
            items: 1,
          },
          {
            id: "ORD-1230",
            customer: "Robert Brown",
            total: 52.3,
            status: "Delivered",
            time: "3 hours ago",
            items: 5,
          },
        ],
        topItems: [
          { name: "Classic Burger", sold: 42, revenue: 377.58 },
          { name: "Chicken Wings", sold: 38, revenue: 341.62 },
          { name: "Caesar Salad", sold: 27, revenue: 242.73 },
          { name: "Chocolate Milkshake", sold: 25, revenue: 124.75 },
          { name: "French Fries", sold: 56, revenue: 223.44 },
        ],
        salesData: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Sales ($)",
              data: [420, 380, 450, 520, 490, 680, 720],
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              tension: 0.3,
            },
          ],
        },
        ordersData: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Orders",
              data: [15, 12, 18, 22, 19, 28, 25],
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              borderWidth: 1,
            },
          ],
        },
      }

      setDashboardData(mockData)
      setIsLoading(false)
    }, 1000)
  }, [timeRange])

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Confirmed":
        return "bg-blue-100 text-blue-800"
      case "Preparing":
        return "bg-orange-100 text-orange-800"
      case "Ready for Pickup":
        return "bg-purple-100 text-purple-800"
      case "Out for Delivery":
        return "bg-indigo-100 text-indigo-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredOrders =
    dashboardData?.recentOrders.filter((order) => {
      if (orderStatusFilter === "all") return true
      return order.status.toLowerCase() === orderStatusFilter.toLowerCase()
    }) || []

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back to {dashboardData.restaurantName}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{dashboardData.summary.totalOrders}</h3>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <FaShoppingCart className="h-6 w-6 text-orange-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {dashboardData.trends.ordersChange > 0 ? (
              <FaArrowUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <FaArrowDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${dashboardData.trends.ordersChange > 0 ? "text-green-500" : "text-red-500"}`}>
              {Math.abs(dashboardData.trends.ordersChange)}% from last {timeRange}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sales</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">${dashboardData.summary.totalSales.toFixed(2)}</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaWallet className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {dashboardData.trends.salesChange > 0 ? (
              <FaArrowUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <FaArrowDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${dashboardData.trends.salesChange > 0 ? "text-green-500" : "text-red-500"}`}>
              {Math.abs(dashboardData.trends.salesChange)}% from last {timeRange}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{dashboardData.summary.averageRating}</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaStar className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {dashboardData.trends.ratingChange > 0 ? (
              <FaArrowUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <FaArrowDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${dashboardData.trends.ratingChange > 0 ? "text-green-500" : "text-red-500"}`}>
              {Math.abs(dashboardData.trends.ratingChange)} points from last {timeRange}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Orders</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{dashboardData.summary.pendingOrders}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUtensils className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <Link
              to="/seller/orders"
              className="text-sm text-orange-500 hover:text-orange-700 font-medium flex items-center"
            >
              View all orders
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h3>
          <div className="h-64">
            <Line
              data={dashboardData.salesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Orders Overview</h3>
          <div className="h-64">
            <Bar
              data={dashboardData.ordersData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
          <div className="flex items-center">
            <select
              value={orderStatusFilter}
              onChange={(e) => setOrderStatusFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 mr-2"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready for pickup">Ready for Pickup</option>
              <option value="out for delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <Link
              to="/seller/orders"
              className="text-sm text-orange-500 hover:text-orange-700 font-medium flex items-center"
            >
              View All
              <FaExternalLinkAlt className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Items
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-600">
                      <Link to={`/seller/orders/${order.id}`} className="hover:underline">
                        {order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items} items</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="relative inline-block text-left">
                        <button className="text-gray-400 hover:text-gray-600">
                          <FaEllipsisV className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found with the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Selling Items */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Top Selling Items</h3>
          <Link
            to="/seller/menu"
            className="text-sm text-orange-500 hover:text-orange-700 font-medium flex items-center"
          >
            View All Menu Items
            <FaExternalLinkAlt className="ml-1 h-3 w-3" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Item Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Units Sold
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Revenue
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dashboardData.topItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <FaUtensils className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sold} units</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${item.revenue.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/seller/menu/edit/${index}`} className="text-orange-600 hover:text-orange-900">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard
