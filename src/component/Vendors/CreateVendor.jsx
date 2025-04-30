// // // import { useState, useEffect, useRef } from "react"
// // // import { useParams, useNavigate, useLocation } from "react-router-dom"
// // // import { useForm } from "react-hook-form"
// // // import {
// // //   FaSave,
// // //   FaArrowLeft,
// // //   FaStore,
// // //   FaImage,
// // //   FaTrash,
// // //   FaPhone,
// // //   FaMapMarkerAlt,
// // //   FaClock,
// // //   FaMoneyBillWave,
// // //   FaPercent,
// // //   FaCheck,
// // //   FaTimes,
// // //   FaEye,
// // // } from "react-icons/fa"
// // // import { toast } from "react-toastify"
// // // import TitleHead from "../Header/TitleHead"

// // // const CreateVendor = () => {
// // //   const { id } = useParams()
// // //   const navigate = useNavigate()
// // //   const location = useLocation()
// // //   const isViewMode = location.pathname.includes("/vendors/view/")
// // //   const isEditMode = location.pathname.includes("/vendors/edit/") && !isViewMode
// // //   const [loading, setLoading] = useState(isEditMode || isViewMode)
// // //   const [isSaving, setIsSaving] = useState(false)
// // //   const [vendorImage, setVendorImage] = useState(null)
// // //   const [previewUrl, setPreviewUrl] = useState("")
// // //   const [isDragging, setIsDragging] = useState(false)
// // //   const [galleryImages, setGalleryImages] = useState([])
// // //   const [activeTab, setActiveTab] = useState("basic")
// // //   const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
// // //   const fileInputRef = useRef(null)
// // //   const galleryInputRef = useRef(null)
// // //   const dropAreaRef = useRef(null)

// // //   // Handle window resize for responsive design
// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       setIsMobile(window.innerWidth < 768)
// // //     }

// // //     window.addEventListener("resize", handleResize)
// // //     return () => window.removeEventListener("resize", handleResize)
// // //   }, [])

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //     reset,
// // //     watch,
// // //     setValue,
// // //   } = useForm({
// // //     defaultValues: {
// // //       name: "",
// // //       email: "",
// // //       phone: "",
// // //       address: "",
// // //       description: "",
// // //       cuisineType: "",
// // //       zone: "",
// // //       latitude: "",
// // //       longitude: "",
// // //       minOrderAmount: "",
// // //       deliveryFee: "",
// // //       commissionRate: "",
// // //       preparationTime: "",
// // //       openingTime: "",
// // //       closingTime: "",
// // //       isActive: true,
// // //       isApproved: false,
// // //       isPending: true,
// // //       isRejected: false,
// // //       isSuspended: false,
// // //       bankName: "",
// // //       accountNumber: "",
// // //       accountHolderName: "",
// // //       taxId: "",
// // //     },
// // //   })

// // //   const vendorStatus = watch("isActive")
// // //   const approvalStatus = {
// // //     isApproved: watch("isApproved"),
// // //     isPending: watch("isPending"),
// // //     isRejected: watch("isRejected"),
// // //     isSuspended: watch("isSuspended"),
// // //   }

// // //   useEffect(() => {
// // //     if (id) {
// // //       // Simulate API call to fetch vendor data
// // //       setLoading(true)
// // //       setTimeout(() => {
// // //         // Mock data for editing/viewing
// // //         const mockVendor = {
// // //           id,
// // //           name: "Tasty Bites Restaurant",
// // //           email: "contact@tastybites.com",
// // //           phone: "+1 (555) 987-6543",
// // //           address: "456 Food Street, Culinary District",
// // //           description:
// // //             "Serving delicious international cuisine with a modern twist. Our chefs use only the freshest ingredients to create memorable dining experiences.",
// // //           cuisineType: "International",
// // //           zone: "Downtown",
// // //           latitude: "37.7749",
// // //           longitude: "-122.4194",
// // //           minOrderAmount: "15.00",
// // //           deliveryFee: "3.99",
// // //           commissionRate: "15",
// // //           preparationTime: "30",
// // //           openingTime: "09:00",
// // //           closingTime: "22:00",
// // //           isActive: true,
// // //           isApproved: isEditMode ? true : false,
// // //           isPending: isEditMode ? false : true,
// // //           isRejected: false,
// // //           isSuspended: false,
// // //           bankName: "First National Bank",
// // //           accountNumber: "XXXX-XXXX-XXXX-1234",
// // //           accountHolderName: "Tasty Bites LLC",
// // //           taxId: "TAX-12345678",
// // //         }
// // //         reset(mockVendor)
// // //         setPreviewUrl(
// // //           "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
// // //         )

// // //         // Set mock gallery images
// // //         setGalleryImages([
// // //           {
// // //             id: 1,
// // //             url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // //           },
// // //           {
// // //             id: 2,
// // //             url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // //           },
// // //           {
// // //             id: 3,
// // //             url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
// // //           },
// // //         ])

// // //         setLoading(false)
// // //         toast.info(`${isViewMode ? "Viewing" : "Editing"} vendor: ${mockVendor.name}`)
// // //       }, 800)
// // //     }
// // //   }, [id, isEditMode, isViewMode, reset])

// // //   const onSubmit = (data) => {
// // //     if (isViewMode) return

// // //     setIsSaving(true)

// // //     // Create form data to include the image
// // //     const formData = new FormData()
// // //     for (const key in data) {
// // //       formData.append(key, data[key])
// // //     }
// // //     if (vendorImage) {
// // //       formData.append("vendorImage", vendorImage)
// // //     }

// // //     // Add gallery images
// // //     galleryImages.forEach((image, index) => {
// // //       if (image.file) {
// // //         formData.append(`galleryImage_${index}`, image.file)
// // //       }
// // //     })

// // //     // Simulate API call
// // //     setTimeout(() => {
// // //       console.log("Form Data:", data)
// // //       console.log("Vendor Image:", vendorImage)
// // //       console.log("Gallery Images:", galleryImages)
// // //       setIsSaving(false)
// // //       toast.success(`Vendor ${isEditMode ? "updated" : "created"} successfully!`)
// // //       navigate("/vendors/all")
// // //     }, 1000)
// // //   }

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0]
// // //     if (file) {
// // //       processFile(file)
// // //     }
// // //   }

// // //   const processFile = (file) => {
// // //     if (file && file.type.startsWith("image/")) {
// // //       setVendorImage(file)
// // //       const reader = new FileReader()
// // //       reader.onloadend = () => {
// // //         setPreviewUrl(reader.result)
// // //       }
// // //       reader.readAsDataURL(file)
// // //     } else {
// // //       toast.error("Please select a valid image file")
// // //     }
// // //   }

// // //   const triggerFileInput = () => {
// // //     fileInputRef.current.click()
// // //   }

// // //   const handleDragEnter = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(true)
// // //   }

// // //   const handleDragLeave = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(false)
// // //   }

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //   }

// // //   const handleDrop = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(false)

// // //     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
// // //       processFile(e.dataTransfer.files[0])
// // //     }
// // //   }

// // //   const removeImage = () => {
// // //     setVendorImage(null)
// // //     setPreviewUrl("")
// // //   }

// // //   const handleGalleryImageChange = (e) => {
// // //     const files = Array.from(e.target.files)

// // //     if (files.length > 0) {
// // //       const newImages = files.map((file) => {
// // //         const reader = new FileReader()
// // //         return new Promise((resolve) => {
// // //           reader.onloadend = () => {
// // //             resolve({
// // //               id: Date.now() + Math.random(),
// // //               url: reader.result,
// // //               file,
// // //             })
// // //           }
// // //           reader.readAsDataURL(file)
// // //         })
// // //       })

// // //       Promise.all(newImages).then((images) => {
// // //         setGalleryImages((prev) => [...prev, ...images])
// // //       })
// // //     }
// // //   }

// // //   const removeGalleryImage = (id) => {
// // //     setGalleryImages((prev) => prev.filter((image) => image.id !== id))
// // //   }

