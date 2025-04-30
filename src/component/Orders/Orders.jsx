// "use client"

// import { useState } from "react"
// import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa"
// import TableList from "../common/TableList"
// import ExpandableRowContent from "../common/ExpandableRowContent"
// import ActionButton from "../common/ActionButton"

// const Orders = () => {
//   const initialOrders = [
//     {
//       id: "NmJg1NhfQiZQFUlfKNFg",
//       restaurant: "The Pizza Place",
//       amount: "$283.9",
//       date: "Wed Jun 12 2024 10:58:25 PM",
//       publish: false,
//       description: "Buy 1 Get 1 Free on All Pastries!",
//       client: "Khan",
//       driver: "John Driver",
//       action: "",
//       ordertype: "Order Delivery",
//       orderstatus: "Order Placed",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//     {
//       id: "KlMn2OhgRjZRGVmgLOGh",
//       restaurant: "Burger King",
//       amount: "$145.5",
//       date: "Wed Jun 11 2024 09:45:12 PM",
//       publish: true,
//       description: "Special Combo Deal",
//       client: "Smith",
//       driver: "Mike Driver",
//       action: "",
//       ordertype: "Order Pickup",
//       orderstatus: "Delivered",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//     {
//       id: "PqRs3TijSkZSHWnhMPHi",
//       restaurant: "Sushi Express",
//       amount: "$98.75",
//       date: "Wed Jun 10 2024 08:30:45 PM",
//       publish: false,
//       description: "Fresh Sushi Platter",
//       client: "Johnson",
//       driver: "David Driver",
//       action: "",
//       ordertype: "Order Delivery",
//       orderstatus: "In Transit",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//     {
//       id: "TuVw4XklTlZTIXoiNQIj",
//       restaurant: "Taco Bell",
//       amount: "$56.20",
//       date: "Wed Jun 09 2024 07:15:30 PM",
//       publish: true,
//       description: "Taco Tuesday Special",
//       client: "Williams",
//       driver: "Sarah Driver",
//       action: "",
//       ordertype: "Order Delivery",
//       orderstatus: "Preparing",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//     {
//       id: "YzAb5CmnUmZUJYpjORJk",
//       restaurant: "Pasta Paradise",
//       amount: "$112.40",
//       date: "Wed Jun 08 2024 06:00:15 PM",
//       publish: false,
//       description: "Family Pasta Bundle",
//       client: "Brown",
//       driver: "Alex Driver",
//       action: "",
//       ordertype: "Order Pickup",
//       orderstatus: "Ready for Pickup",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//     {
//       id: "CdEf6GopVnZVKZqkPSKl",
//       restaurant: "Salad Station",
//       amount: "$45.30",
//       date: "Wed Jun 07 2024 04:45:00 PM",
//       publish: true,
//       description: "Healthy Salad Bowl",
//       client: "Davis",
//       driver: "Emma Driver",
//       action: "",
//       ordertype: "Order Delivery",
//       orderstatus: "Order Placed",
//       restaurantImage:
//         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       driverImage:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//       clientImage:
//         "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
//     },
//   ]

//   const [orders, setOrders] = useState(initialOrders)

//   // Define columns for the table
//   const columns = [
//     {
//       key: "id",
//       label: "Order ID",
//       sortable: true,
//       render: (item) => <span className="text-primary-900 font-medium">{item.id}</span>,
//     },
//     {
//       key: "restaurant",
//       label: "Restaurant",
//       sortable: true,
//       render: (item) => (
//         <div className="flex items-center">
//           <img
//             src={item.restaurantImage || "/placeholder.svg"}
//             alt={item.restaurant}
//             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=32&width=32"
//             }}
//           />
//           <span className="font-medium">{item.restaurant}</span>
//         </div>
//       ),
//     },
//     {
//       key: "driver",
//       label: "Driver",
//       sortable: true,
//       render: (item) => (
//         <div className="flex items-center">
//           <img
//             src={item.driverImage || "/placeholder.svg"}
//             alt={item.driver || "Driver"}
//             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=32&width=32"
//             }}
//           />
//           <span>{item.driver || "Not Assigned"}</span>
//         </div>
//       ),
//     },
//     {
//       key: "client",
//       label: "Client",
//       sortable: true,
//       render: (item) => (
//         <div className="flex items-center">
//           <img
//             src={item.clientImage || "/placeholder.svg"}
//             alt={item.client}
//             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=32&width=32"
//             }}
//           />
//           <span>{item.client}</span>
//         </div>
//       ),
//     },
//     {
//       key: "date",
//       label: "Date",
//       sortable: true,
//     },
//     {
//       key: "amount",
//       label: "Amount",
//       sortable: true,
//       render: (item) => <span className="font-semibold text-green-600">{item.amount}</span>,
//     },
//     {
//       key: "orderstatus",
//       label: "Status",
//       sortable: true,
//       render: (item) => {
//         let statusClass = "bg-gray-100 text-gray-800"
//         if (item.orderstatus === "Order Placed") statusClass = "bg-yellow-100 text-yellow-800"
//         if (item.orderstatus === "Preparing") statusClass = "bg-blue-100 text-blue-800"
//         if (item.orderstatus === "In Transit") statusClass = "bg-purple-100 text-purple-800"
//         if (item.orderstatus === "Delivered") statusClass = "bg-green-100 text-green-800"
//         if (item.orderstatus === "Ready for Pickup") statusClass = "bg-indigo-100 text-indigo-800"

