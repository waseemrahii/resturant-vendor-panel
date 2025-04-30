// import React, { useState } from "react";

// import { FaTrashAlt } from "react-icons/fa";
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// import { MdAdd, MdModeEdit } from "react-icons/md";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { Link } from "react-router-dom";
// import HeadingCard from "../AllCards/HeadingCard";
// import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
// import { initialRoles } from "../../Utils/data";
// import ButtonHead from "../Header/ButtonHead";

// const BannersList = () => {
//   const [roles, setRoles] = useState(initialRoles);
//   const [sortColumn, setSortColumn] = useState("name");
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(0);
//   const [selectedRoles, setSelectedRoles] = useState(new Set());
//   const rolesPerPage = 5;

//   const handleSort = () => {
//     const newDirection = sortDirection === "asc" ? "desc" : "asc";
//     const sortedRoles = [...roles].sort((a, b) => {
//       if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
//       if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
//       return 0;
//     });
//     setRoles(sortedRoles);
//     setSortDirection(newDirection);
//     setSortColumn("name");
//   };

//   const handleemail = () => {
//     const newDirection = sortDirection === "asc" ? "desc" : "asc";
//     const sortedRoles = [...roles].sort((a, b) => {
//       if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
//       if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
//       return 0;
//     });
//     setRoles(sortedRoles);
//     setSortDirection(newDirection);
//     setSortColumn("email");
//   };

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const newSelectedRoles = new Set(roles.map((_, index) => index));
//       setSelectedRoles(newSelectedRoles);
//     } else {
//       setSelectedRoles(new Set());
//     }
//   };

//   const handleRoleSelection = (index) => {
//     const newSelectedRoles = new Set(selectedRoles);
//     if (newSelectedRoles.has(index)) {
//       newSelectedRoles.delete(index);
//     } else {
//       newSelectedRoles.add(index);
//     }
//     setSelectedRoles(newSelectedRoles);
//   };

//   const startIndex = currentPage * rolesPerPage;
//   const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

