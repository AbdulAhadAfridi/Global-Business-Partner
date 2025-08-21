"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "buyer" | "seller" | "admin"
  company?: string
  phone?: string
  profilePicture?: string // Added profilePicture field to User interface
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (userData: Omit<User, "id"> & { password: string }) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session on mount
    const storedUser = localStorage.getItem("b2b_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Mock authentication - in real app, this would be an API call
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    // Check if user exists in mock database
    const users = JSON.parse(localStorage.getItem("b2b_users") || "[]")
    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("b2b_user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const signup = async (userData: Omit<User, "id"> & { password: string }): Promise<boolean> => {
    setIsLoading(true)

    // Mock registration - in real app, this would be an API call
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("b2b_users") || "[]")
    const existingUser = users.find((u: any) => u.email === userData.email)

    if (existingUser) {
      setIsLoading(false)
      return false // User already exists
    }

    // Create new user
    const newUser = {
      ...userData,
      id: Date.now().toString(),
    }

    users.push(newUser)
    localStorage.setItem("b2b_users", JSON.stringify(users))

    // Auto-login after signup
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("b2b_user", JSON.stringify(userWithoutPassword))

    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("b2b_user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
