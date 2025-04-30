// // // import { useState, useEffect, useRef, useCallback } from "react"
// // // import { FaDrawPolygon, FaTrash, FaInfoCircle } from "react-icons/fa"

// // // const GoogleMapComponent = ({ initialCoordinates = [], onPolygonComplete, readOnly = false }) => {
// // //   const mapRef = useRef(null)
// // //   const [map, setMap] = useState(null)
// // //   const [drawingManager, setDrawingManager] = useState(null)
// // //   const [polygon, setPolygon] = useState(null)
// // //   const [isDrawing, setIsDrawing] = useState(false)
// // //   const [error, setError] = useState("")

// // //   // Initialize the map
// // //   useEffect(() => {
// // //     // Check if Google Maps API is loaded
// // //     if (!window.google || !window.google.maps) {
// // //       setError("Google Maps API not loaded. Please add your API key to environment variables.")
// // //       return
// // //     }

// // //     const mapOptions = {
// // //       center: { lat: 24.8607, lng: 67.0011 }, // Default to Karachi
// // //       zoom: 12,
// // //       mapTypeId: window.google.maps.MapTypeId.ROADMAP,
// // //       mapTypeControl: true,
// // //       streetViewControl: false,
// // //       fullscreenControl: true,
// // //     }

// // //     const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
// // //     setMap(newMap)

// // //     // Clean up on unmount
// // //     return () => {
// // //       if (drawingManager) {
// // //         drawingManager.setMap(null)
// // //       }
// // //       if (polygon) {
// // //         polygon.setMap(null)
// // //       }
// // //     }
// // //   }, [])

// // //   // Initialize drawing manager
// // //   useEffect(() => {
// // //     if (!map || !window.google) return

// // //     if (!readOnly) {
// // //       const newDrawingManager = new window.google.maps.drawing.DrawingManager({
// // //         drawingMode: null,
// // //         drawingControl: false,
// // //         polygonOptions: {
// // //           fillColor: "#FF6B6B",
// // //           fillOpacity: 0.3,
// // //           strokeWeight: 2,
// // //           strokeColor: "#FF6B6B",
// // //           clickable: true,
// // //           editable: true,
// // //           zIndex: 1,
// // //         },
// // //       })

// // //       newDrawingManager.setMap(map)
// // //       setDrawingManager(newDrawingManager)

// // //       // Add listener for polygon complete
// // //       window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
// // //         setIsDrawing(false)
// // //         setPolygon(poly)

// // //         // Get coordinates
// // //         const path = poly.getPath()
// // //         const coordinates = []
// // //         for (let i = 0; i < path.getLength(); i++) {
// // //           const point = path.getAt(i)
// // //           coordinates.push({ lat: point.lat(), lng: point.lng() })
// // //         }

// // //         // Validate minimum points
// // //         if (coordinates.length < 3) {
// // //           setError("At least 3 points are required to define a zone")
// // //           return
// // //         } else {
// // //           setError("")
// // //         }

// // //         // Pass coordinates to parent
// // //         if (onPolygonComplete) {
// // //           onPolygonComplete(coordinates)
// // //         }

// // //         // Add listener for path changes
// // //         window.google.maps.event.addListener(path, "set_at", () => {
// // //           updateCoordinates(poly)
// // //         })
// // //         window.google.maps.event.addListener(path, "insert_at", () => {
// // //           updateCoordinates(poly)
// // //         })
// // //         window.google.maps.event.addListener(path, "remove_at", () => {
// // //           updateCoordinates(poly)
// // //         })

// // //         // Disable drawing mode
// // //         newDrawingManager.setDrawingMode(null)
// // //       })
// // //     }
// // //   }, [map, onPolygonComplete, readOnly])

// // //   // Display initial coordinates if provided
// // //   useEffect(() => {
// // //     if (!map || !window.google || initialCoordinates.length < 3) return

// // //     // Clear existing polygon
// // //     if (polygon) {
// // //       polygon.setMap(null)
// // //     }

// // //     // Create polygon from coordinates
// // //     const polygonPath = initialCoordinates.map((coord) => ({
// // //       lat: Number.parseFloat(coord.lat),
// // //       lng: Number.parseFloat(coord.lng),
// // //     }))

// // //     const newPolygon = new window.google.maps.Polygon({
// // //       paths: polygonPath,
// // //       fillColor: "#FF6B6B",
// // //       fillOpacity: 0.3,
// // //       strokeWeight: 2,
// // //       strokeColor: "#FF6B6B",
// // //       clickable: true,
// // //       editable: !readOnly,
// // //       zIndex: 1,
// // //     })

