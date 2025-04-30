// const GalleryView = () => {
//   return (
//     <>
//       <div className="mt-5">
//         <div className="relative mx-auto max-w-4xl">
//           <div
//             className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-[#267FFF] text-white px-5 py-3 rounded-lg"
//             style={{ width: "fit-content", top: "-1rem" }}
//           >
//             <h1 className="text-2xl font-semibold">Gallery</h1>
//           </div>
//         </div>
//         <div className="flex items-center juatify-center rounded-lg border border-gray-300 m-14 max-w-4xl  mx-auto p-10 ">
//           <div className="flex flex-row">
//             <div className="mt-1">
//               <h1 className="text-2xl text-gray-400">Photos not available </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default GalleryView



"use client"

import { useState } from "react"
import { FaPlus, FaTrash, FaExpand } from "react-icons/fa"
import { MdClose } from "react-icons/md"

const GalleryView = () => {
  // Sample gallery images - in a real app, these would come from an API
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
      caption: "Signature Dish",
      featured: true,
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
      caption: "Restaurant Interior",
      featured: false,
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
      caption: "Outdoor Seating",
      featured: false,
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
      caption: "Special Menu",
      featured: false,
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
      caption: "Chef's Special",
      featured: false,
    },
  ])

  const [selectedImage, setSelectedImage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [newImageCaption, setNewImageCaption] = useState("")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result)
        setIsUploading(true)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle image upload
  const handleUpload = () => {
    if (selectedImage) {
      const newImage = {
        id: Date.now(),
        url: selectedImage,
        caption: newImageCaption || `Image ${images.length + 1}`,
        featured: false,
      }

      setImages([...images, newImage])
      setSelectedImage(null)
      setIsUploading(false)
      setNewImageCaption("")
    }
  }

  // Handle image deletion
  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id))
  }

  // Set image as featured
  const setAsFeatured = (id) => {
    setImages(
      images.map((image) => ({
        ...image,
        featured: image.id === id,
      })),
    )
  }

  // Open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Navigate through lightbox
  const navigateLightbox = (direction) => {
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) newIndex = images.length - 1
    if (newIndex >= images.length) newIndex = 0
    setLightboxIndex(newIndex)
  }

  return (
    <>
      <div className="mt-5">
        <div className="relative mx-auto max-w-6xl">
          <div
            className="absolute flex items-center justify-center left-0 ml-4 mx-auto bg-primary-500 text-white px-5 py-3 rounded-lg"
            style={{ width: "fit-content", top: "-1rem" }}
          >
            <h1 className="text-2xl font-semibold">Gallery</h1>
          </div>

          <div className="rounded-lg border border-gray-300 m-4 mx-auto p-6 pt-10">
            {/* Upload Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium text-gray-800">Restaurant Photos</h2>
                <label className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg cursor-pointer transition-colors flex items-center">
                  <FaPlus className="mr-2" />
                  Add Photo
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>

              {/* Upload Preview */}
              {isUploading && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-gray-700">Upload New Image</h3>
                    <button
                      onClick={() => {
                        setIsUploading(false)
                        setSelectedImage(null)
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <MdClose size={20} />
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3">
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Upload preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image Caption</label>
                        <input
                          type="text"
                          value={newImageCaption}
                          onChange={(e) => setNewImageCaption(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter a caption for this image"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setIsUploading(false)
                            setSelectedImage(null)
                          }}
                          className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpload}
                          className="px-4 py-2 bg-[#267FFF] text-white rounded-md hover:bg-blue-600"
                        >
                          Upload Image
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Grid */}
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={image.id} className="relative group">
                      <div
                        className={`relative rounded-lg overflow-hidden border-2 ${image.featured ? "border-[#267FFF]" : "border-transparent"}`}
                      >
                        <img
                          src={image.url || "/placeholder.svg"}
                          alt={image.caption}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>

                        {/* Image Actions */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => openLightbox(index)}
                            className="mx-1 p-2 bg-white rounded-full text-gray-800 hover:bg-gray-100"
                          >
                            <FaExpand size={14} />
                          </button>
                          <button
                            onClick={() => setAsFeatured(image.id)}
                            className={`mx-1 p-2 rounded-full ${image.featured ? "bg-[#267FFF] text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
                          >
                            {image.featured ? "Featured" : "Set as Featured"}
                          </button>
                          <button
                            onClick={() => handleDelete(image.id)}
                            className="mx-1 p-2 bg-white rounded-full text-red-500 hover:bg-red-50"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-700 truncate">{image.caption}</p>
                      {image.featured && (
                        <span className="absolute top-2 left-2 bg-[#267FFF] text-white text-xs px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-xl text-gray-400 mb-4">No photos available</p>
                  <label className="bg-[#267FFF] hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer transition-colors">
                    Add Your First Photo
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                  </label>
                </div>
              )}
            </div>

            {/* Gallery Tips */}
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Gallery Tips</h3>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>High-quality images of your food items can increase orders by up to 30%</li>
                <li>Include photos of your restaurant interior and ambiance</li>
                <li>Set your best dish as the featured image</li>
                <li>Recommended image size: 1200 x 800 pixels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxOpen(false)}
          >
            <MdClose size={30} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-300 text-4xl"
            onClick={() => navigateLightbox(-1)}
          >
            &lsaquo;
          </button>

          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={images[lightboxIndex].url || "/placeholder.svg"}
              alt={images[lightboxIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">{images[lightboxIndex].caption}</p>
          </div>

          <button
            className="absolute right-4 text-white hover:text-gray-300 text-4xl"
            onClick={() => navigateLightbox(1)}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  )
}

export default GalleryView
