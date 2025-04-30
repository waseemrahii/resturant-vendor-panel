// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";

// const predefinedRanges = [
//   { label: "Today", range: [new Date(), new Date()] },
//   {
//     label: "Yesterday",
//     range: [
//       new Date(new Date().setDate(new Date().getDate() - 1)),
//       new Date(new Date().setDate(new Date().getDate() - 1)),
//     ],
//   },
//   {
//     label: "Last 7 Days",
//     range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
//   },
//   {
//     label: "Last 30 Days",
//     range: [
//       new Date(new Date().setDate(new Date().getDate() - 30)),
//       new Date(),
//     ],
//   },
//   {
//     label: "This Month",
//     range: [
//       new Date(new Date().getFullYear(), new Date().getMonth(), 1),
//       new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
//     ],
//   },
//   {
//     label: "Last Month",
//     range: [
//       new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
//       new Date(new Date().getFullYear(), new Date().getMonth(), 0),
//     ],
//   },
// ];

// const SalesReport = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [isCustomRange, setIsCustomRange] = useState(false);

//   const handleRangeChange = (range) => {
//     setStartDate(range[0]);
//     setEndDate(range[1]);
//     setIsCustomRange(false);
//   };

//   return (
//     <div className="p-4  bg-white shadow-md hover:shadow-lg rounded  mx-2  flex flex-col justify-center items-center">
//       <fieldset className="border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-4 py-5">
//         <legend className="text-md font-semibold  bg-primary-900 text-white px-2 py-1 rounded">
//           Sales Report
//         </legend>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-[1rem] font-semibold mb-2">
//               Select Restaurant
//             </label>
//             <select className="block w-full p-2 border bg-[#F5F5F5] border-gray-300 rounded">
//               <option>All</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-[1rem] font-semibold mb-2">
//               Select Driver
//             </label>
//             <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
//               <option>All</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-[1rem] font-semibold  mb-2">
//               Select User
//             </label>
//             <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
//               <option>All</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-[1rem] font-semibold  mb-2">
//               Select Category
//             </label>
//             <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
//               <option>All</option>
//             </select>
//           </div>
//         </div>

//         <div className="relative mt-4">
//           <label className="block text-[1rem] font-semibold  mb-2">
//             {" "}
//             Select Date
//           </label>

//           <button
//             className="flex justify-center items-center gap-3 text-gray-600 w-full p-2 border border-gray-300 rounded bg-white"
//             onClick={() => setIsCustomRange(!isCustomRange)}
//           >
//             {" "}
//             <FaCalendarAlt />
//             {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
//           </button>
//           {isCustomRange && (
//             <div className="absolute z-10 bg-white border border-gray-300 rounded mt-2 ">
//               {predefinedRanges.map((range, index) => (
//                 <button
//                   key={index}
//                   className="block w-full text-left p-2 hover:bg-blue-500"
//                   onClick={() => handleRangeChange(range.range)}
//                 >
//                   {range.label}
//                 </button>
//               ))}
//               <div className="p-2">
//                 <label className="block text-[1rem] font-semibold  mb-2">
//                   Custom Range
//                 </label>
//                 <div className="flex space-x-2">
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     className="block w-full p-2 border border-gray-300 rounded"
//                   />
//                   {/* <span className="self-center">to</span>
//                   <DatePicker
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     className="block w-full p-2 border border-gray-300 rounded"
//                   /> */}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-4">
//           <label className="block text-[1rem] font-semibold  mb-2">
//             File Format
//           </label>
//           <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
//             <option>File Format</option>
//           </select>
//         </div>
//       </fieldset>
//       <button className=" flex items-center gap-2 bg-primary-900 text-white px-4 py-2 rounded mt-4">
//         <FaFileAlt /> Download
//       </button>
//     </div>
//   );
// };

// export default SalesReport;

"use client"

import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt, FaDownload, FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa"
import { MdRestaurant, MdDeliveryDining, MdPerson } from "react-icons/md"
import { BiCategory } from "react-icons/bi"
import { format } from "date-fns"

