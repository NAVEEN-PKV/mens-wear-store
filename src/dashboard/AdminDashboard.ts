
import type { Product } from "../models/Product.ts";
import type { Order } from "../models/Order.ts";

export class AdminDashboard {
  
  getTotalSalesPerCategory(orders: Order[]): Record<Product["category"], number> {
    const sales: Record<Product["category"], number> = {
      electronics: 0,
      fashion: 0,
      grocery: 0,
      books: 0,
    };

    orders.forEach(order => {
      order.products.forEach(product => {
        sales[product.category] += product.price;
      });
    });

    return sales;
  }

  // ✅ Top 3 best-selling products
  getTop3Products(orders: Order[]): ReadonlyArray<Product> {
    const salesMap = new Map<number, { product: Product; count: number }>();

    orders.forEach(order => {
      order.products.forEach(product => {
        if (!salesMap.has(product.id)) {
          salesMap.set(product.id, { product, count: 1 });
        } else {
          salesMap.get(product.id)!.count++;
        }
      });
    });

    const sorted = Array.from(salesMap.values()).sort((a, b) => b.count - a.count);
    return sorted.slice(0, 3).map(entry => entry.product);
  }
}
