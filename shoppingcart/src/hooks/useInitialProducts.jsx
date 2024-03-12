async function useInitialProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}
export default useInitialProducts;
