import { User } from "../../../shared/types/types"
import { Forum } from "../../../shared/types/types";
import { Item } from "../../../shared/types/types";

export const userSeedData: Omit<User, "id">[] = [
    {
    "userName": "Ranindi Gunasekera",
    "bio": "Hello! I am a student in the AD&D program and I am interested in buying and selling computer parts",
    "email": "ranindi@rrc.ca",
    "phone": "657-576-3756",
    "preferredContact": "Email/ Teams"
    },
    {
    "userName": "Heuone Castillo",
    "bio": "Tech enthusiast and gamer. Always looking for deals on PC parts and accessories.",
    "email": "heuone@rrc.ca",
    "phone": "645-433-6785",
    "preferredContact": "Teams"
    },
    {
    "userName": "Alex Richard Carlos",
    "bio": "Jewelry maker and small business owner sharing handmade accessories and gifts.",
    "email": "alex3@rrc.ca",
    "phone": "364-563-4875",
    "preferredContact": "Email"
    },
    {
    "userName": "Jackson Odudu-Abasi",
    "bio": "Book lover curating a collection of novels and art prints for sale.",
    "email": "odudu-abasi@rrc.ca",
    "phone": "233-434-3423",
    "preferredContact": "Email/ In-app"
    },
    {
    "userName": "Renz Tengco",
    "bio": "Casual seller focused on sneakers, sportswear, and fitness equipment.",
    "email": "renzt@rrc.ca",
    "phone": "345-434-5432",
    "preferredContact": "Phone"
    },
    {
    "userName": "Carlos Boquia",
    "bio": "Outdoor enthusiast who frequently sells and trades camping and hiking gear.",
    "email": "carlosbq@rrc.ca",
    "phone": "657-343-3756",
    "preferredContact": "Teams/Phone"
    },
    {
    "userName": "Zizhang He",
    "bio": "Bookworm clearing out shelves to make space for new reads — all genres welcome!",
    "email": "zizhang@rrc.ca",
    "phone": "345-435-4342",
    "preferredContact": "Email/ Teams/ Phone"
    },
    {
    "userName": "Dwayne Malit",
    "bio": "DIY enthusiast selling tools, materials, and unfinished projects to fellow makers.",
    "email": "dmalit@rrc.ca",
    "phone": "343-576-3756",
    "preferredContact": "Email"
    },
    {
    "userName": "Kavya Kiran",
    "bio": "Vintage collector with a passion for home décor and timeless clothing pieces.",
    "email": "kavyak@rrc.ca",
    "phone": "657-342-3485",
    "preferredContact": "Teams/ Phone"
    },
    {
    "userName": "Babou Jobe",
    "bio": "Student artist selling prints, sketchbooks, and art supplies.",
    "email": "bjobe@rrc.ca",
    "phone": "343-455-3756",
    "preferredContact": "Email/ Teams"
    }
]

export const forumSeedData: Omit<Forum, "id">[] = [
  {
    subject: "co-housing",
    title: "Looking for a Roommate",
    date: "2023-11-26",
    description: "I have an extra space for a roommate!",
  },
  {
    subject: "jobs",
    title: "Part-Time Developer",
    date: "2024-01-15",
    description: "Looking for a part-time React developer to join a small team.",
  },
  {
    subject: "events",
    title: "Community Cleanup",
    date: "2024-02-10",
    description: "Join us for a local park cleanup this weekend!",
  },
  {
    subject: "housing",
    title: "Apartment Available",
    date: "2024-03-05",
    description: "1-bedroom apartment available for rent in River Heights.",
  },
  {
    subject: "buy/sell",
    title: "Selling Used Laptop",
    date: "2024-04-12",
    description: "Lightly used MacBook Air for sale, excellent condition.",
  },
  {
    subject: "community",
    title: "Volunteers Needed",
    date: "2024-05-20",
    description: "Looking for volunteers to help with a food drive event.",
  },
  {
    subject: "jobs",
    title: "Freelance Designer Wanted",
    date: "2024-06-14",
    description: "Seeking a graphic designer for a short-term branding project.",
  },
  {
    subject: "housing",
    title: "Sublet Available",
    date: "2024-07-22",
    description: "Fully furnished sublet available from July to September.",
  },
  {
    subject: "events",
    title: "Coding Workshop",
    date: "2024-08-30",
    description: "Free beginner coding workshop hosted at the community center.",
  },
  {
    subject: "buy/sell",
    title: "Furniture Giveaway",
    date: "2024-09-10",
    description: "Giving away a couch and coffee table, must pick up.",
  }
];

