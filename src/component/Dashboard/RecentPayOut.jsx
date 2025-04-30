"use client"

import React, { useState } from "react"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
import DataTableInfo from "./DashboardCards/DataTableInfo"
import TableHeader from "./DashboardCards/TableHeader"

const RecentPayOut = () => {
  const Orders = [
    {
      description: "fajkfsjksfsdfbm",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "tessting",
    },
    {
      description: "fajkfsjksfsdfbmhvm",
      name: "Hashga",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvm",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "againtesting",
    },
    {
      description: "fajkfsjksfsdfbm",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },

    {
      description: "fajkfsjksfsdfbm",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbm",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$600",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$800",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$100",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$300",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$20",

      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$500",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$800",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$700",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "sa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "a",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$200",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
    },
    {
      description: "fajkfsjksfsdfbmhvsbam",
      name: "Hasa",
      price: "$100",
      date: "fri jun 2023",
      time: "12:32:0 AM",
      note: "test",
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
    <div className="relative bg-primary-10 border rounded-lg border-primary-300 ">
      <TableHeader title="Recent Payouts" path="/payouts" />
      <div className=" shadow-md hover:shadow-lg ">
        <table className="w-full bg-primary-10 ">
          <thead>
            <tr className="bg-primary-200 ">
              <th className="px-4 py-2 ">
                <button
                  onClick={() => handleSort("id")}
                  className="flex text-primary-500 items-center justify-center gap-2 "
                >
                  Restaurant
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
                <button onClick={() => handleSort("name")} className="flex text-primary-500 gap-2 ">
                  Paid Amount
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
              <th className="px-4 py-2">
                <button onClick={() => handleSort("date")} className="flex text-primary-500 items-center gap-2">
                  Date
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "date" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "date" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2">
                <button onClick={() => handleSort("note")} className="flex text-primary-500 items-center gap-2">
                  Note
                  <div>
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "note" && sortDirection === "asc" ? "text-primary-500" : "text-primary-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "note" && sortDirection === "desc" ? "text-primary-500" : "text-primary-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-primary-200">
            {visibleOrders.map((order, index) => (
              <React.Fragment key={index}>
                <tr className={`border-b border-primary-300 ${showQuantity[index] ? "border-primary-950" : ""}`}>
                  <td className="px-4 py-2 flex items-center gap-4">
                    {showQuantity[index] ? (
                      <IoMdRemoveCircle
                        className="text-primary-500 lg:hidden md:hidden text-xl border border-primary-400 rounded-full cursor-pointer"
                        onClick={() => toggleQuantity(index)}
                      />
                    ) : (
                      <IoMdAddCircle
                        className="text-green1 lg:hidden md:hidden text-xl border border-primary-400 rounded-full cursor-pointer"
                        onClick={() => toggleQuantity(index)}
                      />
                    )}
                    <h1 className="text-primary-500 t hover:text-black truncate">{order.name}</h1>
                  </td>
                  <td className="px-4 py-2 text-primary-500 hover:text-black  md:table-cell lg:table-cell truncate">
                    {order.price}
                  </td>
                  <td className="px-4 py-2  hidden md:table-cell lg:table-cell truncate">
                    <div className="text-sm text-primary-500">
                      <h1>{order.date}</h1>
                      <h1> {order.time}</h1>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-primary-500 hover:text-black hidden md:table-cell lg:table-cell truncate">
                    {order.note}
                  </td>
                </tr>
                {showQuantity[index] && (
                  <tr className="">
                    <td colSpan="3" className="py-2">
                      <div className="text-primary-500 font-semibold flex flex-col gap-2">
                        <div className="md:hidden lg:hidden flex justify-center items-start  gap-5">
                          <span>Date</span>
                          <button className="flex flex-col items-start text-sm  gap-2">
                            {" "}
                            <h1>{order.date}</h1>
                            <h1 className="flex gap-2 ">{order.time}</h1>
                          </button>
                        </div>
                        <div className="md:hidden lg:hidden  flex justify-center items-center gap-5">
                          <span>Note</span>
                          <button className="flex items-center gap-2 text-sm"> {order.note}</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 w-full ">
        <DataTableInfo entries={10} totalentries={10} />
      </div>
    </div>
  )
}

export default RecentPayOut