// // //   const triggerGalleryInput = () => {
// // //     galleryInputRef.current.click()
// // //   }

// // //   const handleStatusChange = (status) => {
// // //     // Reset all status flags
// // //     setValue("isApproved", false)
// // //     setValue("isPending", false)
// // //     setValue("isRejected", false)
// // //     setValue("isSuspended", false)

// // //     // Set the selected status
// // //     setValue(status, true)
// // //   }

// // //   if (loading) {
// // //     return (
// // //       <div className="p-8">
// // //         <div className="animate-pulse">
// // //           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
// // //           <div className="h-12 bg-gray-200 rounded mb-4"></div>
// // //           <div className="h-12 bg-gray-200 rounded mb-4"></div>
// // //           <div className="h-12 bg-gray-200 rounded"></div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <>
// // //       <TitleHead
// // //         title={isViewMode ? "Vendor Details" : isEditMode ? "Edit Vendor" : "Create Vendor"}
// // //         desc={isViewMode ? "View Vendor Details" : isEditMode ? "Edit Vendor" : "Create Vendor"}
// // //         link="/vendors/all"
// // //         desc2="> Vendors"
// // //       />

// // //       <div className="p-4 mx-auto">
// // //         <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg overflow-hidden">
// // //           {/* Header */}
// // //           <div className="bg-primary-900 p-4 md:p-6 text-white">
// // //             <div className="flex items-center">
// // //               {isViewMode ? (
// // //                 <FaEye className="text-2xl md:text-3xl mr-3" />
// // //               ) : (
// // //                 <FaStore className="text-2xl md:text-3xl mr-3" />
// // //               )}
// // //               <h1 className="text-xl md:text-2xl font-bold">
// // //                 {isViewMode ? "Vendor Details" : isEditMode ? "Edit Vendor" : "Create New Vendor"}
// // //               </h1>
// // //             </div>
// // //           </div>

// // //           {/* Tabs - Scrollable on mobile */}
// // //           <div className="bg-gray-100 px-4 py-2 border-b overflow-x-auto">
// // //             <div className="flex -mb-px min-w-max">
// // //               <button
// // //                 type="button"
// // //                 className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
// // //                   activeTab === "basic"
// // //                     ? "border-primary-900 text-primary-900"
// // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setActiveTab("basic")}
// // //               >
// // //                 Basic Information
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
// // //                   activeTab === "gallery"
// // //                     ? "border-primary-900 text-primary-900"
// // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setActiveTab("gallery")}
// // //               >
// // //                 Gallery
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
// // //                   activeTab === "business"
// // //                     ? "border-primary-900 text-primary-900"
// // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setActiveTab("business")}
// // //               >
// // //                 Business Details
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
// // //                   activeTab === "banking"
// // //                     ? "border-primary-900 text-primary-900"
// // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setActiveTab("banking")}
// // //               >
// // //                 Banking Information
// // //               </button>
// // //               <button
// // //                 type="button"
// // //                 className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
// // //                   activeTab === "status"
// // //                     ? "border-primary-900 text-primary-900"
// // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // //                 }`}
// // //                 onClick={() => setActiveTab("status")}
// // //               >
// // //                 Status
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="p-4 md:p-6">
// // //             {/* Basic Information Tab */}
// // //             {activeTab === "basic" && (
// // //               <div className="space-y-6">
// // //                 {/* Vendor Logo/Image */}
// // //                 <div className="flex flex-col items-center mb-8">
// // //                   <div
// // //                     ref={dropAreaRef}
// // //                     className={`w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 ${
// // //                       isDragging ? "border-primary-500 bg-primary-50" : "border-gray-200"
// // //                     } mb-4 relative transition-all duration-200 ease-in-out ${!isViewMode ? "cursor-pointer" : ""}`}
// // //                     onClick={!isViewMode ? triggerFileInput : undefined}
// // //                     onDragEnter={!isViewMode ? handleDragEnter : undefined}
// // //                     onDragLeave={!isViewMode ? handleDragLeave : undefined}
// // //                     onDragOver={!isViewMode ? handleDragOver : undefined}
// // //                     onDrop={!isViewMode ? handleDrop : undefined}
// // //                   >
// // //                     {previewUrl ? (
// // //                       <img src={previewUrl || "/placeholder.svg"} alt="Vendor" className="w-full h-full object-cover" />
// // //                     ) : (
// // //                       <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4">
// // //                         <FaImage className="text-gray-400 text-4xl mb-2" />
// // //                         <p className="text-gray-500 text-xs text-center">
// // //                           {isDragging ? "Drop image here" : "Upload vendor logo"}
// // //                         </p>
// // //                       </div>
// // //                     )}

// // //                     {previewUrl && !isViewMode && (
// // //                       <button
// // //                         type="button"
// // //                         onClick={(e) => {
// // //                           e.stopPropagation()
// // //                           removeImage()
// // //                         }}
// // //                         className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
// // //                       >
// // //                         <FaTrash className="text-sm" />
// // //                       </button>
// // //                     )}
// // //                   </div>

// // //                   <input
// // //                     type="file"
// // //                     ref={fileInputRef}
// // //                     onChange={handleImageChange}
// // //                     accept="image/*"
// // //                     className="hidden"
// // //                     disabled={isViewMode}
// // //                   />

// // //                   {!isViewMode && (
// // //                     <div className="text-center">
// // //                       <p className="text-sm text-gray-500 mb-1">
// // //                         {previewUrl ? "Click to change logo" : "Click to upload or drag & drop"}
// // //                       </p>
// // //                       <p className="text-xs text-gray-400">Supports JPG, PNG, GIF up to 5MB</p>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
// // //                       Restaurant Name*
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                         errors.name ? "border-red-500" : "border-gray-300"
// // //                       } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="name"
// // //                       type="text"
// // //                       placeholder="Enter restaurant name"
// // //                       {...register("name", { required: "Restaurant name is required" })}
// // //                       disabled={isViewMode}
// // //                     />
// // //                     {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
// // //                       Email Address*
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                         errors.email ? "border-red-500" : "border-gray-300"
// // //                       } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="email"
// // //                       type="email"
// // //                       placeholder="Enter email address"
// // //                       {...register("email", {
// // //                         required: "Email is required",
// // //                         pattern: {
// // //                           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
// // //                           message: "Invalid email address",
// // //                         },
// // //                       })}
// // //                       disabled={isViewMode}
// // //                     />
// // //                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
// // //                       Phone Number*
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaPhone className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                           errors.phone ? "border-red-500" : "border-gray-300"
// // //                         } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="phone"
// // //                         type="text"
// // //                         placeholder="Enter phone number"
// // //                         {...register("phone", { required: "Phone number is required" })}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                     {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="cuisineType">
// // //                       Cuisine Type*
// // //                     </label>
// // //                     <select
// // //                       className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                         errors.cuisineType ? "border-red-500" : "border-gray-300"
// // //                       } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="cuisineType"
// // //                       {...register("cuisineType", { required: "Cuisine type is required" })}
// // //                       disabled={isViewMode}
// // //                     >
// // //                       <option value="">Select Cuisine Type</option>
// // //                       <option value="Italian">Italian</option>
// // //                       <option value="Chinese">Chinese</option>
// // //                       <option value="Indian">Indian</option>
// // //                       <option value="Mexican">Mexican</option>
// // //                       <option value="Japanese">Japanese</option>
// // //                       <option value="Thai">Thai</option>
// // //                       <option value="American">American</option>
// // //                       <option value="Mediterranean">Mediterranean</option>
// // //                       <option value="International">International</option>
// // //                     </select>
// // //                     {errors.cuisineType && <p className="text-red-500 text-xs mt-1">{errors.cuisineType.message}</p>}
// // //                   </div>

