import { Forum } from "../../../shared/types/types";

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