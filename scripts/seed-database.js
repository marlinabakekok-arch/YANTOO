// Database seeding script for SMK YPE SAMPANG class fund management
// This script would typically be run to initialize the database with sample data

const students = [
  { id: 1, name: "AFRIDA DWI MUSRATUN", nis: "2024001", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 2,
    name: "ALFA IZAH DENOK TRIANINGRUM",
    nis: "2024002",
    class: "XI TJKT 1",
    hasPaid: true,
    lastPayment: "2025-01-15",
  },
  {
    id: 3,
    name: "ALISYA RIZKI SAFITRI",
    nis: "2024003",
    class: "XI TJKT 1",
    hasPaid: false,
    lastPayment: "2025-01-08",
  },
  { id: 4, name: "ARYA GUSTI PURNIAWAN", nis: "2024004", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 5,
    name: "AUFA MAULIND JUNIVER",
    nis: "2024005",
    class: "XI TJKT 1",
    hasPaid: false,
    lastPayment: "2025-01-08",
  },
  { id: 6, name: "AZKA DINI SALWANA", nis: "2024006", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 7,
    name: "AZZAHRA AURORA PARAMADHITA",
    nis: "2024007",
    class: "XI TJKT 1",
    hasPaid: true,
    lastPayment: "2025-01-15",
  },
  { id: 8, name: "CAHYANI UNTARI", nis: "2024008", class: "XI TJKT 1", hasPaid: false, lastPayment: "2025-01-08" },
  { id: 9, name: "DIAN FITRIANINGSIH", nis: "2024009", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  { id: 10, name: "ELMA AMELIA", nis: "2024010", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  { id: 11, name: "GILANG PRASETO", nis: "2024011", class: "XI TJKT 1", hasPaid: false, lastPayment: "2025-01-08" },
  { id: 12, name: "IBNU VINSA MAULANA", nis: "2024012", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  { id: 13, name: "INAN DIYATUL KHAWA", nis: "2024013", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 14,
    name: "MUHAMAD AZRIL ADZANI",
    nis: "2024014",
    class: "XI TJKT 1",
    hasPaid: false,
    lastPayment: "2025-01-08",
  },
  {
    id: 15,
    name: "NABILA EUFIRA RIANTI",
    nis: "2024015",
    class: "XI TJKT 1",
    hasPaid: true,
    lastPayment: "2025-01-15",
  },
  { id: 16, name: "NUR AULI DERMAWAN", nis: "2024016", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 17,
    name: "RASYA NAUFAL ZAIN MUFID",
    nis: "2024017",
    class: "XI TJKT 1",
    hasPaid: false,
    lastPayment: "2025-01-08",
  },
  { id: 18, name: "RESTI APRIANI", nis: "2024018", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  {
    id: 19,
    name: "SHIFAIAH AINUN FAJRI",
    nis: "2024019",
    class: "XI TJKT 1",
    hasPaid: true,
    lastPayment: "2025-01-15",
  },
  { id: 20, name: "TALITA APRILIA", nis: "2024020", class: "XI TJKT 1", hasPaid: false, lastPayment: "2025-01-08" },
  { id: 21, name: "VEGA ROLISTA SAHRA", nis: "2024021", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
  { id: 22, name: "WAFA AULIA MASWA", nis: "2024022", class: "XI TJKT 1", hasPaid: true, lastPayment: "2025-01-15" },
]

const expenses = [
  {
    id: 1,
    className: "XI TJKT 1",
    description: "Fotokopi Materi",
    amount: 50000,
    date: "2025-01-15",
    createdBy: "bendahara",
  },
  {
    id: 2,
    className: "XI TJKT 1",
    description: "Kertas HVS",
    amount: 75000,
    date: "2025-01-10",
    createdBy: "bendahara",
  },
  {
    id: 3,
    className: "XI TJKT 1",
    description: "Spidol Whiteboard",
    amount: 25000,
    date: "2025-01-08",
    createdBy: "bendahara",
  },
  {
    id: 4,
    className: "XI TJKT 1",
    description: "Pembersih Kelas",
    amount: 40000,
    date: "2025-01-05",
    createdBy: "bendahara",
  },
]

const users = [
  {
    id: "aufa",
    name: "Aufa",
    username: "Aufa",
    password: "aufa123", // In production, this should be hashed
    role: "bendahara",
    assignedClass: "XI TJKT 1",
    email: "aufa@smkypesampang.sch.id",
  },
  {
    id: "azkia",
    name: "Azkia",
    username: "Azkia",
    password: "azkia123", // In production, this should be hashed
    role: "bendahara",
    assignedClass: "XI TJKT 1",
    email: "azkia@smkypesampang.sch.id",
  },
  {
    id: "budiana",
    name: "Bu Diana",
    username: "BuDiana",
    password: "guru2025", // In production, this should be hashed
    role: "guru",
    assignedClass: "XI TJKT 1",
    email: "diana@smkypesampang.sch.id",
  },
]

const classSettings = {
  className: "XI TJKT 1",
  studentCount: 22,
  weeklyFeePerStudent: 5000,
  totalWeeklyFee: 110000,
  initialFund: 1540000,
  currentFund: 1200000,
  totalExpenses: 340000,
  createdAt: new Date(),
  updatedAt: new Date(),
}

// Function to seed the database
async function seedDatabase() {
  try {
    console.log("Starting database seeding...")

    // In a real application, you would use your database ORM/client here
    // For example, with Prisma:

    // await prisma.student.createMany({ data: students })
    // await prisma.expense.createMany({ data: expenses })
    // await prisma.user.createMany({ data: users })
    // await prisma.classSetting.create({ data: classSettings })

    console.log("Database seeded successfully!")
    console.log(`- ${students.length} students added`)
    console.log(`- ${expenses.length} expenses added`)
    console.log(`- ${users.length} users added`)
    console.log(`- Class settings configured for ${classSettings.className}`)
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

export {
  students,
  expenses,
  users,
  classSettings,
  seedDatabase,
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
}