// Import chart components
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const predefinedRanges = [
  { label: "Today", range: [new Date(), new Date()] },
  {
    label: "Yesterday",
    range: [
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() - 1)),
    ],
  },
  {
    label: "Last 7 Days",
    range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
  },
  {
    label: "Last 30 Days",
    range: [new Date(new Date().setDate(new Date().getDate() - 30)), new Date()],
  },
  {
    label: "This Month",
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    ],
  },
  {
    label: "Last Month",
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0),
    ],
  },
]

// Sample data for charts
const generateSampleData = () => {
  // Daily sales data
  const dailySales = Array.from({ length: 30 }, (_, i) => ({
    date: format(new Date(new Date().setDate(new Date().getDate() - 29 + i)), "MMM dd"),
    sales: Math.floor(Math.random() * 5000) + 1000,
    orders: Math.floor(Math.random() * 50) + 10,
  }))

  // Category distribution
  const categoryData = [
    { name: "Fast Food", value: 35 },
    { name: "Desserts", value: 20 },
    { name: "Beverages", value: 15 },
    { name: "Pakistani", value: 25 },
    { name: "Chinese", value: 5 },
  ]

  // Restaurant performance
  const restaurantData = [
    { name: "Karachi Biryani", sales: 4500, orders: 120 },
    { name: "Lahore Kebab", sales: 3800, orders: 95 },
    { name: "Islamabad Cafe", sales: 3200, orders: 85 },
    { name: "Peshawar Chapli", sales: 2900, orders: 70 },
    { name: "Quetta Restaurant", sales: 2500, orders: 65 },
  ]

  return { dailySales, categoryData, restaurantData }
}

