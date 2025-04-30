// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaMapMarkedAlt } from "react-icons/fa"
// // import { toast } from "react-toastify"
// // import TableList from "../common/TableList"
// // import ToggleSwitch from "../common/ToggleSwitch"
// // import ActionButton from "../common/ActionButton"
// // import TitleHead from "../Header/TitleHead"

// // const initialZones = [
// //   {
// //     id: 1,
// //     name: "Islamabad",
// //     status: true,
// //     restaurants: 24,
// //     drivers: 45,
// //     createdAt: "2023-05-15T10:30:00Z",
// //   },
// //   {
// //     id: 2,
// //     name: "Lahore",
// //     status: false,
// //     restaurants: 36,
// //     drivers: 78,
// //     createdAt: "2023-04-10T08:15:00Z",
// //   },
// //   {
// //     id: 3,
// //     name: "Karachi",
// //     status: true,
// //     restaurants: 52,
// //     drivers: 93,
// //     createdAt: "2023-03-22T14:45:00Z",
// //   },
// //   {
// //     id: 4,
// //     name: "Peshawar",
// //     status: true,
// //     restaurants: 18,
// //     drivers: 32,
// //     createdAt: "2023-06-05T09:20:00Z",
// //   },
// //   {
// //     id: 5,
// //     name: "Quetta",
// //     status: false,
// //     restaurants: 12,
// //     drivers: 24,
// //     createdAt: "2023-07-12T11:10:00Z",
// //   },
// // ]

// // const Zone = () => {
// //   const [zones, setZones] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     // Simulate API call
// //     setLoading(true)
// //     setTimeout(() => {
// //       setZones(initialZones)
// //       setLoading(false)
// //       toast.success("Zones loaded successfully")
// //     }, 800)
// //   }, [])

// //   const handleStatusToggle = (id) => {
// //     const updatedZones = zones.map((zone) => (zone.id === id ? { ...zone, status: !zone.status } : zone))
// //     setZones(updatedZones)
// //     const zone = zones.find((z) => z.id === id)
// //     toast.info(`Zone "${zone.name}" status changed to ${!zone.status ? "Active" : "Inactive"}`)
// //   }

// //   const handleDelete = (item) => {
// //     if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
// //       setZones(zones.filter((z) => z.id !== item.id))
// //       toast.success(`Zone "${item.name}" deleted successfully`)
// //     }
// //   }

// //   const handleBulkDelete = (selectedItems) => {
// //     if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected zone(s)?`)) {
// //       setZones(zones.filter((zone) => !selectedItems.has(zone.id)))
// //       toast.success(`${selectedItems.size} zone(s) deleted successfully`)
// //     }
// //   }

// //   const columns = [
// //     {
// //       key: "name",
// //       label: "Name",
// //       sortable: true,
// //       render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
// //     },
// //     {
// //       key: "status",
// //       label: "Status",
// //       sortable: true,
// //       render: (item) => (
// //         <div className="flex justify-center">
// //           <ToggleSwitch
// //             isOn={item.status}
// //             onToggle={() => handleStatusToggle(item.id)}
// //             size="small"
// //             showLabels={false}
// //           />
// //         </div>
// //       ),
// //     },
// //     {
// //       key: "restaurants",
// //       label: "Restaurants",
// //       sortable: true,
// //       render: (item) => (
// //         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{item.restaurants}</span>
// //       ),
// //     },
// //     {
// //       key: "drivers",
// //       label: "Drivers",
// //       sortable: true,
// //       render: (item) => (
// //         <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">{item.drivers}</span>
// //       ),
// //     },
// //   ]

// //   const actionButtons = [
// //     {
// //       icon: <FaEye />,
// //       title: "View Zone",
// //       onClick: (item) => {
// //         // Navigate to view page
// //         console.log("View", item)
// //       },
// //       variant: "info",
// //     },
// //     {
// //       icon: <FaEdit />,
// //       title: "Edit Zone",
// //       onClick: (item) => {
// //         // Navigate to edit page
// //         console.log("Edit", item)
// //       },
// //       variant: "success",
// //     },
// //     {
// //       icon: <FaTrashAlt />,
// //       title: "Delete Zone",
// //       onClick: handleDelete,
// //       variant: "danger",
// //     },
// //   ]

// //   const bulkActions = [
// //     {
// //       key: "delete",
// //       label: "Delete Selected",
// //       icon: <FaTrashAlt />,
// //       onClick: handleBulkDelete,
// //     },
// //   ]