// // //                   <div className="col-span-1 md:col-span-2">
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">
// // //                       Address*
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaMapMarkerAlt className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                           errors.address ? "border-red-500" : "border-gray-300"
// // //                         } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="address"
// // //                         type="text"
// // //                         placeholder="Enter full address"
// // //                         {...register("address", { required: "Address is required" })}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                     {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="zone">
// // //                       Zone*
// // //                     </label>
// // //                     <select
// // //                       className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// // //                         errors.zone ? "border-red-500" : "border-gray-300"
// // //                       } ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="zone"
// // //                       {...register("zone", { required: "Zone is required" })}
// // //                       disabled={isViewMode}
// // //                     >
// // //                       <option value="">Select Zone</option>
// // //                       <option value="Downtown">Downtown</option>
// // //                       <option value="Uptown">Uptown</option>
// // //                       <option value="Midtown">Midtown</option>
// // //                       <option value="Suburbs">Suburbs</option>
// // //                       <option value="Business District">Business District</option>
// // //                     </select>
// // //                     {errors.zone && <p className="text-red-500 text-xs mt-1">{errors.zone.message}</p>}
// // //                   </div>

// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div>
// // //                       <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="latitude">
// // //                         Latitude
// // //                       </label>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="latitude"
// // //                         type="text"
// // //                         placeholder="Enter latitude"
// // //                         {...register("latitude")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="longitude">
// // //                         Longitude
// // //                       </label>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="longitude"
// // //                         type="text"
// // //                         placeholder="Enter longitude"
// // //                         {...register("longitude")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div className="col-span-1 md:col-span-2">
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="description">
// // //                       Description
// // //                     </label>
// // //                     <textarea
// // //                       className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="description"
// // //                       rows="4"
// // //                       placeholder="Enter restaurant description"
// // //                       {...register("description")}
// // //                       disabled={isViewMode}
// // //                     ></textarea>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Gallery Tab */}
// // //             {activeTab === "gallery" && (
// // //               <div className="space-y-6">
// // //                 <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Restaurant Gallery</h2>

// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// // //                   {galleryImages.map((image) => (
// // //                     <div key={image.id} className="relative group">
// // //                       <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
// // //                         <img
// // //                           src={image.url || "/placeholder.svg"}
// // //                           alt="Gallery"
// // //                           className="object-cover w-full h-full"
// // //                         />
// // //                       </div>
// // //                       {!isViewMode && (
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => removeGalleryImage(image.id)}
// // //                           className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
// // //                         >
// // //                           <FaTrash className="text-xs" />
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   ))}

// // //                   {!isViewMode && (
// // //                     <div
// // //                       onClick={triggerGalleryInput}
// // //                       className="aspect-w-1 aspect-h-1 w-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:border-primary-500 transition-colors"
// // //                     >
// // //                       <FaImage className="text-gray-400 text-3xl mb-2" />
// // //                       <p className="text-gray-500 text-sm text-center">Add Photos</p>
// // //                       <p className="text-gray-400 text-xs text-center mt-1">Click to upload</p>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <input
// // //                   type="file"
// // //                   ref={galleryInputRef}
// // //                   onChange={handleGalleryImageChange}
// // //                   accept="image/*"
// // //                   multiple
// // //                   className="hidden"
// // //                   disabled={isViewMode}
// // //                 />

// // //                 {!isViewMode && (
// // //                   <p className="text-sm text-gray-500 mt-4">
// // //                     Upload high-quality images of your restaurant, food, and ambiance. These images will be displayed to
// // //                     customers.
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             )}

// // //             {/* Business Details Tab */}
// // //             {activeTab === "business" && (
// // //               <div className="space-y-6">
// // //                 <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Business Details</h2>

// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="minOrderAmount">
// // //                       Minimum Order Amount ($)
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaMoneyBillWave className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="minOrderAmount"
// // //                         type="text"
// // //                         placeholder="Enter minimum order amount"
// // //                         {...register("minOrderAmount")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="deliveryFee">
// // //                       Delivery Fee ($)
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaMoneyBillWave className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="deliveryFee"
// // //                         type="text"
// // //                         placeholder="Enter delivery fee"
// // //                         {...register("deliveryFee")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="commissionRate">
// // //                       Commission Rate (%)
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaPercent className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="commissionRate"
// // //                         type="text"
// // //                         placeholder="Enter commission rate"
// // //                         {...register("commissionRate")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="preparationTime">
// // //                       Average Preparation Time (minutes)
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaClock className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="preparationTime"
// // //                         type="text"
// // //                         placeholder="Enter preparation time"
// // //                         {...register("preparationTime")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="openingTime">
// // //                       Opening Time
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaClock className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="openingTime"
// // //                         type="time"
// // //                         {...register("openingTime")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="closingTime">
// // //                       Closing Time
// // //                     </label>
// // //                     <div className="relative">
// // //                       <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// // //                         <FaClock className="text-gray-400" />
// // //                       </div>
// // //                       <input
// // //                         className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                         id="closingTime"
// // //                         type="time"
// // //                         {...register("closingTime")}
// // //                         disabled={isViewMode}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Banking Information Tab */}
// // //             {activeTab === "banking" && (
// // //               <div className="space-y-6">
// // //                 <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Banking Information</h2>

// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="bankName">
// // //                       Bank Name
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="bankName"
// // //                       type="text"
// // //                       placeholder="Enter bank name"
// // //                       {...register("bankName")}
// // //                       disabled={isViewMode}
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="accountNumber">
// // //                       Account Number
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="accountNumber"
// // //                       type="text"
// // //                       placeholder="Enter account number"
// // //                       {...register("accountNumber")}
// // //                       disabled={isViewMode}
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="accountHolderName">
// // //                       Account Holder Name
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="accountHolderName"
// // //                       type="text"
// // //                       placeholder="Enter account holder name"
// // //                       {...register("accountHolderName")}
// // //                       disabled={isViewMode}
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="taxId">
// // //                       Tax ID / Business ID
// // //                     </label>
// // //                     <input
// // //                       className={`shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${isViewMode ? "cursor-not-allowed" : ""}`}
// // //                       id="taxId"
// // //                       type="text"
// // //                       placeholder="Enter tax ID"
// // //                       {...register("taxId")}
// // //                       disabled={isViewMode}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Status Tab */}
// // //             {activeTab === "status" && (
// // //               <div className="space-y-6">
// // //                 <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Vendor Status</h2>

// // //                 <div className="grid grid-cols-1 gap-6">
// // //                   <div>
// // //                     <label className="flex items-center">
// // //                       <input
// // //                         type="checkbox"
// // //                         {...register("isActive")}
// // //                         className="form-checkbox h-5 w-5 text-primary-900 rounded"
// // //                         disabled={isViewMode}
// // //                       />
// // //                       <span className="ml-2 text-sm text-gray-700">Active Vendor</span>
// // //                     </label>
// // //                     <p className="text-xs text-gray-500 mt-1 ml-7">
// // //                       When active, the vendor will be visible to customers and can receive orders.
// // //                     </p>
// // //                   </div>

// // //                   <div className="bg-gray-50 p-4 rounded-lg">
// // //                     <h3 className="font-medium text-gray-700 mb-3">Approval Status</h3>

// // //                     <div className="space-y-3">
// // //                       <div className="flex items-center">
// // //                         <input
// // //                           type="radio"
// // //                           id="isApproved"
// // //                           checked={approvalStatus.isApproved}
// // //                           onChange={() => handleStatusChange("isApproved")}
// // //                           className="form-radio h-4 w-4 text-primary-900"
// // //                           disabled={isViewMode}
// // //                         />
// // //                         <label htmlFor="isApproved" className="ml-2 flex items-center">
// // //                           <FaCheck className="text-green-500 mr-1" />
// // //                           <span className="text-sm text-gray-700">Approved</span>
// // //                         </label>
// // //                       </div>

// // //                       <div className="flex items-center">
// // //                         <input
// // //                           type="radio"
// // //                           id="isPending"
// // //                           checked={approvalStatus.isPending}
// // //                           onChange={() => handleStatusChange("isPending")}
// // //                           className="form-radio h-4 w-4 text-primary-900"
// // //                           disabled={isViewMode}
// // //                         />
// // //                         <label htmlFor="isPending" className="ml-2 flex items-center">
// // //                           <FaClock className="text-yellow-500 mr-1" />
// // //                           <span className="text-sm text-gray-700">Pending Approval</span>
// // //                         </label>
// // //                       </div>