const SalesReport = () => {
  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 30)))
  const [endDate, setEndDate] = useState(new Date())
  const [isCustomRange, setIsCustomRange] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [chartData, setChartData] = useState(generateSampleData())
  const [isLoading, setIsLoading] = useState(true)
  const [selectedRestaurant, setSelectedRestaurant] = useState("all")
  const [selectedDriver, setSelectedDriver] = useState("all")
  const [selectedUser, setSelectedUser] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [fileFormat, setFileFormat] = useState("pdf")

  // Colors for charts
  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true)
    const timer = setTimeout(() => {
      setChartData(generateSampleData())
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [startDate, endDate, selectedRestaurant, selectedDriver, selectedCategory])

  const handleRangeChange = (range) => {
    setStartDate(range[0])
    setEndDate(range[1])
    setIsCustomRange(false)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 text-white">
        <h2 className="text-xl font-bold flex items-center">
          <FaChartBar className="mr-2" /> Sales Report Dashboard
        </h2>
        <p className="text-sm opacity-80">Analyze your business performance and generate detailed reports</p>
      </div>

      {/* Filters Section */}
      <div className="p-4 bg-gray-50 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <MdRestaurant className="mr-1" /> Restaurant
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={selectedRestaurant}
              onChange={(e) => setSelectedRestaurant(e.target.value)}
            >
              <option value="all">All Restaurants</option>
              <option value="karachi-biryani">Karachi Biryani</option>
              <option value="lahore-kebab">Lahore Kebab</option>
              <option value="islamabad-cafe">Islamabad Cafe</option>
              <option value="peshawar-chapli">Peshawar Chapli</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <MdDeliveryDining className="mr-1" /> Driver
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
            >
              <option value="all">All Drivers</option>
              <option value="driver-1">Ahmed Khan</option>
              <option value="driver-2">Bilal Ahmed</option>
              <option value="driver-3">Farhan Ali</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <MdPerson className="mr-1" /> Customer
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="all">All Customers</option>
              <option value="user-1">Regular Customers</option>
              <option value="user-2">New Customers</option>
              <option value="user-3">Premium Customers</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 flex items-center">
              <BiCategory className="mr-1" /> Category
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="fast-food">Fast Food</option>
              <option value="desserts">Desserts</option>
              <option value="beverages">Beverages</option>
              <option value="pakistani">Pakistani</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
        </div>

        {/* Date Range Picker */}
        <div className="mt-4 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <FaCalendarAlt className="mr-1" /> Date Range
          </label>
          <button
            className="flex justify-between items-center w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onClick={() => setIsCustomRange(!isCustomRange)}
          >
            <span className="flex items-center">
              <FaCalendarAlt className="mr-2 text-teal-600" />
              {format(startDate, "MMM dd, yyyy")} - {format(endDate, "MMM dd, yyyy")}
            </span>
            <span className="text-gray-400">{isCustomRange ? "▲" : "▼"}</span>
          </button>

          {isCustomRange && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="p-2 border-b">
                <h3 className="font-medium text-gray-700">Select Range</h3>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {predefinedRanges.map((range, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 hover:bg-teal-50 transition-colors"
                    onClick={() => handleRangeChange(range.range)}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              <div className="p-3 border-t bg-gray-50">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                </div>
                <button
                  className="mt-2 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                  onClick={() => setIsCustomRange(false)}
                >
                  Apply Range
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Export Options */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">Export Format</label>
            <select
              className="block w-full sm:w-auto p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white"
              value={fileFormat}
              onChange={(e) => setFileFormat(e.target.value)}
            >
              <option value="pdf">PDF Document</option>
              <option value="excel">Excel Spreadsheet</option>
              <option value="csv">CSV File</option>
            </select>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors">
            <FaDownload /> Download Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "overview"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("overview")}
          >
            <div className="flex items-center">
              <FaChartBar className="mr-2" /> Overview
            </div>
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "sales"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("sales")}
          >
            <div className="flex items-center">
              <FaChartLine className="mr-2" /> Sales Trends
            </div>
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "categories"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("categories")}
          >
            <div className="flex items-center">
              <FaChartPie className="mr-2" /> Categories
            </div>
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "restaurants"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("restaurants")}
          >
            <div className="flex items-center">
              <MdRestaurant className="mr-2" /> Restaurants
            </div>
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : (
          <>
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow p-4 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">Total Sales</p>
                        <h3 className="text-2xl font-bold">PKR 125,430</h3>
                        <p className="text-xs mt-1 flex items-center">
                          <span className="inline-block mr-1">↑</span> 12.5% from previous period
                        </p>
                      </div>
                      <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                        <FaChartLine className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-4 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">Total Orders</p>
                        <h3 className="text-2xl font-bold">1,254</h3>
                        <p className="text-xs mt-1 flex items-center">
                          <span className="inline-block mr-1">↑</span> 8.3% from previous period
                        </p>
                      </div>
                      <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                        <FaChartBar className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow p-4 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">Average Order</p>
                        <h3 className="text-2xl font-bold">PKR 850</h3>
                        <p className="text-xs mt-1 flex items-center">
                          <span className="inline-block mr-1">↑</span> 3.2% from previous period
                        </p>
                      </div>
                      <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                        <FaChartPie className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow p-4 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">New Customers</p>
                        <h3 className="text-2xl font-bold">324</h3>
                        <p className="text-xs mt-1 flex items-center">
                          <span className="inline-block mr-1">↑</span> 15.7% from previous period
                        </p>
                      </div>
                      <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                        <MdPerson className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Sales Trend</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData.dailySales.slice(-14)}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="sales"
                            name="Sales (PKR)"
                            stroke="#4ECDC4"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                            activeDot={{ r: 5 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Category Distribution</h3>
                    <div className="h-64 flex justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={chartData.categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {chartData.categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Top Restaurants */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-4 py-3 border-b">
                    <h3 className="text-lg font-medium text-gray-800">Top Performing Restaurants</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Restaurant
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Orders
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Sales
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Avg. Order Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {chartData.restaurantData.map((restaurant, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                                  <MdRestaurant className="h-5 w-5 text-teal-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{restaurant.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{restaurant.orders}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">PKR {restaurant.sales.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                PKR {Math.round(restaurant.sales / restaurant.orders).toLocaleString()}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Sales Trends Tab */}
            {activeTab === "sales" && (
              <div>
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Daily Sales Trend</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData.dailySales}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="sales"
                          name="Sales (PKR)"
                          stroke="#4ECDC4"
                          strokeWidth={2}
                          dot={{ r: 2 }}
                          activeDot={{ r: 5 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="orders"
                          name="Orders"
                          stroke="#FF6B6B"
                          strokeWidth={2}
                          dot={{ r: 2 }}
                          activeDot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Order Volume by Hour</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { hour: "6 AM", orders: 5 },
                            { hour: "8 AM", orders: 12 },
                            { hour: "10 AM", orders: 18 },
                            { hour: "12 PM", orders: 45 },
                            { hour: "2 PM", orders: 32 },
                            { hour: "4 PM", orders: 25 },
                            { hour: "6 PM", orders: 55 },
                            { hour: "8 PM", orders: 70 },
                            { hour: "10 PM", orders: 40 },
                            { hour: "12 AM", orders: 15 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="orders" name="Orders" fill="#45B7D1" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Weekly Comparison</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { day: "Mon", thisWeek: 4200, lastWeek: 3800 },
                            { day: "Tue", thisWeek: 3800, lastWeek: 4100 },
                            { day: "Wed", thisWeek: 4100, lastWeek: 3700 },
                            { day: "Thu", thisWeek: 4500, lastWeek: 4200 },
                            { day: "Fri", thisWeek: 5200, lastWeek: 4800 },
                            { day: "Sat", thisWeek: 5800, lastWeek: 5500 },
                            { day: "Sun", thisWeek: 4900, lastWeek: 4600 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="thisWeek" name="This Week" fill="#4ECDC4" />
                          <Bar dataKey="lastWeek" name="Last Week" fill="#FF6B6B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === "categories" && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Category Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={chartData.categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {chartData.categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Category Sales</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: "Fast Food", sales: 35000 },
                            { name: "Desserts", sales: 20000 },
                            { name: "Beverages", sales: 15000 },
                            { name: "Pakistani", sales: 25000 },
                            { name: "Chinese", sales: 5000 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="sales" name="Sales (PKR)" fill="#FF6B6B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-4 py-3 border-b">
                    <h3 className="text-lg font-medium text-gray-800">Category Performance</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Orders
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Sales
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Growth
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { name: "Fast Food", orders: 1250, sales: 35000, growth: 12.5 },
                          { name: "Desserts", orders: 850, sales: 20000, growth: 8.3 },
                          { name: "Beverages", orders: 620, sales: 15000, growth: 5.2 },
                          { name: "Pakistani", orders: 980, sales: 25000, growth: 15.7 },
                          { name: "Chinese", orders: 210, sales: 5000, growth: -2.1 },
                        ].map((category, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{category.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{category.orders}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">PKR {category.sales.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div
                                className={`text-sm ${
                                  category.growth >= 0 ? "text-green-600" : "text-red-600"
                                } font-medium`}
                              >
                                {category.growth >= 0 ? "+" : ""}
                                {category.growth}%
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Restaurants Tab */}
            {activeTab === "restaurants" && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Top Restaurants by Sales</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={chartData.restaurantData.sort((a, b) => b.sales - a.sales)}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis type="number" tick={{ fontSize: 12 }} />
                          <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={100} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="sales" name="Sales (PKR)" fill="#4ECDC4" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Top Restaurants by Orders</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={chartData.restaurantData.sort((a, b) => b.orders - a.orders)}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis type="number" tick={{ fontSize: 12 }} />
                          <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={100} />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="orders" name="Orders" fill="#FF6B6B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-4 py-3 border-b">
                    <h3 className="text-lg font-medium text-gray-800">Restaurant Performance</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Restaurant
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Orders
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Sales
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Avg. Order
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Growth
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {chartData.restaurantData.map((restaurant, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                                  <MdRestaurant className="h-5 w-5 text-teal-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{restaurant.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{restaurant.orders}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">PKR {restaurant.sales.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                PKR {Math.round(restaurant.sales / restaurant.orders).toLocaleString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-green-600 font-medium">
                                +{Math.floor(Math.random() * 15) + 1}%
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default SalesReport
