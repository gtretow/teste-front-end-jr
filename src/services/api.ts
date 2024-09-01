export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};
