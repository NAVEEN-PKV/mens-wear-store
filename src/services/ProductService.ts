
import type { Product } from "../models/Product.ts";
import type { User } from "../models/User.ts";


export type ProductUpdateDTO = {
  [K in keyof Product]?: Product[K];
};

export class ProductService {
  private products: Product[] = [];

 
  private isAdmin(user: User): boolean {
    return user.role === "admin";
  }

  addProduct(user: User, product: Product): void {
    if (!this.isAdmin(user)) throw new Error("Only admins can add products");
    this.products.push(product);
  }

  updateProduct(user: User, productId: number, update: ProductUpdateDTO): void {
    if (!this.isAdmin(user)) throw new Error("Only admins can update products");
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...update };
    }
  }

  deleteProduct(user: User, productId: number): void {
    if (!this.isAdmin(user)) throw new Error("Only admins can delete products");
    this.products = this.products.filter(p => p.id !== productId);
  }


  sortProducts<T extends keyof Product>(key: T): Product[] {
    return [...this.products].sort((a, b) =>
      a[key] > b[key] ? 1 : -1
    );
  }

  
  filterProducts<T extends keyof Product>(key: T, value: Product[T]): Product[] {
    return this.products.filter(p => p[key] === value);
  }
}