//         return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.orderstatus}</span>
//       },
//     },
//   ]

//   // Handle delete order
//   const handleDeleteOrder = (orderId) => {
//     if (window.confirm("Are you sure you want to delete this order?")) {
//       setOrders(orders.filter((order) => order.id !== orderId))
//     }
//   }

//   // Define expandable row content with improved design
//   const expandableRow = (order) => {
//     const leftContent = [
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Order Type",
//         value: order.ordertype,
//         iconBg: "blue-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-green-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Status",
//         value: order.orderstatus,
//         iconBg: "green-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-purple-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Description",
//         value: order.description,
//         iconBg: "purple-100",
//       },
//     ]

//     const rightContent = [
//       {
//         label: "Subtotal",
//         value: order.amount,
//       },
//       {
//         label: "Delivery Fee",
//         value: "$5.00",
//       },
//       {
//         label: "Tax",
//         value: "$3.50",
//       },
//       {
//         label: "Total",
//         value: order.amount,
//         valueClass: "text-green-600 font-bold",
//       },
//     ]

//     const actionButtons = (
//       <>
//         {/* <ActionButton
//           icon={<FaPrint />}
//           title="Print Order"
//           variant="primary"
//           className= "p-1.5 bg-blue-50 text-primary-600 rounded-full hover:bg-blue-100"
//           to={`/print-order`}
//           showLabel={true}
//           label="Print"
//         /> */}
//         <ActionButton
//           icon={<FaEdit />}
//           title="Edit Order"
//           className="p-1.5 bg-green-50 text-primary-600 rounded-full hover:bg-blue-100"
//           variant="success"
//           to={`/edit-order`}
//           showLabel={true}
//           label="Edit"
//         />
//         {/* <ActionButton
//           icon={<FaTrashAlt />}
//           title="Delete Order"
//           variant="danger"
//           onClick={() => handleDeleteOrder(order.id)}
//           showLabel={true}
//           label="Delete"
//         /> */}
//       </>
//     )

//     return (
//       <ExpandableRowContent
//         leftTitle="Order Details"
//         rightTitle="Payment Information"
//         leftContent={leftContent}
//         rightContent={rightContent}
//         actionButtons={actionButtons}
//         leftTitleColor="primary-900"
//         rightTitleColor="green-500"
//         variant="card"
//       />
//     )
//   }

//   // Define filter options
//   const filterOptions = [
//     {
//       label: "Placed",
//       value: "Order Placed",
//       activeClassName: "bg-yellow-500 text-white",
//     },
//     {
//       label: "Preparing",
//       value: "Preparing",
//       activeClassName: "bg-blue-500 text-white",
//     },
//     {
//       label: "In Transit",
//       value: "In Transit",
//       activeClassName: "bg-purple-500 text-white",
//     },
//     {
//       label: "Delivered",
//       value: "Delivered",
//       activeClassName: "bg-green-500 text-white",
//     },
//     {
//       label: "Ready for Pickup",
//       value: "Ready for Pickup",
//       activeClassName: "bg-indigo-500 text-white",
//     },
//   ]