// // //     newPolygon.setMap(map)
// // //     setPolygon(newPolygon)

// // //     // Center map on polygon
// // //     const bounds = new window.google.maps.LatLngBounds()
// // //     polygonPath.forEach((coord) => {
// // //       bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
// // //     })
// // //     map.fitBounds(bounds)

// // //     // Add listeners for editable polygon
// // //     if (!readOnly) {
// // //       const path = newPolygon.getPath()
// // //       window.google.maps.event.addListener(path, "set_at", () => {
// // //         updateCoordinates(newPolygon)
// // //       })
// // //       window.google.maps.event.addListener(path, "insert_at", () => {
// // //         updateCoordinates(newPolygon)
// // //       })
// // //       window.google.maps.event.addListener(path, "remove_at", () => {
// // //         updateCoordinates(newPolygon)
// // //       })
// // //     }
// // //   }, [map, initialCoordinates, readOnly])

// // //   // Update coordinates when polygon is edited
// // //   const updateCoordinates = useCallback(
// // //     (poly) => {
// // //       const path = poly.getPath()
// // //       const coordinates = []
// // //       for (let i = 0; i < path.getLength(); i++) {
// // //         const point = path.getAt(i)
// // //         coordinates.push({ lat: point.lat(), lng: point.lng() })
// // //       }

// // //       // Validate minimum points
// // //       if (coordinates.length < 3) {
// // //         setError("At least 3 points are required to define a zone")
// // //         return
// // //       } else {
// // //         setError("")
// // //       }

// // //       // Pass coordinates to parent
// // //       if (onPolygonComplete) {
// // //         onPolygonComplete(coordinates)
// // //       }
// // //     },
// // //     [onPolygonComplete],
// // //   )

// // //   // Start drawing polygon
// // //   const startDrawing = () => {
// // //     if (!drawingManager) return

// // //     // Clear existing polygon
// // //     if (polygon) {
// // //       polygon.setMap(null)
// // //       setPolygon(null)
// // //     }

// // //     setIsDrawing(true)
// // //     drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
// // //   }

// // //   // Clear polygon
// // //   const clearPolygon = () => {
// // //     if (polygon) {
// // //       polygon.setMap(null)
// // //       setPolygon(null)
// // //     }
// // //     setError("")
// // //     if (onPolygonComplete) {
// // //       onPolygonComplete([])
// // //     }
// // //   }

// // //   return (
// // //     <div className="relative">
// // //       <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

// // //       {error && (
// // //         <div className="mt-2 text-red-500 flex items-center">
// // //           <FaInfoCircle className="mr-2" />
// // //           {error}
// // //         </div>
// // //       )}

// // //       {!readOnly && (
// // //         <div className="absolute top-4 right-4 flex flex-col gap-2">
// // //           <button
// // //             type="button"
// // //             onClick={startDrawing}
// // //             disabled={isDrawing}
// // //             className={`p-2 rounded-full ${
// // //               isDrawing
// // //                 ? "bg-gray-300 text-gray-600"
// // //                 : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
// // //             }`}
// // //             title="Draw Zone"
// // //           >
// // //             <FaDrawPolygon size={20} />
// // //           </button>
// // //           <button
// // //             type="button"
// // //             onClick={clearPolygon}
// // //             disabled={!polygon}
// // //             className={`p-2 rounded-full ${
// // //               !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
// // //             }`}
// // //             title="Clear Zone"
// // //           >
// // //             <FaTrash size={20} />
// // //           </button>
// // //         </div>
// // //       )}

// // //       {!window.google && (
// // //         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
// // //           <div className="text-center p-4">
// // //             <FaInfoCircle className="text-yellow-500 text-4xl mx-auto mb-2" />
// // //             <p className="text-gray-700 font-medium">Google Maps API not loaded</p>
// // //             <p className="text-sm text-gray-500 mt-1">Please add your Google Maps API key to environment variables.</p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {isDrawing && (
// // //         <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
// // //           <p className="text-primary-900 font-medium flex items-center">
// // //             <FaInfoCircle className="mr-2 text-primary-700" />
// // //             Drawing mode active: Click on the map to create points. Complete the polygon by connecting to the first
// // //             point.
// // //           </p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default GoogleMapComponent

// // import { useState, useEffect, useRef, useCallback } from "react"
// // import { FaDrawPolygon, FaTrash, FaInfoCircle } from "react-icons/fa"

