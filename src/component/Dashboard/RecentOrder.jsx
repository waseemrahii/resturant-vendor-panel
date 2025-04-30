"use client"

import React, { useState } from "react"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import DataTableInfo from "./DashboardCards/DataTableInfo"
import TableHeader from "./DashboardCards/TableHeader"

const RecentOrder = () => {
  const Orders = [
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Cheeseburger",
      price: "$8.99",
      quantity: 1,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Orange Juice",
      price: "$3.50",
      quantity: 2,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Spaghetti Marinara",
      price: "$12.00",
      quantity: 1,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Garden Salad",
      price: "$7.50",
      quantity: 3,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Chocolate Cake",
      price: "$5.00",
      quantity: 2,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Cheeseburger",
      price: "$8.99",
      quantity: 1,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Orange Juice",
      price: "$3.50",
      quantity: 2,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Spaghetti Marinara",
      price: "$12.00",
      quantity: 1,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Garden Salad",
      price: "$7.50",
      quantity: 3,
    },
    {
      description: ` ${Math.floor(Math.random() * 10000)}`,
      name: "Chocolate Cake",
      price: "$5.00",
      quantity: 2,
    },
  ]

  const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10))
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState("asc")
  const [showQuantity, setShowQuantity] = useState({})

  const handleSort = (column) => {
    const newSortDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column)
    setSortDirection(newSortDirection)

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1
      return 0
    })

    setVisibleOrders(sortedOrders.slice(0, 10))
  }

  const toggleQuantity = (index) => {
    setShowQuantity((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="relative bg-primary-10 border rounded-lg border-primary-300">
      <TableHeader title="Recent Orders" path="/orders" />
      <table className=" w-full rounded-lg">
        <thead>
          <tr className="bg-primary-500 text-white">
            <th className="px-4 py-2">
              <button onClick={() => handleSort("id")} className="flex items-center  gap-2">
                Order ID
                <div>
                  <TbTriangleFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "id" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                  <TbTriangleInvertedFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "id" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                </div>
              </button>
            </th>
            <th className="px-4 py-2">
              <button onClick={() => handleSort("name")} className="flex items-center gap-2">
                Restaurant
                <div>
                  <TbTriangleFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "name" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                  <TbTriangleInvertedFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "name" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                </div>
              </button>
            </th>
            <th className="px-4 py-2 sm:hidden lg:table-cell">
              <button onClick={() => handleSort("price")} className="flex items-center gap-2">
                Total Amount
                <div>
                  <TbTriangleFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "price" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                  <TbTriangleInvertedFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "price" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                </div>
              </button>
            </th>
            <th className="px-4 py-2 sm:hidden lg:table-cell">
              <button onClick={() => handleSort("price")} className="flex items-center gap-2">
                Quantity
                <div>
                  <TbTriangleFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "price" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                  <TbTriangleInvertedFilled
                    className={`transition-colors text-[.5rem] ${
                      sortColumn === "price" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                    }`}
                  />
                </div>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="mb-10 rounded-lg">
          {visibleOrders.map((order, index) => (
            <React.Fragment key={index}>
              <tr className={`border-b border-primary-300 ${showQuantity[index] ? "border-black" : ""}`}>
                <td className="px-4 py-2 flex items-center gap-4">
                  <div className="lg:hidden block">
                    {showQuantity[index] ? (
                      <IoMdRemoveCircle
                        className="text-primary-500 text-xl border border-primary-400 rounded-full cursor-pointer"
                        onClick={() => toggleQuantity(index)}
                      />
                    ) : (
                      <IoMdAddCircle
                        className="text-green1 text-xl border border-primary-400 rounded-full cursor-pointer"
                        onClick={() => toggleQuantity(index)}
                      />
                    )}
                  </div>
                  <h1 className="text-primary-500 hover:text-black truncate whitespace-nowrap">{order.description}</h1>
                </td>
                <td className="px-4 py-2 text-primary-500 hover:text-black  md:table-cell lg:table-cell truncate">
                  {order.name}
                </td>
                <td className="px-4 py-2 text-primary-500 hover:text-black lg:block hidden md:table-cell lg:table-cell truncate">
                  {order.price}
                </td>
                <td className="px-4 py-2 text-primary-500 hover:text-black lg:block hidden md:table-cell lg:table-cell truncate ">
                  <div className="flex items-center">
                    <FaCartShopping className="text-primary-500 mr-2" />
                    <span>{order.quantity}</span>
                  </div>
                </td>
              </tr>
              {showQuantity[index] && (
                <tr className="">
                  <td colSpan="3" className="py-2">
                    <div className="text-primary-500 font-semibold flex justify-evenly gap-2">
                      <div className="md:hidden lg:hidden  flex justify-center items-center gap-5">
                        <span>Total Amount:</span>
                        <button onClick={() => handleSort("price")} className="flex items-center gap-2">
                          {" "}
                          {order.price}
                        </button>
                      </div>
                      <div className="flex justify-center items-center py-2 ">
                        <button className="text-primary-500 font-semibold flex items-center gap-2">
                          Quantity: <FaCartShopping className="text-primary-500" />
                          {order.quantity}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="absolute bottom-0 w-full rounded-b-lg ">
        <DataTableInfo entries={10} totalentries={10} />
      </div>
    </div>
  )
}

export default RecentOrder
