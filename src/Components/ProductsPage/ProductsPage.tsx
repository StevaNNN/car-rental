import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { productsStore } from "../../store/products-store";
import { actions } from "../../store/cart-store";
import { truthyCar } from "../../util";

const ProductsPage = () => {
  const dispatach = useDispatch();
  const products = useSelector((state: productsStore) => state.products);

  const onAddItemToCart = (id: any) => {
    dispatach(actions.addItemToCart(products[id]))
  }

  return (
    <ul>
      {products.map((product: Car, index) => {
        return (
          truthyCar(product) && <ProductItem
            key={index}
            name={product.name}
            model={product.model}
            price={product.price}
            addItemToCart={() => onAddItemToCart(index)}
          />
        );
      })}
    </ul>
  )
}

export default ProductsPage;