// // //                       <div className="flex items-center">
// // //                         <input
// // //                           type="radio"
// // //                           id="isRejected"
// // //                           checked={approvalStatus.isRejected}
// // //                           onChange={() => handleStatusChange("isRejected")}
// // //                           className="form-radio h-4 w-4 text-primary-900"
// // //                           disabled={isViewMode}
// // //                         />
// // //                         <label htmlFor="isRejected" className="ml-2 flex items-center">
// // //                           <FaTimes className="text-red-500 mr-1" />
// // //                           <span className="text-sm text-gray-700">Rejected</span>
// // //                         </label>
// // //                       </div>

// // //                       <div className="flex items-center">
// // //                         <input
// // //                           type="radio"
// // //                           id="isSuspended"
// // //                           checked={approvalStatus.isSuspended}
// // //                           onChange={() => handleStatusChange("isSuspended")}
// // //                           className="form-radio h-4 w-4 text-primary-900"
// // //                           disabled={isViewMode}
// // //                         />
// // //                         <label htmlFor="isSuspended" className="ml-2 flex items-center">
// // //                           <FaTimes className="text-orange-500 mr-1" />
// // //                           <span className="text-sm text-gray-700">Suspended</span>
// // //                         </label>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Footer */}
// // //           <div className="px-4 py-4 md:px-6 md:py-4 bg-gray-50 border-t flex flex-col sm:flex-row justify-between gap-3">
// // //             <button
// // //               type="button"
// // //               onClick={() => navigate("/vendors/all")}
// // //               className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center justify-center shadow-sm"
// // //             >
// // //               <FaArrowLeft className="mr-2" /> Back to List
// // //             </button>

// // //             {!isViewMode && (
// // //               <button
// // //                 type="submit"
// // //                 disabled={isSaving}
// // //                 className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center justify-center shadow-sm ${
// // //                   isSaving ? "opacity-70 cursor-not-allowed" : ""
// // //                 }`}
// // //               >
// // //                 <FaSave className="mr-2" />
// // //                 {isSaving ? "Saving..." : "Save Vendor"}
// // //               </button>
// // //             )}
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </>
// // //   )
// // // }

// // // export default CreateVendor

// // // // import { useState } from "react"
// // // // import { useNavigate } from "react-router-dom"
// // // // import TitleHead from "../Header/TitleHead"
// // // // import { FaStore, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUtensils } from "react-icons/fa"

// // // // const CreateVendor = () => {
// // // //   const navigate = useNavigate()
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     ownerName: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     address: "",
// // // //     cuisine: "",
// // // //     description: "",
// // // //     logo: null,
// // // //     coverImage: null,
// // // //     status: "pending",
// // // //   })

// // // //   const [errors, setErrors] = useState({})
// // // //   const [isSubmitting, setIsSubmitting] = useState(false)
// // // //   const [previewLogo, setPreviewLogo] = useState(null)
// // // //   const [previewCover, setPreviewCover] = useState(null)

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value,
// // // //     })

// // // //     // Clear error when field is edited
// // // //     if (errors[name]) {
// // // //       setErrors({
// // // //         ...errors,
// // // //         [name]: null,
// // // //       })
// // // //     }
// // // //   }

// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target
// // // //     if (files && files[0]) {
// // // //       setFormData({
// // // //         ...formData,
// // // //         [name]: files[0],
// // // //       })

// // // //       // Create preview URL
// // // //       const previewUrl = URL.createObjectURL(files[0])
// // // //       if (name === "logo") {
// // // //         setPreviewLogo(previewUrl)
// // // //       } else if (name === "coverImage") {
// // // //         setPreviewCover(previewUrl)
// // // //       }
// // // //     }
// // // //   }

// // // //   const validateForm = () => {
// // // //     const newErrors = {}

// // // //     if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
// // // //     if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
// // // //     if (!formData.email.trim()) newErrors.email = "Email is required"
// // // //     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
// // // //     if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
// // // //     if (!formData.address.trim()) newErrors.address = "Address is required"
// // // //     if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"

// // // //     return newErrors
// // // //   }

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault()

// // // //     const newErrors = validateForm()
// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors)
// // // //       return
// // // //     }

// // // //     setIsSubmitting(true)

// // // //     // Simulate API call
// // // //     setTimeout(() => {
// // // //       console.log("Form submitted:", formData)
// // // //       setIsSubmitting(false)
// // // //       // Redirect to vendors list
// // // //       navigate("/vendors/all")
// // // //     }, 1500)
// // // //   }

// // // //   return (
// // // //     <div className="p-4 md:p-6">
// // // //       <TitleHead title="Create New Vendor" desc="Add a new restaurant to the platform" />

// // // //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaStore className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Restaurant Information</h2>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             {/* Restaurant Name */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaStore className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="name"
// // // //                   value={formData.name}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.name ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="Enter restaurant name"
// // // //                 />
// // // //               </div>
// // // //               {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // //             </div>

// // // //             {/* Owner Name */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaUser className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="ownerName"
// // // //                   value={formData.ownerName}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.ownerName ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="Enter owner name"
// // // //                 />
// // // //               </div>
// // // //               {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
// // // //             </div>

// // // //             {/* Email */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaEnvelope className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="email"
// // // //                   name="email"
// // // //                   value={formData.email}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.email ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="Enter email address"
// // // //                 />
// // // //               </div>
// // // //               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // //             </div>

// // // //             {/* Phone */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaPhone className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="phone"
// // // //                   value={formData.phone}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.phone ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="Enter phone number"
// // // //                 />
// // // //               </div>
// // // //               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // //             </div>

// // // //             {/* Address */}
// // // //             <div className="md:col-span-2">
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaMapMarkerAlt className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="address"
// // // //                   value={formData.address}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.address ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="Enter restaurant address"
// // // //                 />
// // // //               </div>
// // // //               {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
// // // //             </div>

// // // //             {/* Cuisine */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
// // // //               <div className="relative">
// // // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                   <FaUtensils className="text-gray-400" />
// // // //                 </div>
// // // //                 <input
// // // //                   type="text"
// // // //                   name="cuisine"
// // // //                   value={formData.cuisine}
// // // //                   onChange={handleChange}
// // // //                   className={`pl-10 w-full rounded-md border ${
// // // //                     errors.cuisine ? "border-red-300" : "border-gray-300"
// // // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //                   placeholder="E.g., Italian, Chinese, Indian"
// // // //                 />
// // // //               </div>
// // // //               {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
// // // //             </div>

// // // //             {/* Status */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// // // //               <select
// // // //                 name="status"
// // // //                 value={formData.status}
// // // //                 onChange={handleChange}
// // // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               >
// // // //                 <option value="pending">Pending</option>
// // // //                 <option value="approved">Approved</option>
// // // //                 <option value="rejected">Rejected</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* Description */}
// // // //             <div className="md:col-span-2">
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// // // //               <textarea
// // // //                 name="description"
// // // //                 value={formData.description}
// // // //                 onChange={handleChange}
// // // //                 rows="4"
// // // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //                 placeholder="Enter restaurant description"
// // // //               ></textarea>
// // // //             </div>

