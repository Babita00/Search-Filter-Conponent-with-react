import PropTypes from 'prop-types';


const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
ProductCategoryRow.propTypes = {
  category:PropTypes.string.isRequired,
}