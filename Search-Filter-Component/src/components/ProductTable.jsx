import ProductRow from "./ProductRow"
import ProductCategoryRow from "./ProductCategoryRow"
const ProductTable = ({products,searchText,inStockOnly}) => {

  const rows=[];

  let lastCategory=null;

products.forEach((product) => {

  if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
    return;
  }
  if(inStock && !product.stocked){
    return;
  }

  if(product.category!==lastCategory){
    rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
  }
  rows.push(<ProductRow product={product} key={product.name}/>);
  lastCategory=product.category;
});

  return (
   <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <ttable>
    <ProductCategoryRow categoty={"Fruits"}/>
    <ProductRow/>
    
    </ttable>
   </table>
  )
}

export default ProductTable