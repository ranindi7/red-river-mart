import type { User } from "../types";
import { userData } from "./userTestData";

let nextId: number = userData.length > 0 ? Math.max(...userData.map(user => user.id)) + 1 : 1;

// Get all users
export function fetchUsers(): User[] {
    return userData;
}

// Get user by ID
export function getUserById(userId: number): User {
    const foundUser = userData.find(u => u.id === userId);

    if(!foundUser) {
        throw new Error(`Failed to fetch user with ${userId}`);
    }

    return foundUser;
}

// Update user info by ID
export async function updateUser(user: User) {
    const foundUserIndex = userData.findIndex(u => u.id === user.id);

    if(foundUserIndex === -1) {
        throw new Error(`Failed to update user with ${user.id}`);
    }

    userData[foundUserIndex] = user;
    return userData[foundUserIndex];
}

// Add a new user
export function createUser(newUserData: Omit<User, 'id'>): User {
    const newUser: User = {
        id: nextId++,
        ...newUserData
    };
    userData.push(newUser);
    return newUser;
}

// Delete a user by ID 
export async function deleteUser(userId: number) {
    const foundUserIndex = userData.findIndex(u => u.id === userId);

    if (foundUserIndex === -1) {
        throw new Error(`Failed to delete user with ID ${userId}`);
    }

    const deletedUser = userData.splice(foundUserIndex, 1)[0];
    return deletedUser;
}