// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const DeliveryCharges = () => {
//   return (
//     <>
//       <TitleHead title={"Delivery Charge"} desc={"Delivery Charge"} />
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Delivery Charges
//           </legend>
//           <div className="bg-white p-4 space-y-4">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="vendorModify"
//                 className="form-checkbox"
//               />
//               <label
//                 htmlFor="vendorModify"
//                 className="block text-gray-700 font-semibold text-[1rem] "
//               >
//                 Vendor Can Modify
//               </label>
//             </div>
//             <div>
//               <label
//                 htmlFor="deliveryCharges"
//                 className="block text-gray-700 font-semibold text-[1rem] my-3"
//               >
//                 Delivery Charges Per km
//               </label>
//               <input
//                 type="number"
//                 id="deliveryCharges"
//                 defaultValue={3}
//                 className="w-full p-2 bg-[#F5F5F5] border rounded"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="minDeliveryCharges"
//                 className="block text-gray-700 font-semibold text-[1rem] my-3"
//               >
//                 Minimum Delivery Charges
//               </label>
//               <input
//                 type="number"
//                 id="minDeliveryCharges"
//                 defaultValue={10}
//                 className="w-full p-2 bg-[#F5F5F5] border rounded"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="minDeliveryKm"
//                 className="block text-gray-700 font-semibold text-[1rem] my-3"
//               >
//                 Minimum Delivery Charges Within Km
//               </label>
//               <input
//                 type="number"
//                 id="minDeliveryKm"
//                 defaultValue={3}
//                 className="w-full p-2 bg-[#F5F5F5] border rounded"
//               />
//             </div>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default DeliveryCharges;

"use client"

import { useState } from "react"
import { FaTruck, FaRuler, FaDollarSign, FaSave, FaUndo } from "react-icons/fa"

const DeliveryCharges = () => {
  const [vendorCanModify, setVendorCanModify] = useState(false)
  const [deliveryChargesPerKm, setDeliveryChargesPerKm] = useState(3)
  const [minDeliveryCharges, setMinDeliveryCharges] = useState(10)
  const [minDeliveryKm, setMinDeliveryKm] = useState(3)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleToggleVendorModify = () => {
    setVendorCanModify(!vendorCanModify)
    setIsFormDirty(true)
  }

  const handleDeliveryChargesPerKmChange = (e) => {
    setDeliveryChargesPerKm(e.target.value)
    setIsFormDirty(true)
  }

  const handleMinDeliveryChargesChange = (e) => {
    setMinDeliveryCharges(e.target.value)
    setIsFormDirty(true)
  }

  const handleMinDeliveryKmChange = (e) => {
    setMinDeliveryKm(e.target.value)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setVendorCanModify(false)
    setDeliveryChargesPerKm(3)
    setMinDeliveryCharges(10)
    setMinDeliveryKm(3)
    setIsFormDirty(false)
  }

  const handleSave = () => {
    // Save logic would go here
    alert("Settings saved successfully!")
    setIsFormDirty(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <FaTruck className="mr-2" /> Delivery Charges Settings
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure how delivery charges are calculated</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={vendorCanModify}
                  onChange={handleToggleVendorModify}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                <span className="ml-3 text-gray-700 font-medium">Vendor Can Modify</span>
              </label>
              <div className="ml-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {vendorCanModify ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FaRuler className="text-primary-900 mr-2" />
                  <h3 className="text-sm font-medium text-gray-700">Delivery Charge Configuration</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="deliveryChargesPerKm" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Charges Per km
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaDollarSign className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="deliveryChargesPerKm"
                        name="deliveryChargesPerKm"
                        value={deliveryChargesPerKm}
                        onChange={handleDeliveryChargesPerKmChange}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Amount charged per kilometer for delivery distance</p>
                  </div>

                  <div>
                    <label htmlFor="minDeliveryCharges" className="block text-sm font-medium text-gray-700 mb-1">
                      Minimum Delivery Charges
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaDollarSign className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="minDeliveryCharges"
                        name="minDeliveryCharges"
                        value={minDeliveryCharges}
                        onChange={handleMinDeliveryChargesChange}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum amount charged for delivery regardless of distance
                    </p>
                  </div>

                  <div>
                    <label htmlFor="minDeliveryKm" className="block text-sm font-medium text-gray-700 mb-1">
                      Minimum Delivery Charges Within Km
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaRuler className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="minDeliveryKm"
                        name="minDeliveryKm"
                        value={minDeliveryKm}
                        onChange={handleMinDeliveryKmChange}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum delivery charges apply within this distance (km)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                disabled={!isFormDirty}
              >
                <FaUndo className="mr-2 -ml-1" />
                Reset
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                disabled={!isFormDirty}
              >
                <FaSave className="mr-2 -ml-1" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryCharges
