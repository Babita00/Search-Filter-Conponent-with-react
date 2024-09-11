
import PropTypes from 'prop-types';

const SearchBar = ({searchText,inStockOnly,setSearchText,setInStockOnly}) => {
  return (
    <form>
      <input 
      type="text" 
      placeholder="search....." 
      value={searchText} 
      onChange={(e)=>{setSearchText (e.target.value)}}
      />
      <div>
      <input 
      id="checkbox" 
      type="checkbox" 
      value={inStockOnly} 
      onChange={(e)=>{
        setInStockOnly (e.target.checked)
      }}
      />
      <label htmlFor="checkbox">Show only on stock</label>
      </div>
    </form>
  )
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired,
};

export default SearchBar