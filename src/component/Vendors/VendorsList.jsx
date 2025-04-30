"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaEye, FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa"
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa" // Added missing imports
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import PageHeader from "../common/PageHeader"

const VendorsList = () => {
  const navigate = useNavigate()
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch vendors
    setTimeout(() => {
      setVendors([
        {
          id: 1,
          name: "Pizza Palace",
          logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          ownerName: "John Smith",
          email: "john@pizzapalace.com",
          phone: "+1 234-567-8901",
          address: "123 Main St, New York, NY",
          status: "Active",
          cuisineType: "Italian",
          rating: 4.5,
          totalOrders: 156,
          revenue: "$12,450",
          joinDate: "Jan 15, 2023",
        },
        {
          id: 2,
          name: "Burger Barn",
          logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          ownerName: "Sarah Johnson",
          email: "sarah@burgerbarn.com",
          phone: "+1 234-567-8902",
          address: "456 Oak St, Chicago, IL",
          status: "Active",
          cuisineType: "American",
          rating: 4.2,
          totalOrders: 203,
          revenue: "$18,320",
          joinDate: "Feb 3, 2023",
        },
        {
          id: 3,
          name: "Sushi Express",
          logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          ownerName: "Takashi Yamamoto",
          email: "takashi@sushiexpress.com",
          phone: "+1 234-567-8903",
          address: "789 Pine St, San Francisco, CA",
          status: "Inactive",
          cuisineType: "Japanese",
          rating: 4.8,
          totalOrders: 98,
          revenue: "$8,760",
          joinDate: "Mar 20, 2023",
        },
        {
          id: 4,
          name: "Taco Time",
          logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          ownerName: "Maria Rodriguez",
          email: "maria@tacotime.com",
          phone: "+1 234-567-8904",
          address: "321 Elm St, Los Angeles, CA",
          status: "Pending",
          cuisineType: "Mexican",
          rating: 3.9,
          totalOrders: 175,
          revenue: "$14,230",
          joinDate: "Apr 5, 2023",
        },
        {
          id: 5,
          name: "Pasta Paradise",
          logo: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
          ownerName: "Marco Rossi",
          email: "marco@pastaparadise.com",
          phone: "+1 234-567-8905",
          address: "654 Maple St, Boston, MA",
          status: "Active",
          cuisineType: "Italian",
          rating: 4.6,
          totalOrders: 132,
          revenue: "$11,870",
          joinDate: "May 12, 2023",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const handleCreateVendor = () => {
    navigate("/vendors/create")
  }

  const handleExport = (format) => {
    console.log(`Exporting vendors in ${format} format`)
    // In a real app, you would implement the actual export functionality here
    alert(`Vendors data exported as ${format.toUpperCase()}`)
  }

  const handleDeleteVendor = (vendorId) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      setVendors(vendors.filter((vendor) => vendor.id !== vendorId))
    }
  }

  const columns = [
    {
      key: "logo",
      label: "Restaurant",
      sortable: false,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.logo || "/placeholder.svg"}
            alt={item.name}
            className="h-10 w-10 rounded-full mr-3 object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <div>
            <div className="font-medium text-gray-900">{item.name}</div>
            <div className="text-gray-500 text-sm">{item.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "ownerName",
      label: "Owner",
      sortable: true,
    },
    {
      key: "cuisineType",
      label: "Cuisine",
      sortable: true,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.status === "Active") statusClass = "bg-green-100 text-green-800"
        if (item.status === "Inactive") statusClass = "bg-red-100 text-red-800"
        if (item.status === "Pending") statusClass = "bg-yellow-100 text-yellow-800"

        return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.status}</span>
      },
    },
    {
      key: "rating",
      label: "Rating",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{item.rating}</span>
        </div>
      ),
    },
    {
      key: "totalOrders",
      label: "Orders",
      sortable: true,
    },
    {
      key: "revenue",
      label: "Revenue",
      sortable: true,
      render: (item) => <span className="font-semibold text-green-600">{item.revenue}</span>,
    },
  ]

  const expandableRow = (vendor) => {
    const leftContent = [
      {
        icon: <FaEye className="text-blue-600" />,
        label: "Email",
        value: vendor.email,
        iconBg: "blue-100",
      },
      {
        icon: <FaPhone className="text-green-600" />,
        label: "Phone",
        value: vendor.phone,
        iconBg: "green-100",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-600" />,
        label: "Address",
        value: vendor.address,
        iconBg: "red-100",
      },
    ]

    const rightContent = [
      {
        label: "Total Orders",
        value: vendor.totalOrders,
      },
      {
        label: "Revenue",
        value: vendor.revenue,
        valueClass: "text-green-600 font-semibold",
      },
      {
        label: "Joined",
        value: vendor.joinDate,
      },
    ]

    return (
      <ExpandableRowContent
        leftTitle="Vendor Details"
        rightTitle="Business Statistics"
        leftContent={leftContent}
        rightContent={rightContent}
        leftTitleColor="primary-900"
        rightTitleColor="green-600"
      />
    )
  }

  const filterOptions = [
    {
      label: "Active",
      value: "Active",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Inactive",
      value: "Inactive",
      activeClassName: "bg-red-500 text-white",
    },
    {
      label: "Pending",
      value: "Pending",
      activeClassName: "bg-yellow-500 text-white",
    },
  ]

  return (
    <div className="p-4">
      <PageHeader
        title="Vendors Management"
        description="View and manage all restaurant vendors in your platform"
        showExport={true}
        onExport={handleExport}
        actions={[
          {
            label: "Create Vendor",
            onClick: handleCreateVendor,
            icon: <FaPlus className="mr-2" />,
          },
        ]}
      />

      <div className="mt-6">
        <TableList
          data={vendors}
          columns={columns}
          // title="Vendors Management"
          description="View and manage all Vendors in your platform"
          showSearch={true}
          searchPlaceholder="Search vendors by name, email, cuisine..."
          showFilter={true}
          filterOptions={filterOptions}
          expandableRow={expandableRow}
          loading={loading}
          actionButtons={[
            // {
            //   icon: <FaEye className="w-4 h-4" />,
            //   title: "View Vendor",
            //   className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            //   onClick: (vendor) => navigate(`/vendors/view/${vendor.id}`),
            // },
            {
              icon: <FaEdit className="w-4 h-4" />,
              title: "Edit Vendor",
              className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
              onClick: (vendor) => navigate(`/vendors/edit/${vendor.id}`),
            },
            {
              icon: <FaTrashAlt className="w-4 h-4" />,
              title: "Delete Vendor",
              className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
              onClick: (vendor) => handleDeleteVendor(vendor.id),
            },
          ]}
          bulkActions={[
            {
              key: "delete",
              label: "Delete Selected",
              icon: <FaTrashAlt />,
              onClick: (selectedItems) => {
                if (window.confirm(`Are you sure you want to delete ${selectedItems.size} vendors?`)) {
                  setVendors(vendors.filter((vendor) => !selectedItems.has(vendor.id)))
                }
              },
              clearSelectionAfter: true,
            },
          ]}
          emptyStateMessage="No vendors found"
        />
      </div>
    </div>
  )
}

export default VendorsList
