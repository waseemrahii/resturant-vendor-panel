"use client"
import { useForm } from "react-hook-form"
import { FaFileInvoice } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"
import TitleHead from "../Header/TitleHead"

const CreateNotification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <>
      <TitleHead
        title="Create Notification"
        desc="Create Notification"
        desc2={"> Notification "}
        link={"/notifications/send"}
      />

      <div className="p-4 mx-2 w-full bg-white rounded ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center justify-center">
          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Notification
            </legend>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>
              <div className="mb-4 col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <div className="mb-4 col-span-1">
                <label className="block text-sm font-semibold mb-2" htmlFor="sendTo">
                  Send To
                </label>
                <select
                  id="sendTo"
                  {...register("sendTo", {
                    required: "Select recipient is required",
                  })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  <option value="">Select an option</option>
                  <option value="vendor">Vendor</option>
                  <option value="customer">Customer</option>
                  <option value="driver">Driver</option>
                </select>
                {errors.sendTo && <p className="text-red-500 text-sm">{errors.sendTo.message}</p>}
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
            >
              <FaFileInvoice /> Save
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
            >
              <FaArrowRotateLeft /> Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateNotification
