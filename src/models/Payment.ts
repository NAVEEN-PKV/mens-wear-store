
export type Payment =
  | { method: "Card"; cardNumber: string; expiry: string; cvv: number }
  | { method: "UPI"; upiId: string }
  | { method: "COD" };