// //   const expandableRow = (item) => (
// //     <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg m-2">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <div className="bg-white p-4 rounded-lg shadow-sm">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
// //             <FaMapMarkedAlt className="mr-2 text-blue-500" /> Zone Details
// //           </h3>
// //           <div className="space-y-2">
// //             <p className="text-sm text-gray-600">
// //               <span className="font-medium">ID:</span> {item.id}
// //             </p>
// //             <p className="text-sm text-gray-600">
// //               <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
// //             </p>
// //             <p className="text-sm text-gray-600">
// //               <span className="font-medium">Status:</span>{" "}
// //               <span className={item.status ? "text-green-600" : "text-red-600"}>
// //                 {item.status ? "Active" : "Inactive"}
// //               </span>
// //             </p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-4 rounded-lg shadow-sm">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-2">Restaurant Statistics</h3>
// //           <div className="space-y-2">
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Total Restaurants:</span>
// //               <span className="font-medium text-blue-600">{item.restaurants}</span>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Active Restaurants:</span>
// //               <span className="font-medium text-green-600">{Math.floor(item.restaurants * 0.8)}</span>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Inactive Restaurants:</span>
// //               <span className="font-medium text-red-600">{Math.floor(item.restaurants * 0.2)}</span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white p-4 rounded-lg shadow-sm">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-2">Driver Statistics</h3>
// //           <div className="space-y-2">
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Total Drivers:</span>
// //               <span className="font-medium text-blue-600">{item.drivers}</span>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Active Drivers:</span>
// //               <span className="font-medium text-green-600">{Math.floor(item.drivers * 0.7)}</span>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <span className="text-sm text-gray-600">Inactive Drivers:</span>
// //               <span className="font-medium text-red-600">{Math.floor(item.drivers * 0.3)}</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-4 flex justify-end space-x-2">
// //         <ActionButton
// //           icon={<FaEdit />}
// //           label="Edit Zone"
// //           showLabel={true}
// //           variant="success"
// //           onClick={() => console.log("Edit", item)}
// //         />
// //         <ActionButton
// //           icon={<FaEye />}
// //           label="View Map"
// //           showLabel={true}
// //           variant="primary"
// //           onClick={() => console.log("View Map", item)}
// //         />
// //       </div>
// //     </div>
// //   )

// //   return (
// //     <div>

// //       <div className="mb-4 flex justify-end">
// //         <Link
// //           to="/create-zone"
// //           className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors flex items-center justify-center"
// //         >
// //           <FaPlus className="mr-2" /> Add Zone
// //         </Link>
// //       </div>

// //       <TableList
// //         data={zones}
// //         columns={columns}
// //         title="Zone Management"
// //         description="View and manage all delivery zones"
// //         searchPlaceholder="Search zones..."
// //         loading={loading}
// //         actionButtons={actionButtons}
// //         bulkActions={bulkActions}
// //         expandableRow={expandableRow}
// //         emptyStateMessage="No zones found"
// //         emptyStateIcon={<FaMapMarkedAlt className="w-16 h-16 text-gray-300" />}
// //       />
// //     </div>
// //   )
// // }

// // export default Zone

// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaMapMarkerAlt, FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa"
// import TitleHead from "../Header/TitleHead"

// const Zone = () => {
//   const [zones, setZones] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedZones, setSelectedZones] = useState([])
//   const [allSelected, setAllSelected] = useState(false)

//   useEffect(() => {
//     // Simulate API call to fetch zones
//     const fetchZones = async () => {
//       try {
//         // In a real app, this would be an API call
//         setTimeout(() => {
//           const mockZones = [
//             { id: 1, name: "Karachi Central", status: true, restaurants: 12, drivers: 8 },
//             { id: 2, name: "Lahore Downtown", status: true, restaurants: 15, drivers: 10 },
//             { id: 3, name: "Islamabad F-Sectors", status: true, restaurants: 8, drivers: 5 },
//             { id: 4, name: "Rawalpindi", status: false, restaurants: 6, drivers: 4 },
//             { id: 5, name: "Faisalabad", status: true, restaurants: 7, drivers: 6 },
//             { id: 6, name: "Peshawar", status: false, restaurants: 5, drivers: 3 },
//             { id: 7, name: "Multan", status: true, restaurants: 4, drivers: 2 },
//           ]
//           setZones(mockZones)
//           setLoading(false)
//         }, 1000)
//       } catch (error) {
//         console.error("Error fetching zones:", error)
//         setLoading(false)
//       }
//     }