// // const GoogleMapComponent = ({ initialCoordinates = [], onPolygonComplete, readOnly = false }) => {
// //   const mapRef = useRef(null)
// //   const [map, setMap] = useState(null)
// //   const [drawingManager, setDrawingManager] = useState(null)
// //   const [polygon, setPolygon] = useState(null)
// //   const [isDrawing, setIsDrawing] = useState(false)
// //   const [error, setError] = useState("")

// //   // Initialize the map
// //   useEffect(() => {
// //     if (!window.google || !window.google.maps) {
// //       setError("Google Maps API not loaded. Please add your API key to environment variables.")
// //       return
// //     }

// //     const mapOptions = {
// //       center: { lat: 24.8607, lng: 67.0011 },
// //       zoom: 12,
// //       mapTypeId: window.google.maps.MapTypeId.ROADMAP,
// //       mapTypeControl: true,
// //       streetViewControl: false,
// //       fullscreenControl: true,
// //     }

// //     const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
// //     setMap(newMap)

// //     return () => {
// //       if (drawingManager) {
// //         drawingManager.setMap(null)
// //       }
// //       if (polygon) {
// //         polygon.setMap(null)
// //       }
// //     }
// //   }, [])

// //   // Initialize drawing manager
// //   useEffect(() => {
// //     if (!map || !window.google) return

// //     if (!readOnly) {
// //       const newDrawingManager = new window.google.maps.drawing.DrawingManager({
// //         drawingMode: null,
// //         drawingControl: false,
// //         polygonOptions: {
// //           fillColor: "#FF6B6B",
// //           fillOpacity: 0.3,
// //           strokeWeight: 2,
// //           strokeColor: "#FF6B6B",
// //           clickable: true,
// //           editable: true,
// //           zIndex: 1,
// //         },
// //       })

// //       newDrawingManager.setMap(map)
// //       setDrawingManager(newDrawingManager)

// //       window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
// //         setIsDrawing(false)
// //         setPolygon(poly)

// //         const path = poly.getPath()
// //         const coordinates = []
// //         for (let i = 0; i < path.getLength(); i++) {
// //           const point = path.getAt(i)
// //           coordinates.push({ lat: point.lat(), lng: point.lng() })
// //         }

// //         if (coordinates.length < 3) {
// //           setError("At least 3 points are required to define a zone")
// //           return
// //         } else {
// //           setError("")
// //         }

// //         if (onPolygonComplete) {
// //           onPolygonComplete(coordinates)
// //         }

// //         window.google.maps.event.addListener(path, "set_at", () => {
// //           updateCoordinates(poly)
// //         })
// //         window.google.maps.event.addListener(path, "insert_at", () => {
// //           updateCoordinates(poly)
// //         })
// //         window.google.maps.event.addListener(path, "remove_at", () => {
// //           updateCoordinates(poly)
// //         })

// //         newDrawingManager.setDrawingMode(null)
// //       })
// //     }
// //   }, [map, onPolygonComplete, readOnly])

// //   // Display initial coordinates
// //   useEffect(() => {
// //     if (!map || !window.google || initialCoordinates.length < 3) return

// //     if (polygon) {
// //       polygon.setMap(null)
// //     }

// //     const polygonPath = initialCoordinates.map((coord) => ({
// //       lat: Number.parseFloat(coord.lat),
// //       lng: Number.parseFloat(coord.lng),
// //     }))

// //     const newPolygon = new window.google.maps.Polygon({
// //       paths: polygonPath,
// //       fillColor: "#FF6B6B",
// //       fillOpacity: 0.3,
// //       strokeWeight: 2,
// //       strokeColor: "#FF6B6B",
// //       clickable: true,
// //       editable: !readOnly,
// //       zIndex: 1,
// //     })

// //     newPolygon.setMap(map)
// //     setPolygon(newPolygon)

// //     const bounds = new window.google.maps.LatLngBounds()
// //     polygonPath.forEach((coord) => {
// //       bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
// //     })
// //     map.fitBounds(bounds)

// //     if (!readOnly) {
// //       const path = newPolygon.getPath()
// //       window.google.maps.event.addListener(path, "set_at", () => {
// //         updateCoordinates(newPolygon)
// //       })
// //       window.google.maps.event.addListener(path, "insert_at", () => {
// //         updateCoordinates(newPolygon)
// //       })
// //       window.google.maps.event.addListener(path, "remove_at", () => {
// //         updateCoordinates(newPolygon)
// //       })
// //     }
// //   }, [map, initialCoordinates, readOnly])

