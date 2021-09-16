import {useParams} from "react-router";

const ProductItem = () => {

  // @ts-ignore
  const params: { } = useParams().productId;

  return(
    <div>
      {params}
    </div>
  )
}

export default ProductItem;