// // // //             {/* Logo Upload */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
// // // //                   {previewLogo ? (
// // // //                     <img
// // // //                       src={previewLogo || "/placeholder.svg"}
// // // //                       alt="Logo Preview"
// // // //                       className="w-full h-full object-cover"
// // // //                     />
// // // //                   ) : (
// // // //                     <FaStore className="text-gray-400 text-3xl" />
// // // //                   )}
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <input
// // // //                     type="file"
// // // //                     name="logo"
// // // //                     onChange={handleFileChange}
// // // //                     className="hidden"
// // // //                     id="logo-upload"
// // // //                     accept="image/*"
// // // //                   />
// // // //                   <label
// // // //                     htmlFor="logo-upload"
// // // //                     className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // //                   >
// // // //                     Choose Logo
// // // //                   </label>
// // // //                   <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Cover Image Upload */}
// // // //             <div>
// // // //               <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
// // // //                   {previewCover ? (
// // // //                     <img
// // // //                       src={previewCover || "/placeholder.svg"}
// // // //                       alt="Cover Preview"
// // // //                       className="w-full h-full object-cover"
// // // //                     />
// // // //                   ) : (
// // // //                     <FaStore className="text-gray-400 text-3xl" />
// // // //                   )}
// // // //                 </div>
// // // //                 <div className="flex-1">
// // // //                   <input
// // // //                     type="file"
// // // //                     name="coverImage"
// // // //                     onChange={handleFileChange}
// // // //                     className="hidden"
// // // //                     id="cover-upload"
// // // //                     accept="image/*"
// // // //                   />
// // // //                   <label
// // // //                     htmlFor="cover-upload"
// // // //                     className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // //                   >
// // // //                     Choose Cover
// // // //                   </label>
// // // //                   <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="flex justify-end mt-8 space-x-3">
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => navigate("/vendors/all")}
// // // //               className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //             <button
// // // //               type="submit"
// // // //               disabled={isSubmitting}
// // // //               className="px-4 py-2 bg-primary-900 text-white rounded-md text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75"
// // // //             >
// // // //               {isSubmitting ? "Creating..." : "Create Vendor"}
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default CreateVendor

// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import {
// //   FaStore,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaMapMarkerAlt,
// //   FaUtensils,
// //   FaImage,
// //   FaInfoCircle,
// //   FaMoneyBillWave,
// //   FaClock,
// //   FaCheck,
// //   FaTimes,
// //   FaArrowRight,
// //   FaArrowLeft,
// // } from "react-icons/fa"
// // import PageHeader from "../common/PageHeader"

// // const CreateVendor = () => {
// //   const navigate = useNavigate()
// //   const [currentStep, setCurrentStep] = useState(1)
// //   const [formData, setFormData] = useState({
// //     // Basic Information
// //     name: "",
// //     ownerName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     cuisine: "",
// //     description: "",
// //     logo: null,
// //     coverImage: null,
// //     status: "pending",

// //     // Location & Hours
// //     latitude: "",
// //     longitude: "",
// //     openingTime: "08:00",
// //     closingTime: "22:00",
// //     deliveryRadius: "5",

// //     // Services & Features
// //     services: {
// //       delivery: true,
// //       takeaway: true,
// //       dineIn: false,
// //       reservation: false,
// //     },

// //     // Financial Details
// //     commissionRate: "10",
// //     minimumOrderAmount: "10",
// //     deliveryFee: "5",
// //     bankName: "",
// //     accountNumber: "",
// //     accountHolderName: "",
// //     taxID: "",
// //   })

// //   const [errors, setErrors] = useState({})
// //   const [isSubmitting, setIsSubmitting] = useState(false)
// //   const [previewLogo, setPreviewLogo] = useState(null)
// //   const [previewCover, setPreviewCover] = useState(null)

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     })

// //     // Clear error when field is edited
// //     if (errors[name]) {
// //       setErrors({
// //         ...errors,
// //         [name]: null,
// //       })
// //     }
// //   }

// //   const handleServiceToggle = (service) => {
// //     setFormData({
// //       ...formData,
// //       services: {
// //         ...formData.services,
// //         [service]: !formData.services[service],
// //       },
// //     })
// //   }

// //   const handleFileChange = (e) => {
// //     const { name, files } = e.target
// //     if (files && files[0]) {
// //       setFormData({
// //         ...formData,
// //         [name]: files[0],
// //       })

// //       // Create preview URL
// //       const previewUrl = URL.createObjectURL(files[0])
// //       if (name === "logo") {
// //         setPreviewLogo(previewUrl)
// //       } else if (name === "coverImage") {
// //         setPreviewCover(previewUrl)
// //       }
// //     }
// //   }

// //   const validateStep = (step) => {
// //     const newErrors = {}

// //     if (step === 1) {
// //       if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
// //       if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
// //       if (!formData.email.trim()) newErrors.email = "Email is required"
// //       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
// //       if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
// //       if (!formData.address.trim()) newErrors.address = "Address is required"
// //       if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"
// //     } else if (step === 2) {
// //       if (!formData.openingTime) newErrors.openingTime = "Opening time is required"
// //       if (!formData.closingTime) newErrors.closingTime = "Closing time is required"
// //       if (!formData.deliveryRadius) newErrors.deliveryRadius = "Delivery radius is required"
// //     } else if (step === 3) {
// //       // No required fields for services
// //     } else if (step === 4) {
// //       if (!formData.commissionRate) newErrors.commissionRate = "Commission rate is required"
// //       if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
// //     }

// //     return newErrors
// //   }

// //   const nextStep = () => {
// //     const newErrors = validateStep(currentStep)
// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors)
// //       return
// //     }
// //     setCurrentStep(currentStep + 1)
// //     window.scrollTo(0, 0)
// //   }

// //   const prevStep = () => {
// //     setCurrentStep(currentStep - 1)
// //     window.scrollTo(0, 0)
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault()

// //     const newErrors = validateStep(currentStep)
// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors)
// //       return
// //     }

// //     setIsSubmitting(true)

// //     // Simulate API call
// //     setTimeout(() => {
// //       console.log("Form submitted:", formData)
// //       setIsSubmitting(false)
// //       // Show success message
// //       alert("Vendor created successfully!")
// //       // Redirect to vendors list
// //       navigate("/vendors/all")
// //     }, 1500)
// //   }

// //   const renderStepIndicator = () => {
// //     return (
// //       <div className="mb-8">
// //         <div className="flex items-center justify-between">
// //           {[1, 2, 3, 4].map((step) => (
// //             <div key={step} className="flex flex-col items-center">
// //               <div
// //                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
// //                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
// //                 }`}
// //               >
// //                 {currentStep > step ? <FaCheck /> : step}
// //               </div>
// //               <div
// //                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
// //               >
// //                 {step === 1 && "Basic Info"}
// //                 {step === 2 && "Location & Hours"}
// //                 {step === 3 && "Services"}
// //                 {step === 4 && "Financial"}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="relative mt-2">
// //           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
// //           <div
// //             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
// //             style={{ width: `${(currentStep - 1) * 33.33}%` }}
// //           ></div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderBasicInfoStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaInfoCircle className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Restaurant Name */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaStore className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="Enter restaurant name"
// //               />
// //             </div>
// //             {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// //           </div>

// //           {/* Owner Name */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaUser className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="ownerName"
// //                 value={formData.ownerName}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.ownerName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="Enter owner name"
// //               />
// //             </div>
// //             {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
// //           </div>

// //           {/* Email */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaEnvelope className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="Enter email address"
// //               />
// //             </div>
// //             {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// //           </div>

// //           {/* Phone */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaPhone className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="Enter phone number"
// //               />
// //             </div>
// //             {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// //           </div>

// //           {/* Address */}
// //           <div className="md:col-span-2">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaMapMarkerAlt className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="Enter restaurant address"
// //               />
// //             </div>
// //             {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
// //           </div>

// //           {/* Cuisine */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaUtensils className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 name="cuisine"
// //                 value={formData.cuisine}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.cuisine ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// //                 placeholder="E.g., Italian, Chinese, Indian"
// //               />
// //             </div>
// //             {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
// //           </div>

// //           {/* Status */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// //             <select
// //               name="status"
// //               value={formData.status}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// //             >
// //               <option value="pending">Pending</option>
// //               <option value="approved">Approved</option>
// //               <option value="rejected">Rejected</option>
// //             </select>
// //           </div>

// //           {/* Description */}
// //           <div className="md:col-span-2">
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               rows="4"
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// //               placeholder="Enter restaurant description"
// //             ></textarea>
// //           </div>

