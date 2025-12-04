// import { User } from "../../../shared/types/types"
import { Forum } from "../../../shared/types/types";
import { Item } from "../../../shared/types/types";

// export const userSeedData: Omit<User, "id">[] = [
//     {
//     "userName": "Ranindi Gunasekera",
//     "bio": "Hello! I am a student in the AD&D program and I am interested in buying and selling computer parts",
//     "email": "ranindi@rrc.ca",
//     "phone": "657-576-3756",
//     "preferredContact": "Email/ Teams"
//     },
//     {
//     "userName": "Heuone Castillo",
//     "bio": "Tech enthusiast and gamer. Always looking for deals on PC parts and accessories.",
//     "email": "heuone@rrc.ca",
//     "phone": "645-433-6785",
//     "preferredContact": "Teams"
//     },
//     {
//     "userName": "Alex Richard Carlos",
//     "bio": "Jewelry maker and small business owner sharing handmade accessories and gifts.",
//     "email": "alex3@rrc.ca",
//     "phone": "364-563-4875",
//     "preferredContact": "Email"
//     },
//     {
//     "userName": "Jackson Odudu-Abasi",
//     "bio": "Book lover curating a collection of novels and art prints for sale.",
//     "email": "odudu-abasi@rrc.ca",
//     "phone": "233-434-3423",
//     "preferredContact": "Email/ In-app"
//     },
//     {
//     "userName": "Renz Tengco",
//     "bio": "Casual seller focused on sneakers, sportswear, and fitness equipment.",
//     "email": "renzt@rrc.ca",
//     "phone": "345-434-5432",
//     "preferredContact": "Phone"
//     },
//     {
//     "userName": "Carlos Boquia",
//     "bio": "Outdoor enthusiast who frequently sells and trades camping and hiking gear.",
//     "email": "carlosbq@rrc.ca",
//     "phone": "657-343-3756",
//     "preferredContact": "Teams/Phone"
//     },
//     {
//     "userName": "Zizhang He",
//     "bio": "Bookworm clearing out shelves to make space for new reads — all genres welcome!",
//     "email": "zizhang@rrc.ca",
//     "phone": "345-435-4342",
//     "preferredContact": "Email/ Teams/ Phone"
//     },
//     {
//     "userName": "Dwayne Malit",
//     "bio": "DIY enthusiast selling tools, materials, and unfinished projects to fellow makers.",
//     "email": "dmalit@rrc.ca",
//     "phone": "343-576-3756",
//     "preferredContact": "Email"
//     },
//     {
//     "userName": "Kavya Kiran",
//     "bio": "Vintage collector with a passion for home décor and timeless clothing pieces.",
//     "email": "kavyak@rrc.ca",
//     "phone": "657-342-3485",
//     "preferredContact": "Teams/ Phone"
//     },
//     {
//     "userName": "Babou Jobe",
//     "bio": "Student artist selling prints, sketchbooks, and art supplies.",
//     "email": "bjobe@rrc.ca",
//     "phone": "343-455-3756",
//     "preferredContact": "Email/ Teams"
//     }
// ]

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

export const itemSeedData: Omit<Item, "id" | "seller">[] = [
  {
    name: "USB Flash Drive 32GB",
    category: "electronics",
    price: 25,
    description: "Brand new USB 32GB flash drive, still in packaging.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "Wireless Mouse",
    category: "electronics",
    price: 18.5,
    description: "Lightly used wireless mouse, works perfectly.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "Over-Ear Headphones",
    category: "electronics",
    price: 45,
    description: "Comfortable over-ear headphones with great sound.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "School Hoodie",
    category: "clothing",
    price: 35,
    description: "Brand new hoodie, never worn.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "Math Textbook",
    category: "books",
    price: 55,
    description: "Lightly highlighted Math 101 textbook.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "Graphic T-Shirt",
    category: "clothing",
    price: 20,
    description: "Lightly worn graphic tee.",
    src: "/placeholder.png",
    sellerId: "user_361TVpjxhech92apm49nhl9CfVx"
  },
  {
    name: "Journal / Planner",
    category: "books",
    price: 15,
    description: "Planner barely used, most pages blank.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Sketchbook",
    category: "books",
    price: 12,
    description: "Sketchbook with a few doodles inside.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Reusable Water Bottle",
    category: "accessories",
    price: 10,
    description: "Eco-friendly water bottle, leak-proof.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 45,
    description: "Sturdy backpack, great for school or work.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Smartwatch",
    category: "electronics",
    price: 150,
    description: "Barely used smartwatch, excellent condition.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Laptop Sleeve",
    category: "electronics",
    price: 25,
    description: "Protective laptop sleeve, lightly used.",
    src: "/placeholder.png",
    sellerId: "user_364Gt7KRRMMmigAOdy148YBfdz7"
  },
  {
    name: "Winter Scarf",
    category: "clothing",
    price: 22,
    description: "Cozy scarf, lightly worn.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Gym Shorts",
    category: "clothing",
    price: 28,
    description: "Comfortable gym shorts.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Science Textbook",
    category: "books",
    price: 65,
    description: "Lightly highlighted science textbook.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Fantasy Novel",
    category: "books",
    price: 18,
    description: "Brand new fantasy novel.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Laptop Stand",
    category: "accessories",
    price: 35,
    description: "Ergonomic laptop stand, lightly used.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Digital Stylus",
    category: "accessories",
    price: 50,
    description: "Stylus for tablets or laptops.",
    src: "/placeholder.png",
    sellerId: "user_364qct1NmT0FHF3uJWBLym5Im3B"
  },
  {
    name: "Gaming Keyboard",
    category: "electronics",
    price: 80,
    description: "Mechanical keyboard with RGB lighting.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Monitor Stand",
    category: "accessories",
    price: 30,
    description: "Adjustable metal monitor stand.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Beanie Hat",
    category: "clothing",
    price: 18,
    description: "Warm beanie hat, excellent condition.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Notebook Pack",
    category: "books",
    price: 12,
    description: "Pack of 3 notebooks, mostly unused.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Phone Tripod",
    category: "accessories",
    price: 22,
    description: "Compact tripod for phones.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 40,
    description: "Portable Bluetooth speaker, loud and clear.",
    src: "/placeholder.png",
    sellerId: "user_36FILRB62J4VZrUGNLDjDB8iQG7"
  },
  {
    name: "Running Shoes",
    category: "clothing",
    price: 55,
    description: "Lightweight running shoes, gently used.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  },
  {
    name: "Textbook Bundle",
    category: "books",
    price: 90,
    description: "Bundle of 3 textbooks, excellent condition.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  },
  {
    name: "Mini Desk Lamp",
    category: "electronics",
    price: 18,
    description: "USB-powered compact lamp.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  },
  {
    name: "Baseball Cap",
    category: "clothing",
    price: 15,
    description: "Classic cap, lightly used.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  },
  {
    name: "Portable Fan",
    category: "electronics",
    price: 20,
    description: "Rechargeable mini fan.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  },
  {
    name: "Leather Wallet",
    category: "accessories",
    price: 25,
    description: "Minimalist wallet, like new.",
    src: "/placeholder.png",
    sellerId: "user_36FP1eRjTduycEX5SEhFBM4dn05"
  }
];