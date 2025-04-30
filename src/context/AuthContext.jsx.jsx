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
    const token = localStorage.getItem("efoodie_auth_token")
    const storedUser = localStorage.getItem("efoodie_user")

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse user data:", error)
        localStorage.removeItem("efoodie_auth_token")
        localStorage.removeItem("efoodie_user")
      }
    }

    setLoading(false)
  }, [])

  const login = (userData, token) => {
    localStorage.setItem("efoodie_auth_token", token)
    localStorage.setItem("efoodie_user", JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("efoodie_auth_token")
    localStorage.removeItem("efoodie_user")
    setUser(null)
    navigate("/login")
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
