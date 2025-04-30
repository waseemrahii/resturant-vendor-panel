
// import { useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"
// import { toast } from "react-toastify"
// import { useAuth } from "../context/AuthContext"

// const SellerLogin = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [rememberMe, setRememberMe] = useState(false)
//   const navigate = useNavigate()
//   const { login } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!email.trim() || !password.trim()) {
//       toast.error("Please enter both email and password")
//       return
//     }

//     setLoading(true)

//     try {
//       // Simulate API call
//       setTimeout(() => {
//         // For demo purposes, accept any credentials
//         const userData = {
//           id: "seller-123",
//           name: "Restaurant Owner",
//           email: email,
//           role: "seller",
//           restaurantId: "rest-456",
//           restaurantName: "Tasty Bites Restaurant",
//           profileImage: "/placeholder.svg?height=200&width=200",
//         }

//         const token = "demo-token-xyz"

//         login(userData, token)
//         toast.success("Login successful!")
//         navigate("/seller/dashboard")
//         setLoading(false)
//       }, 1000)
//     } catch (error) {
//       toast.error("Login failed. Please check your credentials.")
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//         <div className="text-center">
//           <img className="mx-auto h-16 w-auto" src="/placeholder.svg?height=64&width=64" alt="eFoodie Logo" />
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Restaurant Partner Login</h2>
//           <p className="mt-2 text-sm text-gray-600">Sign in to manage your restaurant</p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div className="relative mb-4">
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaEnvelope className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                 >
//                   {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={() => setRememberMe(!rememberMe)}
//                 className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link to="/forgot-password" className="font-medium text-orange-600 hover:text-orange-500">
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
//                 loading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? (
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//               ) : null}
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </div>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="https://efoodie.com/partner-signup" className="font-medium text-orange-600 hover:text-orange-500">
//               Apply to become a partner
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SellerLogin


"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa"
import { toast } from "react-toastify"
import { useAuth } from "../context/AuthContext"

const SellerLogin = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [showPassword, setShowPassword] = useState(false)
const [loading, setLoading] = useState(false)
const [rememberMe, setRememberMe] = useState(false)
const navigate = useNavigate()
const { login, isAuthenticated } = useAuth()

// Redirect if already logged in
useEffect(() => {
  if (isAuthenticated()) {
    navigate("/seller/dashboard")
  }
}, [isAuthenticated, navigate])

const handleSubmit = async (e) => {
  e.preventDefault()

  if (!email.trim() || !password.trim()) {
    toast.error("Please enter both email and password")
    return
  }

  setLoading(true)

  try {
    // For demo purposes - any email with a password will work
    // In production, this would be an actual API call
    setTimeout(() => {
      const userData = {
        id: "seller-123",
        name: "Restaurant Owner",
        email: email,
        role: "seller",
        restaurantId: "rest-456",
        restaurantName: "Tasty Bites Restaurant",
        profileImage: "/placeholder.svg?height=200&width=200",
      }

      const token = "demo-token-xyz"

      login(userData, token)
      toast.success("Login successful! Welcome to your dashboard.")
      navigate("/seller/dashboard")
      setLoading(false)
    }, 1000)
  } catch (error) {
    toast.error("Login failed. Please check your credentials.")
    setLoading(false)
  }
}

const handleDemoLogin = () => {
  setEmail("demo@restaurant.com")
  setPassword("password123")
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
            <FaUtensils className="h-10 w-10 text-primary-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Restaurant Partner Login</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to manage your restaurant</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-4">
          <button
            onClick={handleDemoLogin}
            className="w-full flex justify-center py-2 px-4 border border-primary-300 rounded-md shadow-sm text-sm font-medium text-primary-600 bg-green-50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
          >
            Use Demo Credentials
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="https://efoodie.com/partner-signup" className="font-medium text-primary-600 hover:text-orange-500">
              Apply to become a partner
            </a>
          </p>
        </div>

        <div className="mt-4 bg-orange-50 p-3 rounded-lg border border-orange-100">
          <p className="text-xs text-primary-500">
            <strong>Demo Info:</strong> Use any email and password to login for demonstration purposes. Or click "Use
            Demo Credentials" button above.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SellerLogin