// //   const updateCoordinates = useCallback(
// //     (poly) => {
// //       const path = poly.getPath()
// //       const coordinates = []
// //       for (let i = 0; i < path.getLength(); i++) {
// //         const point = path.getAt(i)
// //         coordinates.push({ lat: point.lat(), lng: point.lng() })
// //       }

// //       if (coordinates.length < 3) {
// //         setError("At least 3 points are required to define a zone")
// //         return
// //       } else {
// //         setError("")
// //       }

// //       if (onPolygonComplete) {
// //         onPolygonComplete(coordinates)
// //       }
// //     },
// //     [onPolygonComplete]
// //   )

// //   const startDrawing = () => {
// //     if (!drawingManager) return

// //     if (polygon) {
// //       polygon.setMap(null)
// //       setPolygon(null)
// //     }

// //     setIsDrawing(true)
// //     drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
// //   }

// //   const clearPolygon = () => {
// //     if (polygon) {
// //       polygon.setMap(null)
// //       setPolygon(null)
// //     }
// //     setError("")
// //     if (onPolygonComplete) {
// //       onPolygonComplete([])
// //     }
// //   }

// //   return (
// //     <div className="relative">
// //       <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

// //       {error && (
// //         <div className="mt-2 text-red-500 flex items-center">
// //           <FaInfoCircle className="mr-2" />
// //           {error}
// //         </div>
// //       )}

// //       {!readOnly && (
// //         <div className="absolute top-4 right-4 flex flex-col gap-2">
// //           <button
// //             type="button"
// //             onClick={startDrawing}
// //             disabled={isDrawing}
// //             className={`p-2 rounded-full ${
// //               isDrawing
// //                 ? "bg-gray-300 text-gray-600"
// //                 : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
// //             }`}
// //             title="Draw Zone"
// //           >
// //             <FaDrawPolygon size={20} />
// //           </button>
// //           <button
// //             type="button"
// //             onClick={clearPolygon}
// //             disabled={!polygon}
// //             className={`p-2 rounded-full ${
// //               !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
// //             }`}
// //             title="Clear Zone"
// //           >
// //             <FaTrash size={20} />
// //           </button>
// //         </div>
// //       )}

// //       {!window.google && (
// //         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
// //           <div className="text-center p-4">
// //             <FaInfoCircle className="text-yellow-500 text-4xl mx-auto mb-2" />
// //             <p className="text-gray-700 font-medium">
// //               Google Maps API not loaded. Please check your internet connection or API key.
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default GoogleMapComponent

// "use client"

// import { useState, useEffect, useRef, useCallback } from "react"
// import { FaDrawPolygon, FaTrash, FaInfoCircle, FaHandPointUp } from "react-icons/fa"

// const GoogleMapComponent = ({ initialCoordinates = [], onPolygonComplete, readOnly = false }) => {
//   const mapRef = useRef(null)
//   const [map, setMap] = useState(null)
//   const [drawingManager, setDrawingManager] = useState(null)
//   const [polygon, setPolygon] = useState(null)
//   const [isDrawing, setIsDrawing] = useState(false)
//   const [error, setError] = useState("")
//   const [mapLoaded, setMapLoaded] = useState(false)
//   const [mapError, setMapError] = useState(null)

//   // Check if Google Maps API is loaded
//   useEffect(() => {
//     const checkGoogleMapsLoaded = () => {
//       if (window.google && window.google.maps) {
//         setMapLoaded(true)
//       } else {
//         console.log("Google Maps not yet loaded, retrying...")
//         setTimeout(checkGoogleMapsLoaded, 500)
//       }
//     }

//     // Check if Google Maps API is loaded
//     if (window.google && window.google.maps) {
//       setMapLoaded(true)
//     } else {
//       // Add event listener for when the API loads
//       window.initMap = () => {
//         setMapLoaded(true)
//       }

//       // Add error handler
//       const handleMapError = () => {
//         console.error("Google Maps failed to load")
//         setMapError("Failed to load Google Maps. Please check your API key and network connection.")
//       }

//       // Check if the script is already in error state
//       const mapScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]')
//       if (mapScript) {
//         mapScript.addEventListener("error", handleMapError)
//       }

//       // Set a timeout to check if maps loaded
//       const timeout = setTimeout(() => {
//         if (!window.google || !window.google.maps) {
//           handleMapError()
//         }
//       }, 5000)

//       return () => {
//         clearTimeout(timeout)
//         if (mapScript) {
//           mapScript.removeEventListener("error", handleMapError)
//         }
//       }
//     }