//     fetchZones()
//   }, [])

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   const filteredZones = zones.filter((zone) => zone.name.toLowerCase().includes(searchTerm.toLowerCase()))

//   const handleSelectAll = () => {
//     if (allSelected) {
//       setSelectedZones([])
//     } else {
//       setSelectedZones(zones.map((zone) => zone.id))
//     }
//     setAllSelected(!allSelected)
//   }

//   const handleSelectZone = (id) => {
//     if (selectedZones.includes(id)) {
//       setSelectedZones(selectedZones.filter((zoneId) => zoneId !== id))
//     } else {
//       setSelectedZones([...selectedZones, id])
//     }
//   }

//   const handleStatusChange = (id) => {
//     setZones(zones.map((zone) => (zone.id === id ? { ...zone, status: !zone.status } : zone)))
//   }

//   const handleDeleteZone = (id) => {
//     if (window.confirm("Are you sure you want to delete this zone?")) {
//       setZones(zones.filter((zone) => zone.id !== id))
//     }
//   }

//   const handleBulkDelete = () => {
//     if (selectedZones.length === 0) return

//     if (window.confirm(`Are you sure you want to delete ${selectedZones.length} zones?`)) {
//       setZones(zones.filter((zone) => !selectedZones.includes(zone.id)))
//       setSelectedZones([])
//       setAllSelected(false)
//     }
//   }

//   return (
//     <div className="p-4">
//       <TitleHead title="Zone Management" desc="Manage delivery zones" />

//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6 bg-primary-500 text-white">
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="text-3xl mr-4" />
//             <div>
//               <h1 className="text-2xl font-bold">Zone Management</h1>
//               <p className="text-primary-100">Define and manage delivery zones for your platform</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <div className="mb-4 md:mb-0">
//               <h2 className="text-xl font-semibold text-gray-800">Zone List</h2>
//               <p className="text-sm text-gray-500">View and manage all the zones</p>
//             </div>
//             <Link
//               to="/create-zone"
//               className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
//             >
//               <FaPlus className="mr-2" /> Create Zone
//             </Link>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//             <div className="w-full md:w-auto mb-4 md:mb-0">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search zones..."
//                   value={searchTerm}
//                   onChange={handleSearch}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full md:w-64"
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>
//             </div>

//             {selectedZones.length > 0 && (
//               <button
//                 onClick={handleBulkDelete}
//                 className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
//               >
//                 <FaTrash className="mr-1" /> Delete Selected ({selectedZones.length})
//               </button>
//             )}
//           </div>

