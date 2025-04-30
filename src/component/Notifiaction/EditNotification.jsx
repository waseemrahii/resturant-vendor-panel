import { FaFileInvoice } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"
import TitleHead from "../Header/TitleHead"

const EditNotification = () => {
  return (
    <>
      <TitleHead
        title="Edit Notification"
        desc="Edit Notification"
        desc2={"> Notification "}
        link={"/notifications/app"}
      />
      <div className="  p-4 bg-white rounded flex flex-col items-center justify-center mx-2">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Notifaction
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-4 col-span-1">
              <label className="block text-sm font-semibold mb-2" htmlFor="code">
                Type
              </label>
              <input
                type="text"
                id="code"
                name="code"
                placeholder="Schedule Order"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-sm font-semibold mb-2" htmlFor="code">
                Subject
              </label>
              <input
                type="text"
                id="code"
                placeholder="Schedule Order"
                name="code"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4 col-span-1">
              <label className="block text-sm font-semibold mb-2" htmlFor="discount">
                Message
              </label>
              <input
                type="text"
                id="code"
                placeholder="You have a new schedule order"
                name="code"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
          <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base">
            <FaFileInvoice /> Save
          </button>
          <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base">
            <FaArrowRotateLeft /> Back
          </button>
        </div>
      </div>
    </>
  )
}

export default EditNotification