//     checkGoogleMapsLoaded()

//     return () => {
//       // Cleanup
//     }
//   }, [])

//   // Initialize the map
//   useEffect(() => {
//     if (!mapLoaded) return

//     try {
//       const mapOptions = {
//         center: { lat: 24.8607, lng: 67.0011 }, // Default to Karachi
//         zoom: 12,
//         mapTypeId: window.google.maps.MapTypeId.ROADMAP,
//         mapTypeControl: true,
//         streetViewControl: false,
//         fullscreenControl: true,
//       }

//       const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
//       setMap(newMap)
//       setError("")
//     } catch (err) {
//       console.error("Error initializing map:", err)
//       setError(`Error initializing map: ${err.message}`)
//     }

//     return () => {
//       if (drawingManager) {
//         drawingManager.setMap(null)
//       }
//       if (polygon) {
//         polygon.setMap(null)
//       }
//     }
//   }, [mapLoaded])

//   // Initialize drawing manager
//   useEffect(() => {
//     if (!map || !mapLoaded || readOnly) return

//     try {
//       const newDrawingManager = new window.google.maps.drawing.DrawingManager({
//         drawingMode: null,
//         drawingControl: false,
//         polygonOptions: {
//           fillColor: "#FF6B6B",
//           fillOpacity: 0.3,
//           strokeWeight: 2,
//           strokeColor: "#FF6B6B",
//           clickable: true,
//           editable: true,
//           zIndex: 1,
//         },
//       })

//       newDrawingManager.setMap(map)
//       setDrawingManager(newDrawingManager)

//       window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
//         setIsDrawing(false)
//         setPolygon(poly)

//         const path = poly.getPath()
//         const coordinates = []
//         for (let i = 0; i < path.getLength(); i++) {
//           const point = path.getAt(i)
//           coordinates.push({ lat: point.lat(), lng: point.lng() })
//         }

//         if (coordinates.length < 3) {
//           setError("At least 3 points are required to define a zone")
//           return
//         } else {
//           setError("")
//         }

//         if (onPolygonComplete) {
//           onPolygonComplete(coordinates)
//         }

//         window.google.maps.event.addListener(path, "set_at", () => {
//           updateCoordinates(poly)
//         })
//         window.google.maps.event.addListener(path, "insert_at", () => {
//           updateCoordinates(poly)
//         })
//         window.google.maps.event.addListener(path, "remove_at", () => {
//           updateCoordinates(poly)
//         })

//         newDrawingManager.setDrawingMode(null)
//       })
//     } catch (err) {
//       console.error("Error initializing drawing manager:", err)
//       setError(`Error initializing drawing tools: ${err.message}`)
//     }
//   }, [map, onPolygonComplete, readOnly, mapLoaded])

//   // Display initial coordinates
//   useEffect(() => {
//     if (!map || !mapLoaded || initialCoordinates.length < 3) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//       }

//       const polygonPath = initialCoordinates.map((coord) => ({
//         lat: Number.parseFloat(coord.lat),
//         lng: Number.parseFloat(coord.lng),
//       }))

//       const newPolygon = new window.google.maps.Polygon({
//         paths: polygonPath,
//         fillColor: "#FF6B6B",
//         fillOpacity: 0.3,
//         strokeWeight: 2,
//         strokeColor: "#FF6B6B",
//         clickable: true,
//         editable: !readOnly,
//         zIndex: 1,
//       })

//       newPolygon.setMap(map)
//       setPolygon(newPolygon)

//       const bounds = new window.google.maps.LatLngBounds()
//       polygonPath.forEach((coord) => {
//         bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
//       })
//       map.fitBounds(bounds)

//       if (!readOnly) {
//         const path = newPolygon.getPath()
//         window.google.maps.event.addListener(path, "set_at", () => {
//           updateCoordinates(newPolygon)
//         })
//         window.google.maps.event.addListener(path, "insert_at", () => {
//           updateCoordinates(newPolygon)
//         })
//         window.google.maps.event.addListener(path, "remove_at", () => {
//           updateCoordinates(newPolygon)
//         })
//       }
//     } catch (err) {
//       console.error("Error displaying polygon:", err)
//       setError(`Error displaying zone area: ${err.message}`)
//     }
//   }, [map, initialCoordinates, readOnly, mapLoaded])

//   const updateCoordinates = useCallback(
//     (poly) => {
//       if (!poly) return

