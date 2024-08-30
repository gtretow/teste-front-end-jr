import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "URL_DO_JSON"; 

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw new Error("Erro ao buscar produtos");
  }
};
