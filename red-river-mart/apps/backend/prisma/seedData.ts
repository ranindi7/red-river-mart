import { User } from "../../../shared/types/types"
import { Forum } from "../../../shared/types/types";

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