//   return (
//     <div className="mx-5 my-3">
//       <TableList
//         data={orders}
//         columns={columns}
//         title="Orders Management"
//         description="View and manage all customer orders"
//         searchPlaceholder="Search orders by ID, restaurant, client..."
//         showSearch={true}
//         showFilter={true}
//         filterOptions={filterOptions}
//         expandableRow={expandableRow}
//         actionButtons={[
//           {
//             icon: <FaEye className="w-4 h-4" />,
//             title: "View Order",
//             className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
//             onClick: (order) => {
//               window.location.href = `/orders/${order.id}`
//             },
//           },
//           {
//             icon: <FaEdit className="w-4 h-4" />,
//             title: "Edit Order",
//             className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
//             onClick: (order) => {
//               window.location.href = `/edit-order`
//             },
//           },
//           // {
//           //   icon: <FaPrint className="w-4 h-4" />,
//           //   title: "Print Order",
//           //   className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
//           //   onClick: (order) => {
//           //     window.location.href = `/print-order`
//           //   },
//           // },
//           {
//             icon: <FaTrashAlt className="w-4 h-4" />,
//             title: "Delete Order",
//             className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
//             onClick: (order) => handleDeleteOrder(order.id),
//           },
//         ]}
//         bulkActions={[
//           {
//             key: "delete",
//             label: "Delete Selected",
//             icon: <FaTrashAlt />,
//             onClick: (selectedItems) => {
//               if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
//                 setOrders(orders.filter((order) => !selectedItems.has(order.id)))
//               }
//             },
//             clearSelectionAfter: true,
//           },
//         ]}
//         emptyStateMessage="No orders found"
//         routePrefix="/orders"
//       />
//     </div>
//   )
// }

// export default Orders





import { useState } from "react"
import { FaTrashAlt, FaPrint, FaEye, FaEdit } from "react-icons/fa"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import ActionButton from "../common/ActionButton"