// //           {/* Logo Upload */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
// //             <div className="flex items-center space-x-4">
// //               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
// //                 {previewLogo ? (
// //                   <img
// //                     src={previewLogo || "/placeholder.svg"}
// //                     alt="Logo Preview"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 ) : (
// //                   <FaImage className="text-gray-400 text-3xl" />
// //                 )}
// //               </div>
// //               <div className="flex-1">
// //                 <input
// //                   type="file"
// //                   name="logo"
// //                   onChange={handleFileChange}
// //                   className="hidden"
// //                   id="logo-upload"
// //                   accept="image/*"
// //                 />
// //                 <label
// //                   htmlFor="logo-upload"
// //                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// //                 >
// //                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                   Choose Logo
// //                 </label>
// //                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Cover Image Upload */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
// //             <div className="flex items-center space-x-4">
// //               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
// //                 {previewCover ? (
// //                   <img
// //                     src={previewCover || "/placeholder.svg"}
// //                     alt="Cover Preview"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 ) : (
// //                   <FaImage className="text-gray-400 text-3xl" />
// //                 )}
// //               </div>
// //               <div className="flex-1">
// //                 <input
// //                   type="file"
// //                   name="coverImage"
// //                   onChange={handleFileChange}
// //                   className="hidden"
// //                   id="cover-upload"
// //                   accept="image/*"
// //                 />
// //                 <label
// //                   htmlFor="cover-upload"
// //                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// //                 >
// //                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                   Choose Cover
// //                 </label>
// //                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderLocationStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaMapMarkerAlt className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Map Preview (Placeholder) */}
// //           <div className="md:col-span-2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
// //             <div className="text-center">
// //               <FaMapMarkerAlt className="mx-auto h-10 w-10 text-gray-400" />
// //               <p className="mt-2 text-sm text-gray-500">Map preview will be shown here</p>
// //               <p className="text-xs text-gray-400">Google Maps API key required for actual map</p>
// //             </div>
// //           </div>

// //           {/* Latitude */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
// //             <input
// //               type="text"
// //               name="latitude"
// //               value={formData.latitude}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="E.g., 40.7128"
// //             />
// //           </div>

// //           {/* Longitude */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
// //             <input
// //               type="text"
// //               name="longitude"
// //               value={formData.longitude}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="E.g., -74.0060"
// //             />
// //           </div>

// //           {/* Opening Hours */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaClock className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="time"
// //                 name="openingTime"
// //                 value={formData.openingTime}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.openingTime ? "border-red-300" : "border-gray-300"
// //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //               />
// //             </div>
// //             {errors.openingTime && <p className="mt-1 text-sm text-red-600">{errors.openingTime}</p>}
// //           </div>

// //           {/* Closing Hours */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
// //             <div className="relative">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaClock className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="time"
// //                 name="closingTime"
// //                 value={formData.closingTime}
// //                 onChange={handleChange}
// //                 className={`pl-10 w-full rounded-md border ${
// //                   errors.closingTime ? "border-red-300" : "border-gray-300"
// //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //               />
// //             </div>
// //             {errors.closingTime && <p className="mt-1 text-sm text-red-600">{errors.closingTime}</p>}
// //           </div>

// //           {/* Delivery Radius */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)*</label>
// //             <input
// //               type="number"
// //               name="deliveryRadius"
// //               value={formData.deliveryRadius}
// //               onChange={handleChange}
// //               min="1"
// //               max="50"
// //               className={`w-full rounded-md border ${
// //                 errors.deliveryRadius ? "border-red-300" : "border-gray-300"
// //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //             />
// //             {errors.deliveryRadius && <p className="mt-1 text-sm text-red-600">{errors.deliveryRadius}</p>}
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderServicesStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaUtensils className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
// //         </div>

// //         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
// //           <h3 className="text-lg font-medium text-gray-900 mb-4">Available Services</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {/* Delivery Service */}
// //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="delivery"
// //                 checked={formData.services.delivery}
// //                 onChange={() => handleServiceToggle("delivery")}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
// //               </label>
// //             </div>

// //             {/* Takeaway Service */}
// //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="takeaway"
// //                 checked={formData.services.takeaway}
// //                 onChange={() => handleServiceToggle("takeaway")}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
// //               </label>
// //             </div>

// //             {/* Dine-In Service */}
// //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="dineIn"
// //                 checked={formData.services.dineIn}
// //                 onChange={() => handleServiceToggle("dineIn")}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
// //               </label>
// //             </div>

// //             {/* Reservation Service */}
// //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="reservation"
// //                 checked={formData.services.reservation}
// //                 onChange={() => handleServiceToggle("reservation")}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
// //                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
// //           <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// //           <div>
// //             <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
// //             <p className="text-xs text-blue-600 mt-1">
// //               The selected services will be available to customers when ordering from this restaurant. You can change
// //               these settings later from the restaurant profile page.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderFinancialStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaMoneyBillWave className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Commission Rate */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
// //             <input
// //               type="number"
// //               name="commissionRate"
// //               value={formData.commissionRate}
// //               onChange={handleChange}
// //               min="0"
// //               max="100"
// //               className={`w-full rounded-md border ${
// //                 errors.commissionRate ? "border-red-300" : "border-gray-300"
// //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //             />
// //             {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
// //             <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
// //           </div>

// //           {/* Minimum Order Amount */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
// //             <input
// //               type="number"
// //               name="minimumOrderAmount"
// //               value={formData.minimumOrderAmount}
// //               onChange={handleChange}
// //               min="0"
// //               step="0.01"
// //               className={`w-full rounded-md border ${
// //                 errors.minimumOrderAmount ? "border-red-300" : "border-gray-300"
// //               } focus:ring-primary-500 focus:border-primary-500 p-2.5\`}  : "border-gray-300"
// //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //             />
// //             {errors.minimumOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minimumOrderAmount}</p>}
// //             <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
// //           </div>

// //           {/* Delivery Fee */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee ($)</label>
// //             <input
// //               type="number"
// //               name="deliveryFee"
// //               value={formData.deliveryFee}
// //               onChange={handleChange}
// //               min="0"
// //               step="0.01"
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //             />
// //             <p className="mt-1 text-xs text-gray-500">Fee charged to customers for delivery service</p>
// //           </div>

// //           {/* Bank Details Section */}
// //           <div className="md:col-span-2 mt-4">
// //             <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
// //               Bank Account Details
// //             </h3>
// //           </div>

// //           {/* Bank Name */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
// //             <input
// //               type="text"
// //               name="bankName"
// //               value={formData.bankName}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="Enter bank name"
// //             />
// //           </div>

// //           {/* Account Number */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
// //             <input
// //               type="text"
// //               name="accountNumber"
// //               value={formData.accountNumber}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="Enter account number"
// //             />
// //           </div>

// //           {/* Account Holder Name */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
// //             <input
// //               type="text"
// //               name="accountHolderName"
// //               value={formData.accountHolderName}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="Enter account holder name"
// //             />
// //           </div>

// //           {/* Tax ID */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
// //             <input
// //               type="text"
// //               name="taxID"
// //               value={formData.taxID}
// //               onChange={handleChange}
// //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //               placeholder="Enter tax ID or VAT number"
// //             />
// //           </div>
// //         </div>

// //         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start mt-6">
// //           <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
// //           <div>
// //             <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
// //             <p className="text-xs text-yellow-600 mt-1">
// //               Bank account details are required for processing payouts to the restaurant. Make sure all information is
// //               accurate to avoid payment delays.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="p-4 md:p-6">
// //       <PageHeader
// //         title="Create New Vendor"
// //         description="Add a new restaurant to the platform"
// //         actions={[
// //           {
// //             label: "Cancel",
// //             onClick: () => navigate("/vendors/all"),
// //             variant: "outline",
// //           },
// //         ]}
// //       />

// //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// //         {renderStepIndicator()}

