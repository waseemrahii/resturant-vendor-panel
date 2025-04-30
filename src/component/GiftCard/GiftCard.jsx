"use client"

import { useState } from "react"

import { FaTrashAlt } from "react-icons/fa"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import { MdAdd, MdModeEdit } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"
import HeadingCard from "../AllCards/HeadingCard"
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo"
import TitleHead from "../Header/TitleHead"

const initialRoles = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FAnniversary%20Voucher_1700569972819.png?alt=media&token=4aee1fa3-a096-4c45-be40-d602010140c0",
    expireday: "30Day",
    roles: "Admin",
    publish: true,
    name: "Anniversary gift",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FValentine%20Voucher_1700569950496.png?alt=media&token=cef4e8be-6639-4cae-a07e-66dbc23db6fe",
    expireday: "20Day",
    roles: "Admin",
    publish: true,
    name: "Valentine Gift",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2FBirthday%20Voucher_1700569920594.png?alt=media&token=575c07c7-9c14-43b4-91f8-e7ca204e0c84",
    expireday: "25Day",
    roles: "Admin",
    publish: true,
    name: "Valentine Gift",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fcongratulations-baby-gift-card-baby-shower-greeting-invitation-cards-money-card-blue-pastel-colors-template-illustration-vector_1701327424029.jpg?alt=media&token=8f22ad38-fd67-4aa1-b80b-3d0dfd77a8f3",
    expireday: "5Day",
    roles: "Admin",
    publish: true,
    name: "BirthDay Gift",
  },
]

const GiftCard = () => {
  const [roles, setRoles] = useState(initialRoles)
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedRoles, setSelectedRoles] = useState(new Set())
  const rolesPerPage = 5

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc"
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1
      return 0
    })
    setRoles(sortedRoles)
    setSortDirection(newDirection)
    setSortColumn("name")
  }

  const handleemail = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc"
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1
      return 0
    })
    setRoles(sortedRoles)
    setSortDirection(newDirection)
    setSortColumn("email")
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedRoles = new Set(roles.map((_, index) => index))
      setSelectedRoles(newSelectedRoles)
    } else {
      setSelectedRoles(new Set())
    }
  }

  const handleRoleSelection = (index) => {
    const newSelectedRoles = new Set(selectedRoles)
    if (newSelectedRoles.has(index)) {
      newSelectedRoles.delete(index)
    } else {
      newSelectedRoles.add(index)
    }
    setSelectedRoles(newSelectedRoles)
  }

  const startIndex = currentPage * rolesPerPage
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage)

  return (
    <>
      <TitleHead title={"Gift Cards"} desc={"Gift Cards"} />
      <div className="mx-5 my-3 shadow-md hover:shadow-lg">
        <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded shadow-sm hover:shadow-md">
          <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
            <TfiMenuAlt />
            Gift Card List
          </button>

          <Link to="/gift-create">
            <button className="bg-white hover:bg-primary-900 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
              <MdAdd className="text-xl font-bold" /> Create Gift Card
            </button>
          </Link>
        </div>
        <HeadingCard />
        <div className="overflow-x-auto scrollbar-custom">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-[.7rem] md:text-[1rem]">
                <th className="px-4 py-2 border bg-[#F8FAFD]">
                  <div className="flex items-center justify-center gap-1 ">
                    <input
                      type="checkbox"
                      className="bg-slate-600 h-4 w-4 "
                      onChange={handleSelectAll}
                      checked={
                        displayedRoles.length > 0 &&
                        displayedRoles.every((_, index) => selectedRoles.has(startIndex + index))
                      }
                    />
                    <FaTrashAlt className="text-primary-900" />
                    <span className="font-semibold">All</span>
                  </div>
                </th>
                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Image</th>
                <th className="px-4 py-2 border text-left">
                  <button onClick={handleSort} className="flex items-center justify-between w-full gap-1">
                    <h1> Title </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "name" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>
                <th className="px-4 py-2 border text-left">
                  <button onClick={handleemail} className="flex items-center justify-between w-full gap-1">
                    <h1> Experies In </h1>
                    <div className="flex flex-col">
                      <TbTriangleFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "email" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
                        }`}
                      />
                      <TbTriangleInvertedFilled
                        className={`transition-colors text-[.5rem] ${
                          sortColumn === "email" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
                        }`}
                      />
                    </div>
                  </button>
                </th>

                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Status</th>
                <th className="px-4 py-2 border text-left bg-[#F8FAFD]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedRoles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border w-10 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRoles.has(startIndex + index)}
                      onChange={() => handleRoleSelection(startIndex + index)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="px-4 py-2 border  text-center">
                    <img
                      src={role.img}
                      alt=""
                      className="rounded-md w-12
                  h-12"
                    />
                  </td>
                  <td className="px-4 py-2 border text-left text-primary-900 text-sm hover:text-black">
                    <Link to="/gift-edit">{role.name}</Link>
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm ">{role.expireday}</td>
                  <td className="px-4 py-2 border text-left">
                    <div className="flex items-center justify-center ">
                      <div
                        onClick={() => {
                          const updatedRoles = [...roles]
                          updatedRoles[startIndex + index].publish = !updatedRoles[startIndex + index].publish
                          setRoles(updatedRoles)
                        }}
                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                          role.publish ? "bg-[#008000]" : "bg-primary-900"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                            role.publish ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 border space-x-2 text-center">
                    <Link to="/gift-edit">
                      <button>
                        <MdModeEdit className="p-1 bg-[#008000] text-[1.6rem] rounded-full text-white" />
                      </button>
                    </Link>
                    <button>
                      <FaTrashAlt className="p-1 text-[1.6rem]  rounded-full text-white bg-primary-900" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </>
  )
}

export default GiftCard