//       try {
//         const path = poly.getPath()
//         const coordinates = []
//         for (let i = 0; i < path.getLength(); i++) {
//           const point = path.getAt(i)
//           coordinates.push({ lat: point.lat(), lng: point.lng() })
//         }

//         if (coordinates.length < 3) {
//           setError("At least 3 points are required to define a zone")
//           return
//         } else {
//           setError("")
//         }

//         if (onPolygonComplete) {
//           onPolygonComplete(coordinates)
//         }
//       } catch (err) {
//         console.error("Error updating coordinates:", err)
//         setError(`Error updating zone area: ${err.message}`)
//       }
//     },
//     [onPolygonComplete],
//   )

//   const startDrawing = () => {
//     if (!drawingManager || !mapLoaded) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//         setPolygon(null)
//       }

//       setIsDrawing(true)
//       drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
//     } catch (err) {
//       console.error("Error starting drawing:", err)
//       setError(`Error starting drawing mode: ${err.message}`)
//     }
//   }

//   const clearPolygon = () => {
//     if (!mapLoaded) return

//     try {
//       if (polygon) {
//         polygon.setMap(null)
//         setPolygon(null)
//       }
//       setError("")
//       if (onPolygonComplete) {
//         onPolygonComplete([])
//       }
//     } catch (err) {
//       console.error("Error clearing polygon:", err)
//       setError(`Error clearing zone area: ${err.message}`)
//     }
//   }

//   if (mapError) {
//     return (
//       <div className="map-error-container">
//         <div className="map-error">
//           <h3>Google Maps Error</h3>
//           <p>{mapError}</p>
//           <p>Please check the JavaScript console for more details.</p>
//         </div>
//       </div>
//     )
//   }

//   if (!mapLoaded) {
//     return (
//       <div className="map-loading">
//         <p>Loading Google Maps...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="relative">
//       <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

//       {error && (
//         <div className="mt-2 text-red-500 flex items-center">
//           <FaInfoCircle className="mr-2" />
//           {error}
//         </div>
//       )}

//       {!readOnly && mapLoaded && (
//         <div className="absolute top-4 right-4 flex flex-col gap-2">
//           <button
//             type="button"
//             onClick={startDrawing}
//             disabled={isDrawing}
//             className={`p-2 rounded-full ${
//               isDrawing
//                 ? "bg-gray-300 text-gray-600"
//                 : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
//             }`}
//             title="Draw Zone"
//           >
//             <FaDrawPolygon size={20} />
//           </button>
//           <button
//             type="button"
//             onClick={clearPolygon}
//             disabled={!polygon}
//             className={`p-2 rounded-full ${
//               !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
//             }`}
//             title="Clear Zone"
//           >
//             <FaTrash size={20} />
//           </button>
//         </div>
//       )}

//       {!mapLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
//           <div className="text-center p-4">
//             <FaInfoCircle className="text-yellow-500 text-4xl mx-auto mb-2" />
//             <p className="text-gray-700 font-medium">Loading Google Maps...</p>
//             <p className="text-sm text-gray-500 mt-1">
//               If the map doesn't load, please check your API key and internet connection.
//             </p>
//           </div>
//         </div>
//       )}

//       {isDrawing && mapLoaded && (
//         <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
//           <p className="text-primary-900 font-medium flex items-center">
//             <FaHandPointUp className="mr-2 text-primary-700" />
//             Click on the map to create points. Complete the polygon by connecting to the first point.
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default GoogleMapComponent

"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { FaDrawPolygon, FaTrash, FaInfoCircle, FaHandPointUp, FaMapMarkerAlt, FaSearch } from "react-icons/fa"

