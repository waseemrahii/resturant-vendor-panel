// // import BottomButton from "../AllCards/BottomButton";
// // import TitleHead from "../Header/TitleHead";

// // const DineInFeature = () => {
// //   return (
// //     <>
// //       <TitleHead
// //         title={"DINE IN feature setting"}
// //         desc={"DINE IN feature setting"}
// //       />
// //       <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
// //         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
// //           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
// //             DINE IN feature setting
// //           </legend>
// //           <div className="flex items-center gap-4">
// //             <input type="checkbox" name="" id="offer" className="h-5 w-5" />
// //             <label
// //               htmlFor="offer"
// //               className="text-gray-700 font-semibold text-[1rem]"
// //             >
// //               Enable DINE IN feature for Restaurant
// //             </label>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <input type="checkbox" name="" id="customer" className="h-5 w-5" />
// //             <label
// //               htmlFor="customer"
// //               className="text-gray-700 font-semibold text-[1rem]"
// //             >
// //               {" "}
// //               DINE IN for Customers
// //             </label>
// //           </div>
// //         </fieldset>
// //         <BottomButton />
// //       </div>
// //     </>
// //   );
// // };

// // export default DineInFeature;

// "use client"

// import { useState } from "react"
// import { FaUtensils, FaStore, FaUsers, FaSave, FaUndo } from "react-icons/fa"

// const DineInFeature = () => {
//   const [restaurantDineIn, setRestaurantDineIn] = useState(true)
//   const [customerDineIn, setCustomerDineIn] = useState(true)
//   const [isFormDirty, setIsFormDirty] = useState(false)

//   const handleRestaurantDineInChange = () => {
//     setRestaurantDineIn(!restaurantDineIn)
//     setIsFormDirty(true)
//   }

//   const handleCustomerDineInChange = () => {
//     setCustomerDineIn(!customerDineIn)
//     setIsFormDirty(true)
//   }

//   const handleReset = () => {
//     setRestaurantDineIn(true)
//     setCustomerDineIn(true)
//     setIsFormDirty(false)
//   }

//   const handleSave = () => {
//     // Save logic would go here
//     alert("Settings saved successfully!")
//     setIsFormDirty(false)
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-6 py-4">
//           <h2 className="text-xl font-bold text-white flex items-center">
//             <FaUtensils className="mr-2" /> Dine-In Feature Settings
//           </h2>
//           <p className="text-primary-100 text-sm mt-1">Configure dine-in options for restaurants and customers</p>
//         </div>

//         <div className="p-6">
//           <div className="mb-6">
//             <div className="space-y-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-4">
//                   <FaUtensils className="text-primary-900 mr-2" />
//                   <h3 className="text-sm font-medium text-gray-700">Dine-In Options</h3>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
//                     <div className="flex items-center">
//                       <FaStore className="text-primary-900 mr-3" />
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-700">Enable Dine-In for Restaurants</h4>
//                         <p className="text-xs text-gray-500 mt-1">
//                           Allow restaurants to offer dine-in services to customers
//                         </p>
//                       </div>
//                     </div>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         checked={restaurantDineIn}
//                         onChange={handleRestaurantDineInChange}
//                       />
//                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
//                     </label>
//                   </div>

//                   <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
//                     <div className="flex items-center">
//                       <FaUsers className="text-primary-900 mr-3" />
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-700">Enable Dine-In for Customers</h4>
//                         <p className="text-xs text-gray-500 mt-1">
//                           Allow customers to place dine-in orders through the app
//                         </p>
//                       </div>
//                     </div>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         checked={customerDineIn}
//                         onChange={handleCustomerDineInChange}
//                         disabled={!restaurantDineIn}
//                       />
//                       <div
//                         className={`w-11 h-6 ${!restaurantDineIn ? "bg-gray-300" : "bg-gray-200"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900`}
//                       ></div>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="mt-4 text-sm text-gray-500">
//                   <p>
//                     When enabled, restaurants can offer dine-in services and customers can place dine-in orders through
//                     the app. Restaurant dine-in must be enabled for customer dine-in to work.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-4 mt-6">
//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 disabled={!isFormDirty}
//               >
//                 <FaUndo className="mr-2 -ml-1" />
//                 Reset
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 disabled={!isFormDirty}
//               >
//                 <FaSave className="mr-2 -ml-1" />
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DineInFeature



