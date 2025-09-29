
import type { Product } from "../models/Product.ts";

export class DiscountService {
  
  applyDiscount(product: Product, discount: number): Product["price"] {
    return product.price - (product.price * discount) / 100;
  }

  
  applyGenericDiscount<T extends { price: number }>(item: T, discount: number): number {
    return item.price - (item.price * discount) / 100;
  }
}
