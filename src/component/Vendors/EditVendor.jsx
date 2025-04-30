"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  FaStore,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUtensils,
  FaImage,
  FaInfoCircle,
  FaMoneyBillWave,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa"
import PageHeader from "../common/PageHeader"

const EditVendor = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5 // Now 5 steps including review
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    cuisine: "",
    description: "",
    logo: null,
    coverImage: null,
    status: "pending",

    // Location & Hours
    latitude: "",
    longitude: "",
    openingTime: "08:00",
    closingTime: "22:00",
    deliveryRadius: "5",

    // Services & Features
    services: {
      delivery: true,
      takeaway: true,
      dineIn: false,
      reservation: false,
    },

    // Financial Details
    commissionRate: "10",
    minimumOrderAmount: "10",
    deliveryFee: "5",
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    taxID: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewLogo, setPreviewLogo] = useState(null)
  const [previewCover, setPreviewCover] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleServiceToggle = (service) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: !formData.services[service],
      },
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      })

      // Create preview URL
      const previewUrl = URL.createObjectURL(files[0])
      if (name === "logo") {
        setPreviewLogo(previewUrl)
      } else if (name === "coverImage") {
        setPreviewCover(previewUrl)
      }
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
      if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
      if (!formData.address.trim()) newErrors.address = "Address is required"
      if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"
    } else if (step === 2) {
      if (!formData.openingTime) newErrors.openingTime = "Opening time is required"
      if (!formData.closingTime) newErrors.closingTime = "Closing time is required"
      if (!formData.deliveryRadius) newErrors.deliveryRadius = "Delivery radius is required"
    } else if (step === 3) {
      // No required fields for services
    } else if (step === 4) {
      if (!formData.commissionRate) newErrors.commissionRate = "Commission rate is required"
      if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
    }

    return newErrors
  }

  const nextStep = () => {
    const newErrors = validateStep(currentStep)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Only process submission if explicitly submitted via the submit button
    if (e.nativeEvent.submitter && e.nativeEvent.submitter.type === "submit") {
      const newErrors = validateStep(currentStep)
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }

      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData)
        setIsSubmitting(false)
        // Show success message
        alert("Vendor created successfully!")
        // Redirect to vendors list
        navigate("/vendors/all")
      }, 1500)
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-between mb-8">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 === currentStep
                  ? "bg-primary-900 text-white"
                  : i + 1 < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {i + 1 < currentStep ? <FaCheck /> : i + 1}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {i === 0 ? "Basic Info" : i === 1 ? "Location" : i === 2 ? "Services" : i === 3 ? "Financial" : "Review"}
            </p>
          </div>
        ))}
      </div>
    )
  }

  const renderBasicInfoStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaInfoCircle className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaStore className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter restaurant name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.ownerName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter owner name"
              />
            </div>
            {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter email address"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter phone number"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="Enter restaurant address"
              />
            </div>
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          {/* Cuisine */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUtensils className="text-gray-400" />
              </div>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.cuisine ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } focus:border-primary-500 p-2.5 transition duration-150`}
                placeholder="E.g., Italian, Chinese, Indian"
              />
            </div>
            {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              placeholder="Enter restaurant description"
            ></textarea>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {previewLogo ? (
                  <img
                    src={previewLogo || "/placeholder.svg"}
                    alt="Logo Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaImage className="text-gray-400 text-3xl" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  name="logo"
                  onChange={handleFileChange}
                  className="hidden"
                  id="logo-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="logo-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                  Choose Logo
                </label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                {previewCover ? (
                  <img
                    src={previewCover || "/placeholder.svg"}
                    alt="Cover Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaImage className="text-gray-400 text-3xl" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  name="coverImage"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cover-upload"
                  accept="image/*"
                />
                <label
                  htmlFor="cover-upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                >
                  <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                  Choose Cover
                </label>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderLocationStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaMapMarkerAlt className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map Preview (Placeholder) */}

          {/* Latitude */}

          {/* Longitude */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
              placeholder="E.g., -74.0060"
            />
          </div> */}

          {/* Opening Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaClock className="text-gray-400" />
              </div>
              <input
                type="time"
                name="openingTime"
                value={formData.openingTime}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.openingTime ? "border-red-300" : "border-gray-300"
                } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
              />
            </div>
            {errors.openingTime && <p className="mt-1 text-sm text-red-600">{errors.openingTime}</p>}
          </div>

          {/* Closing Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaClock className="text-gray-400" />
              </div>
              <input
                type="time"
                name="closingTime"
                value={formData.closingTime}
                onChange={handleChange}
                className={`pl-10 w-full rounded-md border ${
                  errors.closingTime ? "border-red-300" : "border-gray-300"
                } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
              />
            </div>
            {errors.closingTime && <p className="mt-1 text-sm text-red-600">{errors.closingTime}</p>}
          </div>

          {/* Delivery Radius */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)*</label>
            <input
              type="number"
              name="deliveryRadius"
              value={formData.deliveryRadius}
              onChange={handleChange}
              min="1"
              max="50"
              className={`w-full rounded-md border ${
                errors.deliveryRadius ? "border-red-300" : "border-gray-300"
              } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
            />
            {errors.deliveryRadius && <p className="mt-1 text-sm text-red-600">{errors.deliveryRadius}</p>}
          </div>
        </div>
      </div>
    )
  }

  const renderServicesStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaUtensils className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Available Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Delivery Service */}
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="delivery"
                checked={formData.services.delivery}
                onChange={() => handleServiceToggle("delivery")}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Delivery Service</span>
                <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
              </label>
            </div>

            {/* Takeaway Service */}
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="takeaway"
                checked={formData.services.takeaway}
                onChange={() => handleServiceToggle("takeaway")}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
                <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
              </label>
            </div>

            {/* Dine-In Service */}
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="dineIn"
                checked={formData.services.dineIn}
                onChange={() => handleServiceToggle("dineIn")}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
                <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
              </label>
            </div>

            {/* Reservation Service */}
            <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="reservation"
                checked={formData.services.reservation}
                onChange={() => handleServiceToggle("reservation")}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Table Reservation</span>
                <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
          <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
            <p className="text-xs text-blue-600 mt-1">
              The selected services will be available to customers when ordering from this restaurant. You can change
              these settings later from the restaurant profile page.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderFinancialStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaMoneyBillWave className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Commission Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
            <input
              type="number"
              name="commissionRate"
              value={formData.commissionRate}
              onChange={handleChange}
              min="0"
              max="100"
              className={`w-full rounded-md border ${
                errors.commissionRate ? "border-red-300" : "border-gray-300"
              } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
            />
            {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
            <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
          </div>

          {/* Minimum Order Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
            <input
              type="number"
              name="minimumOrderAmount"
              value={formData.minimumOrderAmount}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={`w-full rounded-md border ${
                errors.minimumOrderAmount ? "border-red-300" : "border-gray-300"
              } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
            />
            {errors.minimumOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minimumOrderAmount}</p>}
            <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
          </div>

          {/* Delivery Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee ($)</label>
            <input
              type="number"
              name="deliveryFee"
              value={formData.deliveryFee}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
            />
            <p className="mt-1 text-xs text-gray-500">Fee charged to customers for delivery service</p>
          </div>

          {/* Bank Details Section */}
          <div className="md:col-span-2 mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Bank Account Details
            </h3>
          </div>

          {/* Bank Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
              placeholder="Enter bank name"
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
              placeholder="Enter account number"
            />
          </div>

          {/* Account Holder Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
              placeholder="Enter account holder name"
            />
          </div>

          {/* Tax ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
            <input
              type="text"
              name="taxID"
              value={formData.taxID}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
              placeholder="Enter tax ID or VAT number"
            />
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start mt-6">
          <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
            <p className="text-xs text-yellow-600 mt-1">
              Bank account details are required for processing payouts to the restaurant. Make sure all information is
              accurate to avoid payment delays.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaCheck className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
          <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
            <p className="text-xs text-green-600 mt-1">
              Please review all information below before submitting. Once submitted, you can still edit the vendor
              details later.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
                <p className="text-sm text-gray-900">{formData.name || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Owner Name</p>
                <p className="text-sm text-gray-900">{formData.ownerName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{formData.email || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">{formData.phone || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-sm text-gray-900">{formData.address || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
                <p className="text-sm text-gray-900">{formData.cuisine || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Opening Time</p>
                <p className="text-sm text-gray-900">{formData.openingTime || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Closing Time</p>
                <p className="text-sm text-gray-900">{formData.closingTime || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Delivery Radius</p>
                <p className="text-sm text-gray-900">
                  {formData.deliveryRadius ? `${formData.deliveryRadius} km` : "Not provided"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Delivery</p>
                <p className="text-sm text-gray-900">{formData.services.delivery ? "Yes" : "No"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Takeaway</p>
                <p className="text-sm text-gray-900">{formData.services.takeaway ? "Yes" : "No"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Dine-In</p>
                <p className="text-sm text-gray-900">{formData.services.dineIn ? "Yes" : "No"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Reservation</p>
                <p className="text-sm text-gray-900">{formData.services.reservation ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Commission Rate</p>
                <p className="text-sm text-gray-900">
                  {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
                <p className="text-sm text-gray-900">
                  {formData.minimumOrderAmount ? `$${formData.minimumOrderAmount}` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Delivery Fee</p>
                <p className="text-sm text-gray-900">
                  {formData.deliveryFee ? `$${formData.deliveryFee}` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Bank Name</p>
                <p className="text-sm text-gray-900">{formData.bankName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Account Holder</p>
                <p className="text-sm text-gray-900">{formData.accountHolderName || "Not provided"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      <PageHeader
        title="Edit Vendor"
        description="Add a new restaurant to the platform"
        actions={[
          {
            label: "Cancel",
            onClick: () => navigate("/vendors/all"),
            variant: "outline",
          },
        ]}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        {renderStepIndicator()}

        {/* Notice we're NOT using a form element here */}
        <div>
          {currentStep === 1 && renderBasicInfoStep()}
          {currentStep === 2 && renderLocationStep()}
          {currentStep === 3 && renderServicesStep()}
          {currentStep === 4 && renderFinancialStep()}
          {currentStep === 5 && renderReviewStep()}

          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/vendors/all")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                Cancel
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Next
                <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  if (isSubmitting) return

                  const newErrors = validateStep(currentStep)
                  if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors)
                    return
                  }

                  setIsSubmitting(true)

                  // Simulate API call
                  setTimeout(() => {
                    console.log("Form submitted:", formData)
                    setIsSubmitting(false)
                    // Show success message
                    alert("Vendor created successfully!")
                    // Redirect to vendors list
                    navigate("/vendors/all")
                  }, 1500)
                }}
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <FaCheck className="mr-2 -ml-1 h-5 w-5" />
                    Create Vendor
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditVendor
