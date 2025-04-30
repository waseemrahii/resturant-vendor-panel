// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"

// const AuthContext = createContext(null)

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Check if user is logged in on initial load
//     const token = localStorage.getItem("foodiee_seller_token")
//     const storedUser = localStorage.getItem("foodiee_seller_user")

//     if (token && storedUser) {
//       try {
//         setUser(JSON.parse(storedUser))
//       } catch (error) {
//         console.error("Failed to parse user data:", error)
//         localStorage.removeItem("foodiee_seller_token")
//         localStorage.removeItem("foodiee_seller_user")
//       }
//     }

//     setLoading(false)
//   }, [])

//   const login = (userData, token) => {
//     localStorage.setItem("foodiee_seller_token", token)
//     localStorage.setItem("foodiee_seller_user", JSON.stringify(userData))
//     setUser(userData)
//     navigate("/")
//   }

//   const logout = () => {
//     localStorage.removeItem("foodiee_seller_token")
//     localStorage.removeItem("foodiee_seller_user")
//     setUser(null)
//     navigate("/login")
//   }

//   const isAuthenticated = () => {
//     return !!user
//   }

//   const value = {
//     user,
//     loading,
//     login,
//     logout,
//     isAuthenticated,
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (context === null) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }




// // "use client"

// // import { createContext, useContext, useState, useEffect } from "react"
// // import { useNavigate } from "react-router-dom"

// // const AuthContext = createContext()

// // export const useAuth = () => useContext(AuthContext)

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null)
// //   const [loading, setLoading] = useState(true)
// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     // Check if user is stored in localStorage
// //     const storedUser = localStorage.getItem("user")
// //     const storedToken = localStorage.getItem("token")

// //     if (storedUser && storedToken) {
// //       setUser(JSON.parse(storedUser))
// //     }

// //     setLoading(false)
// //   }, [])

// //   const login = (userData, token) => {
// //     setUser(userData)
// //     localStorage.setItem("user", JSON.stringify(userData))
// //     localStorage.setItem("token", token)
// //   }

// //   const logout = () => {
// //     setUser(null)
// //     localStorage.removeItem("user")
// //     localStorage.removeItem("token")
// //     navigate("/seller/login")
// //   }

// //   const isAuthenticated = () => {
// //     return !!user
// //   }

// //   const value = {
// //     user,
// //     loading,
// //     login,
// //     logout,
// //     isAuthenticated,
// //   }

// //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// // }



"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in on initial load
    const token = localStorage.getItem("foodiee_seller_token")
    const storedUser = localStorage.getItem("foodiee_seller_user")

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse user data:", error)
        localStorage.removeItem("foodiee_seller_token")
        localStorage.removeItem("foodiee_seller_user")
      }
    }

    setLoading(false)
  }, [])

  const login = (userData, token) => {
    localStorage.setItem("foodiee_seller_token", token)
    localStorage.setItem("foodiee_seller_user", JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("foodiee_seller_token")
    localStorage.removeItem("foodiee_seller_user")
    setUser(null)
    navigate("/seller/login")
  }

  const isAuthenticated = () => {
    return !!user
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
