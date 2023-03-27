
import ProductsCard from "./ProductsCard";
import './ProductsCard';
const ProductsList = ({data}) => {

  return (<>
       <div className="Product___list-style">

       {
        data?.map((value, index)=>(
       <ProductsCard item={value} key={index} />
        ))
       }
      </div>
</>
  )
}
export default ProductsList;