//           {loading ? (
//             <div className="animate-pulse">
//               {[...Array(5)].map((_, index) => (
//                 <div key={index} className="border-b border-gray-200 py-3">
//                   <div className="flex items-center">
//                     <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
//                     <div className="h-5 bg-gray-200 rounded w-1/4"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         <div className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={allSelected}
//                             onChange={handleSelectAll}
//                             className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                           />
//                         </div>
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Zone Name
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Status
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Restaurants
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Drivers
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredZones.length === 0 ? (
//                       <tr>
//                         <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
//                           No zones found
//                         </td>
//                       </tr>
//                     ) : (
//                       filteredZones.map((zone) => (
//                         <tr key={zone.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <input
//                                 type="checkbox"
//                                 checked={selectedZones.includes(zone.id)}
//                                 onChange={() => handleSelectZone(zone.id)}
//                                 className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                               />
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <FaMapMarkerAlt className="text-primary-500 mr-2" />
//                               <div className="text-sm font-medium text-gray-900">{zone.name}</div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <label className="relative inline-flex items-center cursor-pointer">
//                               <input
//                                 type="checkbox"
//                                 checked={zone.status}
//                                 onChange={() => handleStatusChange(zone.id)}
//                                 className="sr-only peer"
//                               />
//                               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
//                             </label>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.restaurants}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.drivers}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <Link to={`/zone/edit/${zone.id}`} className="text-primary-600 hover:text-primary-900 mr-3">
//                               <FaEdit className="inline" />
//                             </Link>
//                             <button
//                               onClick={() => handleDeleteZone(zone.id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               <FaTrash className="inline" />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="py-3 flex items-center justify-between border-t border-gray-200">
//                 <div className="flex-1 flex justify-between sm:hidden">
//                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Previous
//                   </button>
//                   <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                     Next
//                   </button>
//                 </div>
//                 <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                   <div>
//                     <p className="text-sm text-gray-700">
//                       Showing <span className="font-medium">1</span> to{" "}
//                       <span className="font-medium">{filteredZones.length}</span> of{" "}
//                       <span className="font-medium">{filteredZones.length}</span> results
//                     </p>
//                   </div>
//                   <div>
//                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         Previous
//                       </button>
//                       <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//                         1
//                       </button>
//                       <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                         Next
//                       </button>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Zone

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa"

const Zone = () => {
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedZones, setSelectedZones] = useState([])
  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch zones
    const fetchZones = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          const mockZones = [
            { id: 1, name: "Karachi Central", status: true, restaurants: 12, drivers: 8 },
            { id: 2, name: "Lahore Downtown", status: true, restaurants: 15, drivers: 10 },
            { id: 3, name: "Islamabad F-Sectors", status: true, restaurants: 8, drivers: 5 },
            { id: 4, name: "Rawalpindi", status: false, restaurants: 6, drivers: 4 },
            { id: 5, name: "Faisalabad", status: true, restaurants: 7, drivers: 6 },
            { id: 6, name: "Peshawar", status: false, restaurants: 5, drivers: 3 },
            { id: 7, name: "Multan", status: true, restaurants: 4, drivers: 2 },
          ]
          setZones(mockZones)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching zones:", error)
        setLoading(false)
      }
    }

    fetchZones()
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredZones = zones.filter((zone) => zone.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedZones([])
    } else {
      setSelectedZones(zones.map((zone) => zone.id))
    }
    setAllSelected(!allSelected)
  }

  const handleSelectZone = (id) => {
    if (selectedZones.includes(id)) {
      setSelectedZones(selectedZones.filter((zoneId) => zoneId !== id))
    } else {
      setSelectedZones([...selectedZones, id])
    }
  }

  const handleStatusChange = (id) => {
    setZones(zones.map((zone) => (zone.id === id ? { ...zone, status: !zone.status } : zone)))
  }

  const handleDeleteZone = (id) => {
    if (window.confirm("Are you sure you want to delete this zone?")) {
      setZones(zones.filter((zone) => zone.id !== id))
    }
  }

  const handleBulkDelete = () => {
    if (selectedZones.length === 0) return

    if (window.confirm(`Are you sure you want to delete ${selectedZones.length} zones?`)) {
      setZones(zones.filter((zone) => !selectedZones.includes(zone.id)))
      setSelectedZones([])
      setAllSelected(false)
    }
  }

  return (
    <div className="p-4">
      {/* <TitleHead title="Zone Management" desc="Manage delivery zones" /> */}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 bg-primary-500 text-white">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl mr-4" />
            <div>
              <h1 className="text-2xl font-bold">Zone Management</h1>
              <p className="text-primary-100">Define and manage delivery zones for your platform</p>
            </div>
          </div>
        </div>
        {/* <GoogleMapsDebug /> */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800">Zone List</h2>
              <p className="text-sm text-gray-500">View and manage all the zones</p>
            </div>
            <Link
              to="/create-zone"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <FaPlus className="mr-2" /> Create Zone
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search zones..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full md:w-64"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {selectedZones.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                <FaTrash className="mr-1" /> Delete Selected ({selectedZones.length})
              </button>
            )}
          </div>

          {loading ? (
            <div className="animate-pulse">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={handleSelectAll}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Zone Name
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
                        Restaurants
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Drivers
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredZones.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                          No zones found
                        </td>
                      </tr>
                    ) : (
                      filteredZones.map((zone) => (
                        <tr key={zone.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedZones.includes(zone.id)}
                                onChange={() => handleSelectZone(zone.id)}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaMapMarkerAlt className="text-primary-500 mr-2" />
                              <div className="text-sm font-medium text-gray-900">{zone.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={zone.status}
                                onChange={() => handleStatusChange(zone.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.restaurants}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.drivers}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/zone/edit/${zone.id}`} className="text-primary-600 hover:text-primary-900 mr-3">
                              <FaEdit className="inline" />
                            </Link>
                            <button
                              onClick={() => handleDeleteZone(zone.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FaTrash className="inline" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="py-3 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">{filteredZones.length}</span> of{" "}
                      <span className="font-medium">{filteredZones.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Zone
