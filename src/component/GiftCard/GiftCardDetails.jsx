"use client"
import { useForm, Controller } from "react-hook-form"
import PropTypes from "prop-types"
import BottomButton from "../AllCards/BottomButton"
import TitleHead from "../Header/TitleHead"

const GiftCardDetails = ({ title, msg, expirydate, status, image }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title || "",
      msg: msg || "",
      expirydate: expirydate || "",
      status: status || false,
      image: image || "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form Data:", data)
  }

  return (
    <div>
      <TitleHead title={"Edit Gift Card"} desc={"Edit Gift Card"} desc2={"> Gift Card"} link={"/gift-cards"} />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            GiftCard
          </legend>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[1rem] font-semibold mb-2">Title</label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
                    errors.title ? "border-red-500" : ""
                  }`}
                  placeholder="Enter title"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

              <div>
                <label className="block text-[1rem] font-semibold mb-2">Message</label>
                <textarea
                  {...register("msg")}
                  className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
                  placeholder="Enter message"
                ></textarea>
              </div>

              <div className="mt-4">
                <label className="block text-[1rem] font-semibold mb-2">Image</label>
                <input
                  type="file"
                  {...register("image")}
                  className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
                />
                <p className="text-gray-400 text-[.7rem]">Insert Image in SVG</p>
                {image && <div className="w-16">{image}</div>}
              </div>

              <div>
                <label className="block text-[1rem] font-semibold mb-2">Expiry Date</label>
                <select
                  {...register("expirydate")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  {/* Options should be dynamically populated */}
                  <option value="">Select an expiry date</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => <input type="checkbox" {...field} className="h-4 w-4" />}
                />
                <label className="block text-[1rem] font-semibold mb-2">Status</label>
              </div>
            </div>
            <BottomButton />
          </form>
        </fieldset>
      </div>
    </div>
  )
}

GiftCardDetails.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
  expirydate: PropTypes.string,
  status: PropTypes.bool,
  image: PropTypes.string,
}

export default GiftCardDetails
