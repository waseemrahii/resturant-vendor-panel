"use client"
import { MdDelete } from "react-icons/md"
import { IoIosDocument } from "react-icons/io"
import { Switch } from "@mui/material"
import { Link } from "react-router-dom"

const Accordion = ({ handleShowAlert, vendor }) => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-4">
        <p className=" text-[.7rem] md:text-[1rem] font-semibold ">Action :</p>
        <div className=" bg-primary-900 rounded-full p-1">
          <MdDelete
            className="text-white text-[1rem] cursor-pointer"
            onClick={() => handleShowAlert("This is for demo, We can not allow to update content")}
          />
        </div>
      </div>
      {/* Additional vendor information for small screens */}
      <div className="sm:hidden mt-4">
        <p className="text-gray-600">Email: {vendor.email}</p>
        <p className="text-gray-600">Date: {vendor.date}</p>
        <p className="text-gray-600">
          Documents:
          {vendor.documents ? (
            <Link to="/document-list">
              <IoIosDocument className="text-[1rem] ml-2 cursor-pointer text-[#257FFF]" />
            </Link>
          ) : (
            " No"
          )}
        </p>
        <div className="flex items-center mt-2">
          <p className="text-gray-600 mr-2">Active:</p>
          <Switch
            checked={vendor.active}
            onChange={() => handleToggleActive(vendor.id)}
            sx={{ transform: "scale(1.2)" }} // Adjust the scale value to increase size
          />
        </div>
      </div>
    </div>
  )
}

export default Accordion
