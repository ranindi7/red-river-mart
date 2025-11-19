import * as UserRepo from "../apis/userRepo";
import { User } from "@shared/types/types";

export async function fetchUsers(): Promise<User[]> {
    return UserRepo.fetchUsers();
}

export async function getUserById(userId: number): Promise<User> {
    return UserRepo.getUserById(userId);
}

export async function updateUser(user: User): Promise<User> {
    return UserRepo.updateUser(user);
}

export async function createUser(user: Omit<User, "id">): Promise<User> {
    return UserRepo.createUser(user);
}

export async function deleteUser(userId: number): Promise<void> {
    return UserRepo.deleteUser(userId)
}

