import { useState, useEffect } from "react";
function useSearchItems() {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }, [search]);

  return { search, isSearch, handleSearchChange };
}
export default useSearchItems;
