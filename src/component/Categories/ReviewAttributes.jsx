"use client"

//validation done

import { useState } from "react"
import SaveBackButton from "./SaveBackButton"

const ReviewAttributes = () => {
  const options = [
    { name: "foodQuality", label: "Food quality" },
    { name: "politeBehaviour", label: "Polite behaviour" },
    { name: "textureOfFood", label: "Texture Of Food" },
    { name: "hygienicFood", label: "Hygienic Food" },
    { name: "packingOfFood", label: "Packing of the food" },
    { name: "quantityOfFood", label: "Quantity of Food" },
  ]

  const [selectedOptions, setSelectedOptions] = useState(
    options.map((option) => ({
      name: option.name,
      checked: option.name === "politeBehaviour" || option.name === "hygienicFood",
    })),
  )

  const handleCheckboxChange = (index) => {
    const updatedOptions = [...selectedOptions]
    updatedOptions[index].checked = !updatedOptions[index].checked
    setSelectedOptions(updatedOptions)
  }

  const handleSave = () => {
    if (selectedOptions.some((option) => option.checked)) {
      console.log("Saved", selectedOptions)
    } else {
      alert("Please select at least one attribute.")
    }
  }

  const handleBack = () => {
    console.log("Back")
  }

  const isSaveDisabled = !selectedOptions.some((option) => option.checked)

  return (
    <div className="p-4 space-y-2 mt-3 bg-white rounded shadow-md  mx-2 hover:shadow-lg">
      {options.map((option, index) => (
        <div key={option.name} className="">
          <div>
            <input
              type="checkbox"
              checked={selectedOptions[index].checked}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2 w-4 h-4"
            />
            <label className="text[.7rem] md:text-[1rem]">{option.label}</label>
          </div>
        </div>
      ))}
      {/* <BottomButton /> */}
      <div className="flex space-x-2 mt-4">
        <SaveBackButton
          onClick={handleSave}
          className="bg-red-500 text-white hover:bg-red-600"
          disabled={isSaveDisabled}
        >
          <i className="fas fa-save mr-2"></i> Save
        </SaveBackButton>
        <SaveBackButton onClick={handleBack} className="bg-gray-500 text-white hover:bg-gray-600">
          <i className="fas fa-undo mr-2"></i> Back
        </SaveBackButton>
      </div>
    </div>
  )
}

export default ReviewAttributes
