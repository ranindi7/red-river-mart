import type { Forum } from "../types";
import { forumData } from "./forumRepo";

let forums: Forum[] = [...forumData];
let nextId: number = forums.length > 0 ? Math.max(...forums.map(f => f.id)) + 1 : 1;

export function getAllForums(): Forum[] {
    return [...forums];
}

export function getForumById(id: number): Forum | undefined {
    return forums.find(f => f.id === id);
}

export function createForum(newForumData: Omit<Forum, "id" | "date">): Forum {
    const newForum: Forum = {
        id: nextId++,
        date: new Date().toLocaleDateString(),
        ...newForumData
    };
    forums.push(newForum);
    return newForum;
}

export function updateForum(updatedForum: Forum): Forum | undefined {
    const index = forums.findIndex(f => f.id === updatedForum.id);
    if (index !== -1) {
        forums[index] = updatedForum;
        return updatedForum;
    }
    return undefined;
}

export function deleteForum(id: number): boolean {
    const initialLength = forums.length;
    forums = forums.filter(f => f.id !== id);
    return forums.length < initialLength;
}