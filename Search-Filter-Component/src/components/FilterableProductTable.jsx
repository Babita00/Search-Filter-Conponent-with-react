import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import { useState } from "react"
import PropTypes from 'prop-types';


const FilterableProductTable = ({ products } ) => {
  const [searchText,setSearchText]=useState(" ")
  const[inStockOnly,setInStockOnly]=useState(false)
  return (
    <>
    <SearchBar searchText={searchText} inStockOnly={inStockOnly} setSearchText={setSearchText} setInStockOnly={setInStockOnly}/>
    <ProductTable searchText={searchText} inStockOnly={inStockOnly}  products={products}/>
    </>
  )
}

FilterableProductTable.propTypes = {
  products: PropTypes.string.isRequired,
  
};
export default FilterableProductTable