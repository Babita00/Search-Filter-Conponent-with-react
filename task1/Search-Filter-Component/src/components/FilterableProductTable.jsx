import PropTypes from 'prop-types';
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

// Add prop types validation
FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired
  })).isRequired
};

export default FilterableProductTable;
