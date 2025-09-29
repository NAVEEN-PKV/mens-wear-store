
import type { Payment } from "../models/Payment.ts";

export class PaymentService {
  async processPayment(payment: Payment): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payment.method === "Card" && payment.cardNumber) {
          resolve("Payment successful via Card");
        } else if (payment.method === "UPI" && payment.upiId) {
          resolve("Payment successful via UPI");
        } else if (payment.method === "COD") {
          resolve("Payment will be collected on delivery");
        } else {
          reject("Payment failed");
        }
      }, 1000);
    });
  }
}
