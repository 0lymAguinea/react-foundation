import { useState, useEffect } from "react";
function useInitialProducts() {
  const [initialItems, setInitialItems] = useState(null);
  const [initialError, setInitialError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Server Error");
        }

        const data = await response.json();
        setInitialItems(data);
      } catch (error) {
        setInitialError(error.message);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchData();
  }, []);

  return { initialItems, initialError, initialLoading };
}
export default useInitialProducts;