"use client"

import { useState } from "react"
import { FaCalendarAlt, FaUsers, FaPlus, FaTimes, FaEdit, FaTrash } from "react-icons/fa"
import { MdRestaurantMenu, MdOutlineTableRestaurant } from "react-icons/md"

const DineInFeature = () => {
  const [dineInEnabled, setDineInEnabled] = useState(true)
  const [tableReservationEnabled, setTableReservationEnabled] = useState(true)
  const [activeTab, setActiveTab] = useState("settings")
  const [showAddTableModal, setShowAddTableModal] = useState(false)
  const [showAddReservationModal, setShowAddReservationModal] = useState(false)
  const [editingTable, setEditingTable] = useState(null)
  const [editingReservation, setEditingReservation] = useState(null)

  // Form states
  const [newTable, setNewTable] = useState({
    name: "",
    capacity: 2,
    location: "Indoor",
    status: "available",
  })

  const [newReservation, setNewReservation] = useState({
    customerName: "",
    tableId: "",
    date: "",
    time: "",
    duration: 1.5,
    guests: 2,
    contact: "",
    status: "pending",
  })

  // Sample data
  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", capacity: 4, status: "available", location: "Indoor" },
    { id: 2, name: "Table 2", capacity: 2, status: "available", location: "Indoor" },
    { id: 3, name: "Table 3", capacity: 6, status: "occupied", location: "Indoor" },
    { id: 4, name: "Table 4", capacity: 8, status: "reserved", location: "Outdoor" },
    { id: 5, name: "Table 5", capacity: 4, status: "available", location: "Outdoor" },
  ])

  const [reservations, setReservations] = useState([
    {
      id: 1,
      customerName: "John Doe",
      tableId: 4,
      date: "2023-09-20",
      time: "19:00",
      duration: 2,
      guests: 6,
      status: "confirmed",
      contact: "+1 234-567-8901",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      tableId: 3,
      date: "2023-09-21",
      time: "20:00",
      duration: 1.5,
      guests: 4,
      status: "pending",
      contact: "+1 234-567-8902",
    },
    {
      id: 3,
      customerName: "Robert Johnson",
      tableId: 1,
      date: "2023-09-22",
      time: "18:30",
      duration: 2,
      guests: 3,
      status: "confirmed",
      contact: "+1 234-567-8903",
    },
  ])

  // Settings state
  const [settings, setSettings] = useState({
    openingHours: "10:00 AM - 10:00 PM",
    serviceDays: "Monday - Sunday",
    avgServingTime: 45,
    advanceBooking: 7,
    reservationFee: 10,
    cancellationPolicy: "4 hours before",
  })

  // Table CRUD operations
  const handleAddTable = () => {
    if (editingTable) {
      setTables(tables.map((table) => (table.id === editingTable.id ? { ...newTable, id: table.id } : table)))
      setEditingTable(null)
    } else {
      const newId = Math.max(...tables.map((t) => t.id), 0) + 1
      setTables([...tables, { ...newTable, id: newId }])
    }
    setNewTable({ name: "", capacity: 2, location: "Indoor", status: "available" })
    setShowAddTableModal(false)
  }

  const handleEditTable = (table) => {
    setEditingTable(table)
    setNewTable({ ...table })
    setShowAddTableModal(true)
  }

  const handleDeleteTable = (id) => {
    setTables(tables.filter((table) => table.id !== id))
  }

  // Reservation CRUD operations
  const handleAddReservation = () => {
    if (editingReservation) {
      setReservations(
        reservations.map((res) => (res.id === editingReservation.id ? { ...newReservation, id: res.id } : res)),
      )
      setEditingReservation(null)
    } else {
      const newId = Math.max(...reservations.map((r) => r.id), 0) + 1
      setReservations([...reservations, { ...newReservation, id: newId }])
    }
    setNewReservation({
      customerName: "",
      tableId: "",
      date: "",
      time: "",
      duration: 1.5,
      guests: 2,
      contact: "",
      status: "pending",
    })
    setShowAddReservationModal(false)
  }

  const handleEditReservation = (reservation) => {
    setEditingReservation(reservation)
    setNewReservation({ ...reservation })
    setShowAddReservationModal(true)
  }

  const handleDeleteReservation = (id) => {
    setReservations(reservations.filter((res) => res.id !== id))
  }

  // Helper function to get table name
  const getTableName = (tableId) => {
    const table = tables.find((t) => t.id === tableId)
    return table ? table.name : "Unknown Table"
  }

  // Update settings
  const handleSettingsChange = (e) => {
    const { name, value } = e.target
    setSettings({
      ...settings,
      [name]: value,
    })
  }

  // Handle form changes
  const handleTableFormChange = (e) => {
    const { name, value } = e.target
    setNewTable({
      ...newTable,
      [name]: name === "capacity" ? Number.parseInt(value) : value,
    })
  }

  const handleReservationFormChange = (e) => {
    const { name, value } = e.target
    setNewReservation({
      ...newReservation,
      [name]: name === "guests" || name === "duration" ? Number.parseFloat(value) : value,
    })
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <MdRestaurantMenu className="mr-2" /> Dine-In Features Management
          </h1>
          <p className="text-blue-100 mt-1">Configure your restaurant's dine-in services and table reservations</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            className={`py-3 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "settings"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "tables"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("tables")}
          >
            Tables
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm focus:outline-none ${
              activeTab === "reservations"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("reservations")}
          >
            Reservations
          </button>
        </div>

        <div className="p-6">
          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-3">
                      <MdRestaurantMenu className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-medium">Dine-In Service</h3>
                  </div>
                  <button
                    onClick={() => setDineInEnabled(!dineInEnabled)}
                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                      dineInEnabled ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                        dineInEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Enable or disable dine-in service for your restaurant. When disabled, customers won't be able to dine
                  in.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Opening Hours</label>
                      <input
                        type="text"
                        name="openingHours"
                        value={settings.openingHours}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Days</label>
                      <input
                        type="text"
                        name="serviceDays"
                        value={settings.serviceDays}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Average Serving Time (minutes)
                      </label>
                      <input
                        type="number"
                        name="avgServingTime"
                        value={settings.avgServingTime}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Update Dine-In Settings
                </button>
              </div>

              <div className="border rounded-lg p-5 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-3">
                      <FaCalendarAlt className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-medium">Table Reservation</h3>
                  </div>
                  <button
                    onClick={() => setTableReservationEnabled(!tableReservationEnabled)}
                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                      tableReservationEnabled ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                        tableReservationEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Enable or disable table reservations. When disabled, customers won't be able to reserve tables.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Advance Booking (days)</label>
                      <input
                        type="number"
                        name="advanceBooking"
                        value={settings.advanceBooking}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reservation Fee ($)</label>
                      <input
                        type="number"
                        name="reservationFee"
                        value={settings.reservationFee}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cancellation Policy</label>
                      <input
                        type="text"
                        name="cancellationPolicy"
                        value={settings.cancellationPolicy}
                        onChange={handleSettingsChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Update Reservation Settings
                </button>
              </div>
            </div>
          )}

          {/* Tables Tab */}
          {activeTab === "tables" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Restaurant Tables</h3>
                <button
                  onClick={() => {
                    setEditingTable(null)
                    setNewTable({ name: "", capacity: 2, location: "Indoor", status: "available" })
                    setShowAddTableModal(true)
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors"
                >
                  <FaPlus className="mr-2" />
                  Add New Table
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className={`border rounded-lg p-4 ${
                      table.status === "available"
                        ? "border-green-200 bg-green-50"
                        : table.status === "occupied"
                          ? "border-red-200 bg-red-50"
                          : "border-yellow-200 bg-yellow-50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <MdOutlineTableRestaurant className="text-gray-500 mr-2 text-xl" />
                        <div>
                          <h4 className="font-medium text-gray-900">{table.name}</h4>
                          <p className="text-sm text-gray-600">{table.location}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          table.status === "available"
                            ? "bg-green-100 text-green-800"
                            : table.status === "occupied"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center">
                      <FaUsers className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-700">Capacity: {table.capacity} people</span>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditTable(table)}
                        className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <FaEdit className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTable(table.id)}
                        className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        <FaTrash className="mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reservations Tab */}
          {activeTab === "reservations" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Table Reservations</h3>
                <button
                  onClick={() => {
                    setEditingReservation(null)
                    setNewReservation({
                      customerName: "",
                      tableId: tables.length > 0 ? tables[0].id : "",
                      date: "",
                      time: "",
                      duration: 1.5,
                      guests: 2,
                      contact: "",
                      status: "pending",
                    })
                    setShowAddReservationModal(true)
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors"
                >
                  <FaPlus className="mr-2" />
                  Add Reservation
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
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
                        Table
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Guests
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{reservation.customerName}</div>
                          <div className="text-sm text-gray-500">{reservation.contact}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{getTableName(reservation.tableId)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{reservation.date}</div>
                          <div className="text-sm text-gray-500">
                            {reservation.time} ({reservation.duration} hrs)
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reservation.guests} people
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              reservation.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : reservation.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleEditReservation(reservation)}
                            className="text-blue-600 hover:text-blue-800 mr-3"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteReservation(reservation.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Table Modal */}
      {showAddTableModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">{editingTable ? "Edit Table" : "Add New Table"}</h3>
              <button onClick={() => setShowAddTableModal(false)} className="text-gray-400 hover:text-gray-500">
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Table Name</label>
                <input
                  type="text"
                  name="name"
                  value={newTable.name}
                  onChange={handleTableFormChange}
                  placeholder="e.g., Table 1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={newTable.capacity}
                  onChange={handleTableFormChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  name="location"
                  value={newTable.location}
                  onChange={handleTableFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Balcony">Balcony</option>
                  <option value="Private Room">Private Room</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={newTable.status}
                  onChange={handleTableFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                  <option value="reserved">Reserved</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddTableModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTable}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
              >
                {editingTable ? "Update Table" : "Add Table"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Reservation Modal */}
      {showAddReservationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editingReservation ? "Edit Reservation" : "Add New Reservation"}
              </h3>
              <button onClick={() => setShowAddReservationModal(false)} className="text-gray-400 hover:text-gray-500">
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={newReservation.customerName}
                  onChange={handleReservationFormChange}
                  placeholder="e.g., John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={newReservation.contact}
                  onChange={handleReservationFormChange}
                  placeholder="e.g., +1 234-567-8901"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Table</label>
                <select
                  name="tableId"
                  value={newReservation.tableId}
                  onChange={handleReservationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a table</option>
                  {tables.map((table) => (
                    <option key={table.id} value={table.id}>
                      {table.name} ({table.capacity} people, {table.location})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newReservation.date}
                  onChange={handleReservationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={newReservation.time}
                  onChange={handleReservationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (hours)</label>
                <input
                  type="number"
                  name="duration"
                  value={newReservation.duration}
                  onChange={handleReservationFormChange}
                  step="0.5"
                  min="0.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={newReservation.guests}
                  onChange={handleReservationFormChange}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={newReservation.status}
                  onChange={handleReservationFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddReservationModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReservation}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
              >
                {editingReservation ? "Update Reservation" : "Add Reservation"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DineInFeature
