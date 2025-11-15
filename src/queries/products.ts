import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types/product";

const getAllProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order('price', { ascending: true });
  
  if (error) {
    console.error("Error fetching products:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
  
  return data || [];
};

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};

const getProductBySlug = async (slug: string): Promise<Product | null> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();
  
  if (error) {
    // Produto não encontrado é um caso esperado, não é erro
    if (error.code === 'PGRST116') {
      console.warn(`Product not found with slug: ${slug}`);
      return null;
    }
    
    // Outros erros devem ser logados com detalhes
    console.error("Error fetching product by slug:", {
      slug,
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
  
  return data;
};

export const useProductBySlug = (slug: string) => {
  return useQuery<Product | null, Error>({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    enabled: !!slug,
  });
};