// //         <form onSubmit={handleSubmit}>
// //           {currentStep === 1 && renderBasicInfoStep()}
// //           {currentStep === 2 && renderLocationStep()}
// //           {currentStep === 3 && renderServicesStep()}
// //           {currentStep === 4 && renderFinancialStep()}

// //           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
// //             {currentStep > 1 ? (
// //               <button
// //                 type="button"
// //                 onClick={prevStep}
// //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                 Previous
// //               </button>
// //             ) : (
// //               <button
// //                 type="button"
// //                 onClick={() => navigate("/vendors/all")}
// //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                 Cancel
// //               </button>
// //             )}

// //             {currentStep < 4 ? (
// //               <button
// //                 type="button"
// //                 onClick={nextStep}
// //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 Next
// //                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
// //               </button>
// //             ) : (
// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
// //               >
// //                 {isSubmitting ? (
// //                   <>
// //                     <svg
// //                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <circle
// //                         className="opacity-25"
// //                         cx="12"
// //                         cy="12"
// //                         r="10"
// //                         stroke="currentColor"
// //                         strokeWidth="4"
// //                       ></circle>
// //                       <path
// //                         className="opacity-75"
// //                         fill="currentColor"
// //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                       ></path>
// //                     </svg>
// //                     Creating...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
// //                     Create Vendor
// //                   </>
// //                 )}
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CreateVendor

// "use client"

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import {
//   FaStore,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaUtensils,
//   FaImage,
//   FaInfoCircle,
//   FaMoneyBillWave,
//   FaClock,
//   FaCheck,
//   FaTimes,
//   FaArrowRight,
//   FaArrowLeft,
// } from "react-icons/fa"
// import PageHeader from "../common/PageHeader"

// const CreateVendor = () => {
//   const navigate = useNavigate()
//   const [currentStep, setCurrentStep] = useState(1)
//   const totalSteps = 5 // Now 5 steps including review
//   const [formData, setFormData] = useState({
//     // Basic Information
//     name: "",
//     ownerName: "",
//     email: "",
//     phone: "",
//     address: "",
//     cuisine: "",
//     description: "",
//     logo: null,
//     coverImage: null,
//     status: "pending",

//     // Location & Hours
//     latitude: "",
//     longitude: "",
//     openingTime: "08:00",
//     closingTime: "22:00",
//     deliveryRadius: "5",

//     // Services & Features
//     services: {
//       delivery: true,
//       takeaway: true,
//       dineIn: false,
//       reservation: false,
//     },

//     // Financial Details
//     commissionRate: "10",
//     minimumOrderAmount: "10",
//     deliveryFee: "5",
//     bankName: "",
//     accountNumber: "",
//     accountHolderName: "",
//     taxID: "",
//   })

//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [previewLogo, setPreviewLogo] = useState(null)
//   const [previewCover, setPreviewCover] = useState(null)

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       })
//     }
//   }

//   const handleServiceToggle = (service) => {
//     setFormData({
//       ...formData,
//       services: {
//         ...formData.services,
//         [service]: !formData.services[service],
//       },
//     })
//   }

//   const handleFileChange = (e) => {
//     const { name, files } = e.target
//     if (files && files[0]) {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       })

//       // Create preview URL
//       const previewUrl = URL.createObjectURL(files[0])
//       if (name === "logo") {
//         setPreviewLogo(previewUrl)
//       } else if (name === "coverImage") {
//         setPreviewCover(previewUrl)
//       }
//     }
//   }

//   const validateStep = (step) => {
//     const newErrors = {}

//     if (step === 1) {
//       if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
//       if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
//       if (!formData.email.trim()) newErrors.email = "Email is required"
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
//       if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
//       if (!formData.address.trim()) newErrors.address = "Address is required"
//       if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"
//     } else if (step === 2) {
//       if (!formData.openingTime) newErrors.openingTime = "Opening time is required"
//       if (!formData.closingTime) newErrors.closingTime = "Closing time is required"
//       if (!formData.deliveryRadius) newErrors.deliveryRadius = "Delivery radius is required"
//     } else if (step === 3) {
//       // No required fields for services
//     } else if (step === 4) {
//       if (!formData.commissionRate) newErrors.commissionRate = "Commission rate is required"
//       if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
//     }

//     return newErrors
//   }

//   const nextStep = () => {
//     const newErrors = validateStep(currentStep)
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }
//     setCurrentStep(currentStep + 1)
//     window.scrollTo(0, 0)
//   }

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1)
//     window.scrollTo(0, 0)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newErrors = validateStep(currentStep)
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       console.log("Form submitted:", formData)
//       setIsSubmitting(false)
//       // Show success message
//       alert("Vendor created successfully!")
//       // Redirect to vendors list
//       navigate("/vendors/all")
//     }, 1500)
//   }

//   const renderStepIndicator = () => {
//     return (
//       <div className="flex justify-between mb-8">
//         {Array.from({ length: totalSteps }, (_, i) => (
//           <div key={i} className="flex flex-col items-center">
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 i + 1 === currentStep
//                   ? "bg-primary-900 text-white"
//                   : i + 1 < currentStep
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-200 text-gray-500"
//               }`}
//             >
//               {i + 1 < currentStep ? <FaCheck /> : i + 1}
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               {i === 0 ? "Basic Info" : i === 1 ? "Location" : i === 2 ? "Services" : i === 3 ? "Financial" : "Review"}
//             </p>
//           </div>
//         ))}
//       </div>
//     )
//   }

//   const renderBasicInfoStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaInfoCircle className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Restaurant Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaStore className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="Enter restaurant name"
//               />
//             </div>
//             {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//           </div>

//           {/* Owner Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUser className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.ownerName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="Enter owner name"
//               />
//             </div>
//             {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="Enter email address"
//               />
//             </div>
//             {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaPhone className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="Enter phone number"
//               />
//             </div>
//             {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//           </div>

//           {/* Address */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaMapMarkerAlt className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="Enter restaurant address"
//               />
//             </div>
//             {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
//           </div>

//           {/* Cuisine */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUtensils className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 name="cuisine"
//                 value={formData.cuisine}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.cuisine ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } focus:border-primary-500 p-2.5 transition duration-150`}
//                 placeholder="E.g., Italian, Chinese, Indian"
//               />
//             </div>
//             {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
//             >
//               <option value="pending">Pending</option>
//               <option value="approved">Approved</option>
//               <option value="rejected">Rejected</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
//               placeholder="Enter restaurant description"
//             ></textarea>
//           </div>

//           {/* Logo Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
//             <div className="flex items-center space-x-4">
//               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
//                 {previewLogo ? (
//                   <img
//                     src={previewLogo || "/placeholder.svg"}
//                     alt="Logo Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <FaImage className="text-gray-400 text-3xl" />
//                 )}
//               </div>
//               <div className="flex-1">
//                 <input
//                   type="file"
//                   name="logo"
//                   onChange={handleFileChange}
//                   className="hidden"
//                   id="logo-upload"
//                   accept="image/*"
//                 />
//                 <label
//                   htmlFor="logo-upload"
//                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
//                 >
//                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                   Choose Logo
//                 </label>
//                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
//               </div>
//             </div>
//           </div>

//           {/* Cover Image Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
//             <div className="flex items-center space-x-4">
//               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
//                 {previewCover ? (
//                   <img
//                     src={previewCover || "/placeholder.svg"}
//                     alt="Cover Preview"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <FaImage className="text-gray-400 text-3xl" />
//                 )}
//               </div>
//               <div className="flex-1">
//                 <input
//                   type="file"
//                   name="coverImage"
//                   onChange={handleFileChange}
//                   className="hidden"
//                   id="cover-upload"
//                   accept="image/*"
//                 />
//                 <label
//                   htmlFor="cover-upload"
//                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
//                 >
//                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                   Choose Cover
//                 </label>
//                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderLocationStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaMapMarkerAlt className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Map Preview (Placeholder) */}
//           <div className="md:col-span-2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
//             <div className="text-center">
//               <FaMapMarkerAlt className="mx-auto h-10 w-10 text-gray-400" />
//               <p className="mt-2 text-sm text-gray-500">Map preview will be shown here</p>
//               <p className="text-xs text-gray-400">Google Maps API key required for actual map</p>
//             </div>
//           </div>

