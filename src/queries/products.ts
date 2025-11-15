import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types/product";

const getAllProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from("products").select("*").order('price', { ascending: true });
  if (error) throw new Error(error.message);
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
    if (error.code === 'PGRST116') { // Erro quando nenhum registro é encontrado
        return null;
    }
    throw new Error(error.message);
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