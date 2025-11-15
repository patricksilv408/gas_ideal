export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  price: number | null;
  image: string | null;
  availability: string | null;
  brand: string | null;
  category: string | null;
  weight: string | null;
  link: string | null;
  created_at: string | null;
}