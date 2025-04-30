"use client"

// import { Bar, Doughnut } from "react-chartjs-2"
// import "chart.js/auto"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import PropTypes from "prop-types"

const StatisticGraph = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`$${value}`, "Revenue"]}
            labelFormatter={(label) => `Month: ${label}`}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "10px",
            }}
          />
          <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

StatisticGraph.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
}

StatisticGraph.defaultProps = {
  isLoading: false,
}

export default StatisticGraph

// const StatisticGraph = () => {
//   const totalSalesData = {
//     labels: ["JAN", "MAR", "MAY", "JUL", "SEP", "DEC"],
//     datasets: [
//       {
//         label: "This year",
//         data: [0, 0, 0, 1000, 0, 0],
//         backgroundColor: "#00D885",
//       },
//     ],
//   }

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         min: 0,
//         max: 1500,
//         ticks: {
//           stepSize: 500,
//           callback: (value) => `$${value.toLocaleString()}.00`,
//         },
//       },
//     },
//     plugins: {
//       datalabels: {
//         formatter: (value) => `$${value.toLocaleString()}.00`,
//       },
//     },
//   }

//   const serviceOverviewData = {
//     labels: ["Total Restaurants", "Total Orders", "Total Foods", "Total Clients", "Total Drivers"],
//     datasets: [
//       {
//         data: [10, 30, 50, 70, 20],
//         backgroundColor: ["#3b82f6", "#22c55e", "#6366f1", "#f59e0b", "#ef4444"],
//       },
//     ],
//   }

//   const salesOverviewData = {
//     labels: ["Admin Commission", "Total Earnings"],
//     datasets: [
//       {
//         data: [15, 85],
//         backgroundColor: ["#a78bfa", "#f59e0b"],
//       },
//     ],
//   }

//   return (
//     <div className="mb-4 ">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
//         <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
//           <h2 className="text-xl bg-primary-500 text-white font-semibold p-4 rounded-t-lg border-t">Total Sales</h2>
//           <div className="px-4 h-64 w-full">
//             <Bar data={totalSalesData} options={options} />
//             <div>
//               <h1 className="float-end pt-3 text-primary-500">
//                 <span className="bg-primary-500 rounded-md me-1 px-2"></span> This Year
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
//           <h2 className="text-xl bg-primary-500 text-white font-semibold p-4 rounded-t-lg border-t">
//             Service Overview
//           </h2>
//           <div className="h-64 w-full flex items-center justify-center mb-5">
//             <Doughnut data={serviceOverviewData} />
//           </div>
//         </div>
//         <div className="bg-primary-10 shadow-sm shadow-primary-300 rounded-lg">
//           <h2 className="text-xl bg-primary-500 text-white font-semibold p-4 rounded-t-lg border-t">Sales Overview</h2>
//           <div className="h-64 w-full flex items-center justify-center">
//             <Doughnut data={salesOverviewData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StatisticGraph

// import { useState, useEffect } from "react"
// import { Bar, Doughnut } from "react-chartjs-2"
// import "chart.js/auto"

// const StatisticGraph = ({ isLoading }) => {
//   const [chartData, setChartData] = useState({
//     monthlySales: [],
//     serviceOverview: {},
//     salesOverview: {},
//   })

//   useEffect(() => {
//     // Simulate API call to fetch chart data
//     const fetchChartData = async () => {
//       try {
//         // In a real app, this would be an API call
//         setTimeout(() => {
//           setChartData({
//             monthlySales: [0, 0, 0, 0, 400, 0, 0, 0, 0, 0, 0, 1000],
//             serviceOverview: {
//               restaurants: 20,
//               orders: 37,
//               foods: 159,
//               clients: 47,
//               drivers: 36,
//             },
//             salesOverview: {
//               adminCommission: 15,
//               totalEarnings: 85,
//             },
//           })
//         }, 1500)
//       } catch (error) {
//         console.error("Error fetching chart data:", error)
//       }
//     }

//     fetchChartData()
//   }, [])

//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const totalSalesData = {
//     labels: months,
//     datasets: [
//       {
//         label: "Monthly Sales",
//         data: chartData.monthlySales,
//         backgroundColor: "#22c55e",
//         borderColor: "#16a34a",
//         borderWidth: 1,
//         borderRadius: 4,
//         barThickness: 16,
//       },
//     ],
//   }

//   const totalSalesOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `$${context.raw.toLocaleString()}`,
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: (value) => `$${value}`,
//         },
//         grid: {
//           display: true,
//           drawBorder: false,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },
//       },
//     },
//   }

//   const serviceOverviewData = {
//     labels: ["Restaurants", "Orders", "Foods", "Clients", "Drivers"],
//     datasets: [
//       {
//         data: [
//           chartData.serviceOverview.restaurants,
//           chartData.serviceOverview.orders,
//           chartData.serviceOverview.foods,
//           chartData.serviceOverview.clients,
//           chartData.serviceOverview.drivers,
//         ],
//         backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"],
//         borderWidth: 0,
//         hoverOffset: 4,
//       },
//     ],
//   }

//   const serviceOverviewOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     cutout: "65%",
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           boxWidth: 12,
//           padding: 15,
//         },
//       },
//     },
//   }

//   const salesOverviewData = {
//     labels: ["Admin Commission", "Restaurant Earnings"],
//     datasets: [
//       {
//         data: [chartData.salesOverview.adminCommission, chartData.salesOverview.totalEarnings],
//         backgroundColor: ["#8b5cf6", "#f59e0b"],
//         borderWidth: 0,
//         hoverOffset: 4,
//       },
//     ],
//   }

//   const salesOverviewOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     cutout: "65%",
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           boxWidth: 12,
//           padding: 15,
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ${context.raw}%`,
//         },
//       },
//     },
//   }

//   // Skeleton loader for charts
//   const ChartSkeleton = () => (
//     <div className="animate-pulse">
//       <div className="h-64 bg-gray-200 rounded"></div>
//     </div>
//   )

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//       {/* Total Sales Chart */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
//           {/* <FaChartBar className="mr-2" />  */}
//           Total Sales
//         </h2>
//         <div className="p-4 h-64">
//           {isLoading ? <ChartSkeleton /> : <Bar data={totalSalesData} options={totalSalesOptions} />}
//         </div>
//       </div>

//       {/* Service Overview Chart */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
//           {/* <FaChartPie className="mr-2" />  */}
//           Service Overview
//         </h2>
//         <div className="p-4 h-64">
//           {isLoading ? <ChartSkeleton /> : <Doughnut data={serviceOverviewData} options={serviceOverviewOptions} />}
//         </div>
//       </div>

//       {/* Sales Overview Chart */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <h2 className="text-lg font-semibold text-white p-4 bg-primary-500 border-b border-primary-600 flex items-center">
//           {/* <FaPieChart className="mr-2" /> */}
//            Revenue Distribution
//         </h2>
//         <div className="p-4 h-64">
//           {isLoading ? <ChartSkeleton /> : <Doughnut data={salesOverviewData} options={salesOverviewOptions} />}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StatisticGraph