const Orders = () => {
  const initialOrders = [
    {
      id: "NmJg1NhfQiZQFUlfKNFg",
      restaurant: "The Pizza Place",
      amount: "$283.9",
      date: "Wed Jun 12 2024 10:58:25 PM",
      publish: false,
      description: "Buy 1 Get 1 Free on All Pastries!",
      client: "Khan",
      driver: "John Driver",
      action: "",
      ordertype: "Order Delivery",
      orderstatus: "Order Placed",
      restaurantImage:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "KlMn2OhgRjZRGVmgLOGh",
      restaurant: "Burger King",
      amount: "$145.5",
      date: "Wed Jun 11 2024 09:45:12 PM",
      publish: true,
      description: "Special Combo Deal",
      client: "Smith",
      driver: "Mike Driver",
      action: "",
      ordertype: "Order Pickup",
      orderstatus: "Delivered",
      restaurantImage:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "PqRs3TijSkZSHWnhMPHi",
      restaurant: "Sushi Express",
      amount: "$98.75",
      date: "Wed Jun 10 2024 08:30:45 PM",
      publish: false,
      description: "Fresh Sushi Platter",
      client: "Johnson",
      driver: "David Driver",
      action: "",
      ordertype: "Order Delivery",
      orderstatus: "In Transit",
      restaurantImage:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "TuVw4XklTlZTIXoiNQIj",
      restaurant: "Taco Bell",
      amount: "$56.20",
      date: "Wed Jun 09 2024 07:15:30 PM",
      publish: true,
      description: "Taco Tuesday Special",
      client: "Williams",
      driver: "Sarah Driver",
      action: "",
      ordertype: "Order Delivery",
      orderstatus: "Preparing",
      restaurantImage:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "YzAb5CmnUmZUJYpjORJk",
      restaurant: "Pasta Paradise",
      amount: "$112.40",
      date: "Wed Jun 08 2024 06:00:15 PM",
      publish: false,
      description: "Family Pasta Bundle",
      client: "Brown",
      driver: "Alex Driver",
      action: "",
      ordertype: "Order Pickup",
      orderstatus: "Ready for Pickup",
      restaurantImage:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: "CdEf6GopVnZVKZqkPSKl",
      restaurant: "Salad Station",
      amount: "$45.30",
      date: "Wed Jun 07 2024 04:45:00 PM",
      publish: true,
      description: "Healthy Salad Bowl",
      client: "Davis",
      driver: "Emma Driver",
      action: "",
      ordertype: "Order Delivery",
      orderstatus: "Order Placed",
      restaurantImage:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      driverImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      clientImage:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ]

  const [orders, setOrders] = useState(initialOrders)

  // Define columns for the table
  const columns = [
    {
      key: "id",
      label: "Order ID",
      sortable: true,
      render: (item) => <span className="text-primary-900 font-medium">{item.id}</span>,
    },
    // {
    //   key: "restaurant",
    //   label: "Restaurant",
    //   sortable: true,
    //   render: (item) => (
    //     <div className="flex items-center">
    //       <img
    //         src={item.restaurantImage || "/placeholder.svg"}
    //         alt={item.restaurant}
    //         className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
    //         onError={(e) => {
    //           e.target.src = "/placeholder.svg?height=32&width=32"
    //         }}
    //       />
    //       <span className="font-medium">{item.restaurant}</span>
    //     </div>
    //   ),
    // },
    {
      key: "driver",
      label: "Driver",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.driverImage || "/placeholder.svg"}
            alt={item.driver || "Driver"}
            className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32"
            }}
          />
          <span>{item.driver || "Not Assigned"}</span>
        </div>
      ),
    },
    {
      key: "client",
      label: "Client",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.clientImage || "/placeholder.svg"}
            alt={item.client}
            className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32"
            }}
          />
          <span>{item.client}</span>
        </div>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
    },
    {
      key: "amount",
      label: "Amount",
      sortable: true,
      render: (item) => <span className="font-semibold text-green-600">{item.amount}</span>,
    },
    {
      key: "orderstatus",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.orderstatus === "Order Placed") statusClass = "bg-yellow-100 text-yellow-800"
        if (item.orderstatus === "Preparing") statusClass = "bg-blue-100 text-blue-800"
        if (item.orderstatus === "In Transit") statusClass = "bg-purple-100 text-purple-800"
        if (item.orderstatus === "Delivered") statusClass = "bg-green-100 text-green-800"
        if (item.orderstatus === "Ready for Pickup") statusClass = "bg-indigo-100 text-indigo-800"

        return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.orderstatus}</span>
      },
    },
  ]

  // Handle delete order
  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== orderId))
    }
  }

  // Define expandable row content with improved design
  const expandableRow = (order) => {
    const leftContent = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Order Type",
        value: order.ordertype,
        iconBg: "blue-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Status",
        value: order.orderstatus,
        iconBg: "green-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Description",
        value: order.description,
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Subtotal",
        value: order.amount,
      },
      {
        label: "Delivery Fee",
        value: "$5.00",
      },
      {
        label: "Tax",
        value: "$3.50",
      },
      {
        label: "Total",
        value: order.amount,
        valueClass: "text-green-600 font-bold",
      },
    ]

    const actionButtons = (
      <>
        <ActionButton
          icon={<FaPrint />}
          title="Print Order"
          variant="primary"
          to={`/print-order/${order.id}`}
          showLabel={true}
          label="Print"
        />
        <ActionButton
          icon={<FaEdit />}
          title="Edit Order"
          variant="success"
          to={`/edit-order/${order.id}`}
          showLabel={true}
          label="Edit"
        />
        <ActionButton
          icon={<FaTrashAlt />}
          title="Delete Order"
          variant="danger"
          onClick={() => handleDeleteOrder(order.id)}
          showLabel={true}
          label="Delete"
        />
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="Order Details"
        rightTitle="Payment Information"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="card"
      />
    )
  }

  // Define filter options
  const filterOptions = [
    {
      label: "Placed",
      value: "Order Placed",
      activeClassName: "bg-yellow-500 text-white",
    },
    {
      label: "Preparing",
      value: "Preparing",
      activeClassName: "bg-blue-500 text-white",
    },
    {
      label: "In Transit",
      value: "In Transit",
      activeClassName: "bg-purple-500 text-white",
    },
    {
      label: "Delivered",
      value: "Delivered",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Ready for Pickup",
      value: "Ready for Pickup",
      activeClassName: "bg-indigo-500 text-white",
    },
  ]

  return (
    <div className="mx-5 my-3">
      <TableList
        data={orders}
        columns={columns}
        title="Order Management"
        description="View and manage your store orders"
        searchPlaceholder="Search orders by ID, customer..."
        showSearch={true}
        showFilter={true}
        filterOptions={filterOptions}
        expandableRow={expandableRow}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Order",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: (order) => {
              window.location.href = `/orders/${order.id}`
            },
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Order",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: (order) => {
              window.location.href = `/orders/edit/${order.id}`
            },
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Order",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: (order) => handleDeleteOrder(order.id),
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
                setOrders(orders.filter((order) => !selectedItems.has(order.id)))
              }
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No orders found"
        routePrefix="/orders"
      />
    </div>
  )
}

export default Orders