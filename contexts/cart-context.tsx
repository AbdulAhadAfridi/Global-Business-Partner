"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: string
  businessId: string
  businessName: string
  productName: string
  description: string
  price: number
  quantity: number
  minOrderQuantity: number
  unit: string
  image?: string
  specifications?: Record<string, string>
}

export interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "id">) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getItemsByBusiness: () => Record<string, CartItem[]>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Load cart from localStorage on mount
    const storedCart = localStorage.getItem("b2b_cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage whenever items change
    localStorage.setItem("b2b_cart", JSON.stringify(items))
  }, [items])

  const addItem = (newItem: Omit<CartItem, "id">) => {
    const itemId = `${newItem.businessId}-${newItem.productName}-${Date.now()}`
    const cartItem: CartItem = { ...newItem, id: itemId }

    setItems((prevItems) => {
      // Check if similar item already exists
      const existingItemIndex = prevItems.findIndex(
        (item) => item.businessId === newItem.businessId && item.productName === newItem.productName,
      )

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, cartItem]
      }
    })
  }

  const removeItem = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemsByBusiness = () => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.businessId]) {
          acc[item.businessId] = []
        }
        acc[item.businessId].push(item)
        return acc
      },
      {} as Record<string, CartItem[]>,
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getItemsByBusiness,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
