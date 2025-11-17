/*
Data repository to handle logic related to user data
*/

import type { User } from "../../../../shared/types/types";

type UsersResponseJSON = { message: string; data: User[] };
type UserResponseJSON = { message: string; data: User }

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const USER_ENDPOINT = "/users";

/* 
Get all users
- Returns entire array of users
*/
export async function fetchUsers(): Promise<User[]> {
    const response: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const json: UsersResponseJSON = await response.json();
    return json.data;
}

/* Get user by ID 
*/
export async function getUserById(userId: number): Promise<User> {
    const response: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}/${userId}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch user with id ${userId}`);
    }

    const json: UserResponseJSON = await response.json();
    return json.data;
}

/* Update user info by ID
*/
export async function updateUser(user: User): Promise<User> {
    const response: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
        "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to update iteuserm with id ${user.id}`);
    }

    const json: UserResponseJSON = await response.json();
    return json.data;
}

/* Add a new user
*/
export async function createUser(user: Omit<User, "id">): Promise<User> {
    const response: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
        "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    const json: UserResponseJSON = await response.json();
    return json.data;
}

/* Delete user by ID
*/
export async function deleteUser(userId: number): Promise<void> {
    const response: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}/${userId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Failed to delete user with id ${userId}`);
    }
}