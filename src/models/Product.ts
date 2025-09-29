
export interface Product {
  id: number;
  title: string;
  price: number;
  size: "S" | "M" | "L" | "XL";   
  category: "electronics" | "fashion" | "grocery" | "books";
  stock: number;
}
