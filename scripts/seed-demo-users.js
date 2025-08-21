// Demo user seeding script for development
const demoUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@demo.com",
    password: "password123",
    role: "admin",
    company: "B2B Marketplace Inc.",
    phone: "+1-555-0101",
  },
  {
    id: "2",
    name: "John Seller",
    email: "seller@demo.com",
    password: "password123",
    role: "seller",
    company: "Global Suppliers Ltd.",
    phone: "+1-555-0102",
  },
  {
    id: "3",
    name: "Jane Buyer",
    email: "buyer@demo.com",
    password: "password123",
    role: "buyer",
    company: "Retail Solutions Corp.",
    phone: "+1-555-0103",
  },
]

// Store demo users in localStorage
if (typeof window !== "undefined") {
  localStorage.setItem("b2b_users", JSON.stringify(demoUsers))
  console.log("Demo users seeded successfully!")
  console.log("Available demo accounts:")
  demoUsers.forEach((user) => {
    console.log(`${user.role}: ${user.email} / password123`)
  })
}
