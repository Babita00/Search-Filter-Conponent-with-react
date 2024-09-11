import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar 
        searchText={searchText} 
        inStockOnly={inStockOnly} 
        setSearchText={setSearchText} 
        setInStockOnly={setInStockOnly} 
      />
      <ProductTable 
        searchText={searchText} 
        inStockOnly={inStockOnly} 
        products={products} 
      />
    </>
  );
}

export default FilterableProductTable;
