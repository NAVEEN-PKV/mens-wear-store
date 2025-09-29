import { ValidationError } from "../models/Errors.js";

export function validateEmail(email: string): void {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    throw new ValidationError("Invalid email format");
  }
}

export function validatePrice(price: number): void {
  if (price <= 0) {
    throw new ValidationError("Price must be greater than 0");
  }
}

export function validateStock(stock: number): void {
  if (stock < 0) {
    throw new ValidationError("Stock cannot be negative");
  }
}