//   return (
//     <div>
//       <ButtonHead
//         tab1={"Banners Items List"}
//         tab2={"Create Banner Items"}
//         link={"/banner/create"}
//       />
//       <HeadingCard />
//       <div className="overflow-x-auto scrollbar-custom">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="text-[.7rem] md:text-[1rem]">
//               <th className="px-4 py-2 border bg-[#F8FAFD]">
//                 <div className="flex items-center justify-center gap-1 ">
//                   <input
//                     type="checkbox"
//                     className="bg-slate-600 h-4 w-4 "
//                     onChange={handleSelectAll}
//                     checked={
//                       displayedRoles.length > 0 &&
//                       displayedRoles.every((_, index) =>
//                         selectedRoles.has(startIndex + index)
//                       )
//                     }
//                   />
//                   <FaTrashAlt className="text-primary-900 text-[.9rem]" />
//                   <span className="font-semibold">All</span>
//                 </div>
//               </th>
//               <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Photo</th>
//               <th className="px-4 py-2 border text-left">
//                 <button
//                   onClick={handleSort}
//                   className="flex items-center justify-between w-full gap-1"
//                 >
//                   <h1> Title </h1>
//                   <div className="flex flex-col">
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${
//                         sortColumn === "name" && sortDirection === "asc"
//                           ? "text-gray-500"
//                           : "text-gray-300"
//                       }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${
//                         sortColumn === "name" && sortDirection === "desc"
//                           ? "text-gray-500"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//               <th className="px-4 py-2 border text-left">
//                 <button
//                   onClick={handleemail}
//                   className="flex items-center justify-between w-full gap-1"
//                 >
//                   <h1> Banner Postion </h1>
//                   <div className="flex flex-col">
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${
//                         sortColumn === "email" && sortDirection === "asc"
//                           ? "text-gray-500"
//                           : "text-gray-300"
//                       }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${
//                         sortColumn === "email" && sortDirection === "desc"
//                           ? "text-gray-500"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   </div>
//                 </button>
//               </th>

//               <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
//                 Publish
//               </th>
//               <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedRoles.map((role, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="px-4 py-2 border w-10 text-center">
//                   <input
//                     type="checkbox"
//                     checked={selectedRoles.has(startIndex + index)}
//                     onChange={() => handleRoleSelection(startIndex + index)}
//                     className="h-4 w-4"
//                   />
//                 </td>
//                 <td className="px-4 py-2 border   ">
//                   <img
//                     src={role.img}
//                     alt=""
//                     className="rounded-md w-16
//                   h-14"
//                   />
//                 </td>
//                 <td className="px-4 py-2 border text-left text-primary-900 text-md hover:text-black">
//                   {role.name}
//                 </td>

//                 <td className="px-4 py-2 border text-left text-primary-900 text-md">
//                   {role.category}
//                 </td>
//                 <td className="px-4 py-2 border text-left">
//                   <div className="flex items-center justify-center ">
//                     <div
//                       onClick={() => {
//                         const updatedRoles = [...roles];
//                         updatedRoles[startIndex + index].publish =
//                           !updatedRoles[startIndex + index].publish;
//                         setRoles(updatedRoles);
//                       }}
//                       className={`w-11 h-6 flex items-center rounded-full  cursor-pointer ${
//                         role.publish ? "bg-[#008000]" : "bg-primary-900"
//                       }`}
//                     >
//                       <div
//                         className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
//                           role.publish ? "translate-x-5" : ""
//                         }`}
//                       ></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 border text-left flex gap-2">
//                   <Link to={"/banner/create"}>
//                     <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
//                   </Link>
//                   <button>
//                     <FaTrashAlt className="p-1 text-[1.6rem]  bg-primary-900 rounded-full text-white" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <DataTableInfo entries={roles.length} totalentries={roles.length} />
//     </div>
//   );
// };

// export default BannersList;

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEdit, FaImage, FaEye, FaLink } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import ToggleSwitch from "../common/ToggleSwitch"
import ActionButton from "../common/ActionButton"

const initialBanners = [
  {
    id: 1,
    title: "Summer Special Offers",
    position: "Home Top",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
    status: true,
    createdAt: "2023-05-15T10:30:00Z",
    link: "/summer-offers",
    clicks: 245,
    impressions: 1890,
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2023-08-31T23:59:59Z",
  },
  {
    id: 2,
    title: "New Restaurant Partners",
    position: "Home Middle",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
    status: true,
    createdAt: "2023-04-10T08:15:00Z",
    link: "/new-restaurants",
    clicks: 187,
    impressions: 1456,
    startDate: "2023-04-15T00:00:00Z",
    endDate: "2023-07-15T23:59:59Z",
  },
  {
    id: 3,
    title: "Free Delivery Weekend",
    position: "Category Top",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
    status: false,
    createdAt: "2023-03-22T14:45:00Z",
    link: "/free-delivery",
    clicks: 312,
    impressions: 2145,
    startDate: "2023-05-20T00:00:00Z",
    endDate: "2023-09-01T23:59:59Z",
  },
  {
    id: 4,
    title: "Healthy Food Collection",
    position: "Category Middle",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
    status: true,
    createdAt: "2023-06-05T09:20:00Z",
    link: "/healthy-food",
    clicks: 178,
    impressions: 1234,
    startDate: "2023-06-10T00:00:00Z",
    endDate: "2023-12-31T23:59:59Z",
  },
  {
    id: 5,
    title: "Special Discount on Desserts",
    position: "Home Bottom",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
    status: true,
    createdAt: "2023-07-12T11:10:00Z",
    link: "/dessert-discount",
    clicks: 203,
    impressions: 1567,
    startDate: "2023-07-15T00:00:00Z",
    endDate: "2023-10-15T23:59:59Z",
  },
]

const BannersList = () => {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setBanners(initialBanners)
      setLoading(false)
      toast.success("Banners loaded successfully")
    }, 800)
  }, [])

  const handleStatusToggle = (id) => {
    const updatedBanners = banners.map((banner) => (banner.id === id ? { ...banner, status: !banner.status } : banner))
    setBanners(updatedBanners)
    const banner = banners.find((b) => b.id === id)
    toast.info(`Banner "${banner.title}" status changed to ${!banner.status ? "Active" : "Inactive"}`)
  }

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete banner "${item.title}"?`)) {
      setBanners(banners.filter((b) => b.id !== item.id))
      toast.success(`Banner "${item.title}" deleted successfully`)
    }
  }

  const handleBulkDelete = (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected banner(s)?`)) {
      setBanners(banners.filter((banner) => !selectedItems.has(banner.id)))
      toast.success(`${selectedItems.size} banner(s) deleted successfully`)
    }
  }

  const columns = [
    {
      key: "image",
      label: "Photo",
      sortable: false,
      render: (item) => (
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-20 h-14 object-cover rounded-md" />
      ),
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.title}</span>,
    },
    {
      key: "position",
      label: "Banner Position",
      sortable: true,
      render: (item) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{item.position}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          <ToggleSwitch
            isOn={item.status}
            onToggle={() => handleStatusToggle(item.id)}
            size="small"
            showLabels={false}
          />
        </div>
      ),
    },
  ]

  const actionButtons = [
    {
      icon: <FaEdit />,
      title: "Edit Banner",
      onClick: (item) => {
        // Navigate to edit page
        console.log("Edit", item)
      },
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Banner",
      onClick: handleDelete,
      variant: "danger",
    },
  ]

  const bulkActions = [
    {
      key: "delete",
      label: "Delete Selected",
      icon: <FaTrashAlt />,
      onClick: handleBulkDelete,
    },
  ]

  const expandableRow = (item) => (
    <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg m-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaImage className="mr-2 text-orange-500" /> Banner Details
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Title:</span> {item.title}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Position:</span> {item.position}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                <span className={item.status ? "text-green-600" : "text-red-600"}>
                  {item.status ? "Active" : "Inactive"}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Link:</span>{" "}
                <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaEye className="mr-2 text-orange-500" /> Performance
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Clicks:</span> {item.clicks}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Impressions:</span> {item.impressions}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">CTR:</span> {((item.clicks / item.impressions) * 100).toFixed(2)}%
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Start Date:</span> {new Date(item.startDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">End Date:</span> {new Date(item.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <ActionButton
          icon={<FaEdit />}
          label="Edit Banner"
          showLabel={true}
          variant="success"
          onClick={() => console.log("Edit", item)}
        />
        <ActionButton
          icon={<FaLink />}
          label="View Link"
          showLabel={true}
          variant="primary"
          onClick={() => window.open(item.link, "_blank")}
        />
      </div>
    </div>
  )

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Link
          to="/banner/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Banner
        </Link>
      </div>

      <TableList
        data={banners}
        columns={columns}
        title="Banner Management"
        description="View and manage all promotional banners"
        searchPlaceholder="Search banners..."
        loading={loading}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No banners found"
        emptyStateIcon={<FaImage className="w-16 h-16 text-gray-300" />}
      />
    </div>
  )
}

export default BannersList