export const itemSeedData: Omit<Item, "id">[] = [
  {
    name: "USB Flash Drive 32GB",
    category: "electronics",
    price: 25.0,
    description: "Brand new USB 32GB flash drive, still in packaging. $25 OBO.",
    src: "/placeholder.png",
    sellerName: "Ranindi Gunasekera",
    sellerEmail: "ngunasekera3@rrc.ca"
  },
  {
    name: "Wireless Mouse",
    category: "electronics",
    price: 18.5,
    description: "Lightly used wireless mouse, works perfectly. $18 OBO.",
    src: "/placeholder.png",
    sellerName: "Heuone Castillo",
    sellerEmail: "hcastillo2@rrc.ca"
  },
  {
    name: "Portable Power Bank",
    category: "electronics",
    price: 30.0,
    description: "Portable power bank, barely used, charging cables included. $30 OBO.",
    src: "/placeholder.png",
    sellerName: "Alex Carlos",
    sellerEmail: "arcarlos@rrc.ca"
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 45.0,
    description: "Over-ear headphones, lightly used, great sound. $45 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "School Hoodie",
    category: "clothing",
    price: 35.0,
    description: "Brand new hoodie, never worn. Perfect for chilly days. $35 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Graphic T-Shirt",
    category: "clothing",
    price: 20.0,
    description: "Lightly worn graphic tee, still looks new. $20 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Baseball Cap",
    category: "clothing",
    price: 15.0,
    description: "Classic cap, lightly used, great condition. $15 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Winter Jacket",
    category: "clothing",
    price: 60.0,
    description: "Warm winter jacket, brand new with tags. $60 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Math Textbook",
    category: "books",
    price: 55.0,
    description: "Math 101 textbook, lightly highlighted, like new. $55 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "English Literature Book",
    category: "books",
    price: 40.0,
    description: "Lit textbook, some notes inside but in great shape. $40 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Journal/Planner",
    category: "books",
    price: 15.0,
    description: "Planner barely used, most pages blank. $15 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Sketchbook",
    category: "books",
    price: 12.0,
    description: "Sketchbook, some doodles inside, mostly blank. $12 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Reusable Water Bottle",
    category: "accessories",
    price: 10.0,
    description: "Brand new water bottle, eco-friendly and leak-proof. $10 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Keychain Lanyard",
    category: "accessories",
    price: 5.0,
    description: "Cute lanyard for keys or ID, lightly used. $5 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 45.0,
    description: "Sturdy backpack, lightly used, perfect for school or work. $45 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Phone Case",
    category: "accessories",
    price: 12.5,
    description: "Brand new phone case, never used. $12 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Laptop Sleeve",
    category: "electronics",
    price: 25.0,
    description: "Lightly used laptop sleeve, protects your laptop perfectly. $25 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Smartwatch",
    category: "electronics",
    price: 150.0,
    description: "Smartwatch, barely used, works like new. $150 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "USB-C Cable",
    category: "electronics",
    price: 8.0,
    description: "Extra USB-C cable, brand new in packaging. $8 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Denim Jeans",
    category: "clothing",
    price: 45.0,
    description: "Denim jeans, lightly worn, still look new. $45 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Winter Scarf",
    category: "clothing",
    price: 22.0,
    description: "Cozy scarf, lightly used, perfect for winter. $22 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Gym Shorts",
    category: "clothing",
    price: 28.0,
    description: "Comfortable gym shorts, barely worn. $28 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Fleece Joggers",
    category: "clothing",
    price: 38.0,
    description: "Soft fleece joggers, lightly used. $38 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Science Textbook",
    category: "books",
    price: 65.0,
    description: "Science textbook, lightly highlighted, excellent condition. $65 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Fantasy Novel",
    category: "books",
    price: 18.0,
    description: "Fun fantasy novel, brand new. $18 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Cookbook",
    category: "books",
    price: 25.0,
    description: "Cookbook lightly used, some notes inside. $25 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Digital Stylus",
    category: "accessories",
    price: 50.0,
    description: "Digital stylus for notes or art, barely used. $50 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Laptop Stand",
    category: "accessories",
    price: 35.0,
    description: "Ergonomic laptop stand, lightly used. $35 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Sunglasses",
    category: "accessories",
    price: 20.0,
    description: "Sunglasses, brand new, perfect for sunny days. $20 OBO.",
    src: "/placeholder.png"
  },
  {
    name: "Notebook",
    category: "books",
    price: 8.0,
    description: "Notebook, mostly blank pages, lightly used. $8 OBO.",
    src: "/placeholder.png"
  }
];