
import type { Order, OrderLog } from "../models/Order.ts";
import type { Product } from "../models/Product.ts";

export class OrderService {
  private orders: Order[] = [];

  placeOrder(order: Order): void {
    this.orders.push(order);
    console.log(`Order_${order.orderId}_${order.status}` as OrderLog);
  }

  updateStatus(orderId: number, status: Order["status"]): void {
    const order = this.orders.find(o => o.orderId === orderId);
    if (order) {
      order.status = status;
      console.log(`Order_${order.orderId}_${status}` as OrderLog);
    }
  }

 
  applyDiscount<T extends number | string>(amount: T): T extends number ? number : never {
    if (typeof amount === "number") {
      return (amount * 0.9) as any; // 10% off
    }
    throw new Error("Invalid discount type");
  }
}