//           {/* Latitude */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
//             <input
//               type="text"
//               name="latitude"
//               value={formData.latitude}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="E.g., 40.7128"
//             />
//           </div>

//           {/* Longitude */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
//             <input
//               type="text"
//               name="longitude"
//               value={formData.longitude}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="E.g., -74.0060"
//             />
//           </div>

//           {/* Opening Hours */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaClock className="text-gray-400" />
//               </div>
//               <input
//                 type="time"
//                 name="openingTime"
//                 value={formData.openingTime}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.openingTime ? "border-red-300" : "border-gray-300"
//                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//               />
//             </div>
//             {errors.openingTime && <p className="mt-1 text-sm text-red-600">{errors.openingTime}</p>}
//           </div>

//           {/* Closing Hours */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaClock className="text-gray-400" />
//               </div>
//               <input
//                 type="time"
//                 name="closingTime"
//                 value={formData.closingTime}
//                 onChange={handleChange}
//                 className={`pl-10 w-full rounded-md border ${
//                   errors.closingTime ? "border-red-300" : "border-gray-300"
//                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//               />
//             </div>
//             {errors.closingTime && <p className="mt-1 text-sm text-red-600">{errors.closingTime}</p>}
//           </div>

//           {/* Delivery Radius */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)*</label>
//             <input
//               type="number"
//               name="deliveryRadius"
//               value={formData.deliveryRadius}
//               onChange={handleChange}
//               min="1"
//               max="50"
//               className={`w-full rounded-md border ${
//                 errors.deliveryRadius ? "border-red-300" : "border-gray-300"
//               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//             />
//             {errors.deliveryRadius && <p className="mt-1 text-sm text-red-600">{errors.deliveryRadius}</p>}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderServicesStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaUtensils className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
//         </div>

//         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Available Services</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Delivery Service */}
//             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="delivery"
//                 checked={formData.services.delivery}
//                 onChange={() => handleServiceToggle("delivery")}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
//               </label>
//             </div>

//             {/* Takeaway Service */}
//             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="takeaway"
//                 checked={formData.services.takeaway}
//                 onChange={() => handleServiceToggle("takeaway")}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
//               </label>
//             </div>

//             {/* Dine-In Service */}
//             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="dineIn"
//                 checked={formData.services.dineIn}
//                 onChange={() => handleServiceToggle("dineIn")}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
//               </label>
//             </div>

//             {/* Reservation Service */}
//             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="reservation"
//                 checked={formData.services.reservation}
//                 onChange={() => handleServiceToggle("reservation")}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
//                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
//           <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
//             <p className="text-xs text-blue-600 mt-1">
//               The selected services will be available to customers when ordering from this restaurant. You can change
//               these settings later from the restaurant profile page.
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderFinancialStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaMoneyBillWave className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Commission Rate */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
//             <input
//               type="number"
//               name="commissionRate"
//               value={formData.commissionRate}
//               onChange={handleChange}
//               min="0"
//               max="100"
//               className={`w-full rounded-md border ${
//                 errors.commissionRate ? "border-red-300" : "border-gray-300"
//               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//             />
//             {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
//             <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
//           </div>

//           {/* Minimum Order Amount */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
//             <input
//               type="number"
//               name="minimumOrderAmount"
//               value={formData.minimumOrderAmount}
//               onChange={handleChange}
//               min="0"
//               step="0.01"
//               className={`w-full rounded-md border ${
//                 errors.minimumOrderAmount ? "border-red-300" : "border-gray-300"
//               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//             />
//             {errors.minimumOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minimumOrderAmount}</p>}
//             <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
//           </div>

//           {/* Delivery Fee */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee ($)</label>
//             <input
//               type="number"
//               name="deliveryFee"
//               value={formData.deliveryFee}
//               onChange={handleChange}
//               min="0"
//               step="0.01"
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//             />
//             <p className="mt-1 text-xs text-gray-500">Fee charged to customers for delivery service</p>
//           </div>

//           {/* Bank Details Section */}
//           <div className="md:col-span-2 mt-4">
//             <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
//               Bank Account Details
//             </h3>
//           </div>

//           {/* Bank Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
//             <input
//               type="text"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="Enter bank name"
//             />
//           </div>

//           {/* Account Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
//             <input
//               type="text"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="Enter account number"
//             />
//           </div>

//           {/* Account Holder Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
//             <input
//               type="text"
//               name="accountHolderName"
//               value={formData.accountHolderName}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="Enter account holder name"
//             />
//           </div>

//           {/* Tax ID */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
//             <input
//               type="text"
//               name="taxID"
//               value={formData.taxID}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//               placeholder="Enter tax ID or VAT number"
//             />
//           </div>
//         </div>

//         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start mt-6">
//           <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
//             <p className="text-xs text-yellow-600 mt-1">
//               Bank account details are required for processing payouts to the restaurant. Make sure all information is
//               accurate to avoid payment delays.
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderReviewStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaCheck className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
//           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
//             <p className="text-xs text-green-600 mt-1">
//               Please review all information below before submitting. Once submitted, you can still edit the vendor
//               details later.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
//                 <p className="text-sm text-gray-900">{formData.name || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Owner Name</p>
//                 <p className="text-sm text-gray-900">{formData.ownerName || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Email</p>
//                 <p className="text-sm text-gray-900">{formData.email || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Phone</p>
//                 <p className="text-sm text-gray-900">{formData.phone || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Address</p>
//                 <p className="text-sm text-gray-900">{formData.address || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
//                 <p className="text-sm text-gray-900">{formData.cuisine || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Status</p>
//                 <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Opening Time</p>
//                 <p className="text-sm text-gray-900">{formData.openingTime || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Closing Time</p>
//                 <p className="text-sm text-gray-900">{formData.closingTime || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Delivery Radius</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.deliveryRadius ? `${formData.deliveryRadius} km` : "Not provided"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Services</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Delivery</p>
//                 <p className="text-sm text-gray-900">{formData.services.delivery ? "Yes" : "No"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Takeaway</p>
//                 <p className="text-sm text-gray-900">{formData.services.takeaway ? "Yes" : "No"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Dine-In</p>
//                 <p className="text-sm text-gray-900">{formData.services.dineIn ? "Yes" : "No"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Reservation</p>
//                 <p className="text-sm text-gray-900">{formData.services.reservation ? "Yes" : "No"}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Commission Rate</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.minimumOrderAmount ? `$${formData.minimumOrderAmount}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Delivery Fee</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.deliveryFee ? `$${formData.deliveryFee}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Bank Name</p>
//                 <p className="text-sm text-gray-900">{formData.bankName || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Account Holder</p>
//                 <p className="text-sm text-gray-900">{formData.accountHolderName || "Not provided"}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <PageHeader
//         title="Create New Vendor"
//         description="Add a new restaurant to the platform"
//         actions={[
//           {
//             label: "Cancel",
//             onClick: () => navigate("/vendors/all"),
//             variant: "outline",
//           },
//         ]}
//       />

//       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
//         {renderStepIndicator()}

//         <form onSubmit={handleSubmit}>
//           {currentStep === 1 && renderBasicInfoStep()}
//           {currentStep === 2 && renderLocationStep()}
//           {currentStep === 3 && renderServicesStep()}
//           {currentStep === 4 && renderFinancialStep()}
//           {currentStep === 5 && renderReviewStep()}

//           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
//             {currentStep > 1 ? (
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                 Previous
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => navigate("/vendors/all")}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                 Cancel
//               </button>
//             )}

//             {currentStep < 5 ? (
//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 Next
//                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Creating...
//                   </>
//                 ) : (
//                   <>
//                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
//                     Create Vendor
//                   </>
//                 )}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CreateVendor

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

const CreateVendor = () => {
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
        title="Create New Vendor"
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

export default CreateVendor
