/*
Data repository to handle logic related to user data
*/

import type { User } from "../types";
import { userData } from "./userMockRepo";

// Determines what the next user ID would be to ensure new created users get their own unique ID
let nextId: number = userData.length > 0 ? Math.max(...userData.map(user => user.id)) + 1 : 1;

/* 
Get all users
- Returns entire array of users
*/
export function fetchUsers(): User[] {
    return userData;
}

/* Get user by ID 
- find() searches for user with matching id and returns user object if exists 
*/
export function getUserById(userId: number): User {
    const foundUser = userData.find(u => u.id === userId);

    if(!foundUser) {
        throw new Error(`Failed to fetch user with ${userId}`);
    }

    return foundUser;
}

/* Update user info by ID
- findIndex() searches for array index of user with specified ID
- Replaces old user with that index with the new user object that is passed in 
- Returns updated user
*/
export async function updateUser(user: User) {
    const foundUserIndex = userData.findIndex(u => u.id === user.id);

    if(foundUserIndex === -1) {
        throw new Error(`Failed to update user with ${user.id}`);
    }

    userData[foundUserIndex] = user;
    return userData[foundUserIndex];
}

/* Add a new user
- Omit<User, 'id'> passes all fields of new user except id 
- new user object created with new id from nextId and the rest of the data that was passed (...newUserData)
- pushes new user into the userData array and returns it
*/
export function createUser(newUserData: Omit<User, 'id'>): User {
    const newUser: User = {
        id: nextId++,
        ...newUserData
    };
    userData.push(newUser);
    return newUser;
}

/* Delete user by ID
- Finds index of user with specified ID
- Splice removes from the array - specified to remove that specific one with 1
- [0] gives deleted user data which is returned by function
*/
export async function deleteUser(userId: number) {
    const foundUserIndex = userData.findIndex(u => u.id === userId);

    if (foundUserIndex === -1) {
        throw new Error(`Failed to delete user with ID ${userId}`);
    }

    const deletedUser = userData.splice(foundUserIndex, 1)[0];
    return deletedUser;
}