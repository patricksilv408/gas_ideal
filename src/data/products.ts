export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  image: string;
  availability: "in stock" | "out of stock";
  brand: string;
  category: string;
  weight?: string;
}

export const products: Product[] = [
  {
    id: "GAS-P13",
    slug: "gas-p13",
    title: "Botijão Gás P13 Ultragaz",
    description: "Botijão de gás P13 (13kg) da marca Ultragaz. Ideal para uso doméstico, com alta durabilidade e segurança. Entrega rápida em até 30 minutos em Camaçari.",
    price: 110.0,
    image: "/products/gas-p13.webp",
    availability: "in stock",
    brand: "Ultragaz",
    category: "Gás de Cozinha",
    weight: "13kg"
  },
  {
    id: "GAS-P20",
    slug: "gas-p20",
    title: "Botijão Gás P20 Ultragaz",
    description: "Botijão de gás P20 (20kg) da marca Ultragaz. Perfeito para famílias maiores ou estabelecimentos comerciais. Produto original com certificação de qualidade.",
    price: 165.0,
    image: "/products/gas-p20.webp",
    availability: "in stock",
    brand: "Ultragaz",
    category: "Gás de Cozinha",
    weight: "20kg"
  },
  {
    id: "GAS-P45",
    slug: "gas-p45",
    title: "Botijão Gás P45 Ultragaz",
    description: "Botijão de gás P45 (45kg) da marca Ultragaz. Ideal para uso industrial, restaurantes e grandes estabelecimentos. Máxima capacidade e eficiência.",
    price: 350.0,
    image: "/products/gas-p45.webp",
    availability: "in stock",
    brand: "Ultragaz",
    category: "Gás de Cozinha",
    weight: "45kg"
  },
  {
    id: "VASILHAME-P13",
    slug: "vasilhame-p13",
    title: "Vasilhame P13 Ultragaz (Vazio)",
    description: "Vasilhame vazio P13 da marca Ultragaz. Botijão sem gás, ideal para troca ou primeira compra. Produto certificado e seguro.",
    price: 180.0,
    image: "/products/vasilhame-p13.webp",
    availability: "in stock",
    brand: "Ultragaz",
    category: "Vasilhame",
    weight: "13kg (vazio)"
  }
];