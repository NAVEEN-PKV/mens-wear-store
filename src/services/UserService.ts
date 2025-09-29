
import type { User } from "../models/User.ts";

export class UserService {
  private users: User[] = [];

  registerUser(user: Omit<User, "id">): User {
    const newUser: User = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  getUserDetails(id: number): Pick<User, "id" | "name" | "email"> | undefined {
    return this.users.find(user => user.id === id);
  }

  
  getAllUsers(): Readonly<User[]> {
    return this.users;
  }

 
  getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
