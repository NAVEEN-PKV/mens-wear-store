export interface Order {
    orderId: number;
    userId: number;
    products: import("./Product.js").Product[];
    totalAmount: number;
    status: "pending" | "shipped" | "delivered" | "cancelled";
}

export type OrderLog = `Order_${number}_${"created" | "updated" | "cancelled"}`;