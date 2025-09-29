import type { Product } from "./models/Product.ts";
import type { User } from "./models/User.ts";
import type { Order } from "./models/Order.ts";
import { ProductService } from "./services/ProductService.js";
import { UserService } from "./services/UserService.js";
import { OrderService } from "./services/OrderService.js";
import { PaymentService } from "./services/PaymentService.js";
import { DiscountService } from "./services/DiscountService.js";
import { AdminDashboard } from "./dashboard/AdminDashboard.js";

async function main() {
  
  const productService = new ProductService();
  const userService = new UserService();
  const orderService = new OrderService();
  const paymentService = new PaymentService();
  const discountService = new DiscountService();
  const adminDashboard = new AdminDashboard();

 
  const admin: User = userService.registerUser({
    name: "Admin",
    email: "admin@example.com",
    role: "admin",
  });
  const customer: User = userService.registerUser({
    name: "Naveen",
    email: "naveen@example.com",
    role: "customer",
  });

  
  const product1: Product = {
    id: 1,
    title: "Laptop",
    price: 50000,
    size: "M",
    category: "electronics",
    stock: 10,
  };
  const product2: Product = {
    id: 2,
    title: "T-Shirt",
    price: 1000,
    size: "L",
    category: "fashion",
    stock: 50,
  };

  productService.addProduct(admin, product1);
  productService.addProduct(admin, product2);

  console.log("Products after addition:", productService.sortProducts("price"));

 
  const order: Order = {
    orderId: 101,
    userId: customer.id,
    products: [product1, product2],
    totalAmount: product1.price + product2.price,
    status: "pending",
  };

  orderService.placeOrder(order);

  
  try {
    const paymentResponse = await paymentService.processPayment({
      method: "Card",
      cardNumber: "1234567890123456",
      expiry: "12/25",
      cvv: 123,
    });
    console.log(paymentResponse);
  } catch (err) {
    console.error("Payment failed:", err);
  }

 
  const discountedPrice = discountService.applyDiscount(product1, 10);
  console.log("Discounted Laptop Price:", discountedPrice);

 
  console.log("Sales per category:", adminDashboard.getTotalSalesPerCategory([order]));
  console.log("Top 3 Products:", adminDashboard.getTop3Products([order]));
}

main();