const GoogleMapComponent = ({ initialCoordinates = [], onPolygonComplete, readOnly = false }) => {
  const mapRef = useRef(null)
  const searchBoxRef = useRef(null)
  const [map, setMap] = useState(null)
  const [drawingManager, setDrawingManager] = useState(null)
  const [polygon, setPolygon] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [error, setError] = useState("")
  const [mapLoaded, setMapLoaded] = useState(false)
  const [searchBox, setSearchBox] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [currentLocation, setCurrentLocation] = useState(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)

  // Check if Google Maps API is loaded
  useEffect(() => {
    const checkGoogleMapsLoaded = () => {
      if (window.google && window.google.maps) {
        setMapLoaded(true)
      } else {
        console.log("Google Maps not yet loaded, retrying...")
        setTimeout(checkGoogleMapsLoaded, 500)
      }
    }

    checkGoogleMapsLoaded()

    return () => {
      // Cleanup
    }
  }, [])

  // Initialize the map
  useEffect(() => {
    if (!mapLoaded) return

    try {
      // Default to Karachi, Pakistan
      const defaultCenter = { lat: 24.8607, lng: 67.0011 }

      const mapOptions = {
        center: defaultCenter,
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      }

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
      setMap(newMap)
      setError("")

      // Initialize search box
      if (searchBoxRef.current) {
        const newSearchBox = new window.google.maps.places.SearchBox(searchBoxRef.current)
        setSearchBox(newSearchBox)

        // Listen for the event fired when the user selects a prediction
        newSearchBox.addListener("places_changed", () => {
          const places = newSearchBox.getPlaces()

          if (places.length === 0) {
            return
          }

          // For each place, get the location.
          const bounds = new window.google.maps.LatLngBounds()
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry")
              return
            }

            // Center map on the selected place
            newMap.setCenter(place.geometry.location)
            newMap.setZoom(15)

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })
          newMap.fitBounds(bounds)
        })
      }
    } catch (err) {
      console.error("Error initializing map:", err)
      setError(`Error initializing map: ${err.message}`)
    }

    return () => {
      if (drawingManager) {
        drawingManager.setMap(null)
      }
      if (polygon) {
        polygon.setMap(null)
      }
    }
  }, [mapLoaded])

  // Initialize drawing manager
  useEffect(() => {
    if (!map || !mapLoaded || readOnly) return

    try {
      const newDrawingManager = new window.google.maps.drawing.DrawingManager({
        drawingMode: null,
        drawingControl: false,
        polygonOptions: {
          fillColor: "#FF6B6B",
          fillOpacity: 0.3,
          strokeWeight: 2,
          strokeColor: "#FF6B6B",
          clickable: true,
          editable: true,
          zIndex: 1,
        },
      })

      newDrawingManager.setMap(map)
      setDrawingManager(newDrawingManager)

      window.google.maps.event.addListener(newDrawingManager, "polygoncomplete", (poly) => {
        setIsDrawing(false)
        setPolygon(poly)

        const path = poly.getPath()
        const coordinates = []
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i)
          coordinates.push({ lat: point.lat(), lng: point.lng() })
        }

        if (coordinates.length < 3) {
          setError("At least 3 points are required to define a zone")
          return
        } else {
          setError("")
        }

        if (onPolygonComplete) {
          onPolygonComplete(coordinates)
        }

        window.google.maps.event.addListener(path, "set_at", () => {
          updateCoordinates(poly)
        })
        window.google.maps.event.addListener(path, "insert_at", () => {
          updateCoordinates(poly)
        })
        window.google.maps.event.addListener(path, "remove_at", () => {
          updateCoordinates(poly)
        })

        newDrawingManager.setDrawingMode(null)
      })
    } catch (err) {
      console.error("Error initializing drawing manager:", err)
      setError(`Error initializing drawing tools: ${err.message}`)
    }
  }, [map, onPolygonComplete, readOnly, mapLoaded])

  // Display initial coordinates
  useEffect(() => {
    if (!map || !mapLoaded || initialCoordinates.length < 3) return

    try {
      if (polygon) {
        polygon.setMap(null)
      }

      const polygonPath = initialCoordinates.map((coord) => ({
        lat: Number.parseFloat(coord.lat),
        lng: Number.parseFloat(coord.lng),
      }))

      const newPolygon = new window.google.maps.Polygon({
        paths: polygonPath,
        fillColor: "#FF6B6B",
        fillOpacity: 0.3,
        strokeWeight: 2,
        strokeColor: "#FF6B6B",
        clickable: true,
        editable: !readOnly,
        zIndex: 1,
      })

      newPolygon.setMap(map)
      setPolygon(newPolygon)

      const bounds = new window.google.maps.LatLngBounds()
      polygonPath.forEach((coord) => {
        bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng))
      })
      map.fitBounds(bounds)

      if (!readOnly) {
        const path = newPolygon.getPath()
        window.google.maps.event.addListener(path, "set_at", () => {
          updateCoordinates(newPolygon)
        })
        window.google.maps.event.addListener(path, "insert_at", () => {
          updateCoordinates(newPolygon)
        })
        window.google.maps.event.addListener(path, "remove_at", () => {
          updateCoordinates(newPolygon)
        })
      }
    } catch (err) {
      console.error("Error displaying polygon:", err)
      setError(`Error displaying zone area: ${err.message}`)
    }
  }, [map, initialCoordinates, readOnly, mapLoaded])

  const updateCoordinates = useCallback(
    (poly) => {
      if (!poly) return

      try {
        const path = poly.getPath()
        const coordinates = []
        for (let i = 0; i < path.getLength(); i++) {
          const point = path.getAt(i)
          coordinates.push({ lat: point.lat(), lng: point.lng() })
        }

        if (coordinates.length < 3) {
          setError("At least 3 points are required to define a zone")
          return
        } else {
          setError("")
        }

        if (onPolygonComplete) {
          onPolygonComplete(coordinates)
        }
      } catch (err) {
        console.error("Error updating coordinates:", err)
        setError(`Error updating zone area: ${err.message}`)
      }
    },
    [onPolygonComplete],
  )

  const startDrawing = () => {
    if (!drawingManager || !mapLoaded) return

    try {
      if (polygon) {
        polygon.setMap(null)
        setPolygon(null)
      }

      setIsDrawing(true)
      drawingManager.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON)
    } catch (err) {
      console.error("Error starting drawing:", err)
      setError(`Error starting drawing mode: ${err.message}`)
    }
  }

  const clearPolygon = () => {
    if (!mapLoaded) return

    try {
      if (polygon) {
        polygon.setMap(null)
        setPolygon(null)
      }
      setError("")
      if (onPolygonComplete) {
        onPolygonComplete([])
      }
    } catch (err) {
      console.error("Error clearing polygon:", err)
      setError(`Error clearing zone area: ${err.message}`)
    }
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const getCurrentLocation = () => {
    if (!mapLoaded || !map) return

    setIsLoadingLocation(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          setCurrentLocation(pos)
          map.setCenter(pos)
          map.setZoom(15)

          // Add a marker for current location
          new window.google.maps.Marker({
            position: pos,
            map: map,
            title: "Your Location",
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#4285F4",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          })

          setIsLoadingLocation(false)
        },
        (error) => {
          console.error("Error getting current location:", error)
          setError(`Error getting your location: ${error.message}`)
          setIsLoadingLocation(false)
        },
      )
    } else {
      setError("Geolocation is not supported by this browser")
      setIsLoadingLocation(false)
    }
  }

  return (
    <div className="relative">
      {/* Search Box */}
      <div className="absolute top-4 left-4 z-10 w-64 md:w-80">
        <div className="relative">
          <input
            ref={searchBoxRef}
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search for a location..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Current Location Button */}
      <button
        type="button"
        onClick={getCurrentLocation}
        disabled={isLoadingLocation}
        className="absolute top-4 right-20 z-10 bg-white p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        title="Get Current Location"
      >
        {isLoadingLocation ? (
          <div className="animate-spin h-5 w-5 border-2 border-primary-500 border-t-transparent rounded-full"></div>
        ) : (
          <FaMapMarkerAlt className="text-primary-500" />
        )}
      </button>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-[400px] rounded-lg border border-gray-300"></div>

      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-50 text-red-700 p-3 rounded-lg border border-red-200 flex items-center">
          <FaInfoCircle className="mr-2 flex-shrink-0" />
          {error}
        </div>
      )}

      {!readOnly && mapLoaded && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={startDrawing}
            disabled={isDrawing}
            className={`p-2 rounded-full ${
              isDrawing
                ? "bg-gray-300 text-gray-600"
                : "bg-primary-900 text-white hover:bg-primary-800 transition-colors"
            }`}
            title="Draw Zone"
          >
            <FaDrawPolygon size={20} />
          </button>
          <button
            type="button"
            onClick={clearPolygon}
            disabled={!polygon}
            className={`p-2 rounded-full ${
              !polygon ? "bg-gray-300 text-gray-600" : "bg-red-600 text-white hover:bg-red-700 transition-colors"
            }`}
            title="Clear Zone"
          >
            <FaTrash size={20} />
          </button>
        </div>
      )}

      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
          <div className="text-center p-4">
            <div className="animate-spin h-10 w-10 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-gray-700 font-medium">Loading Google Maps...</p>
            <p className="text-sm text-gray-500 mt-1">
              If the map doesn't load, please check your API key and internet connection.
            </p>
          </div>
        </div>
      )}

      {isDrawing && mapLoaded && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-primary-200">
          <p className="text-primary-900 font-medium flex items-center">
            <FaHandPointUp className="mr-2 text-primary-700" />
            Click on the map to create points. Complete the polygon by connecting to the first point.
          </p>
        </div>
      )}
    </div>
  )
}

export default GoogleMapComponent
