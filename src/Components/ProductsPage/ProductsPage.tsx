import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { productsState } from "../../store/products-store";
import { truthyCar } from "../../util";
import { useCookies } from "react-cookie";

const ProductsPage = () => {
  const products = useSelector((state: productsState) => state.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(["guest-cookie"]);

  const handleCookie = (value: string) => setCookie("guest-cookie", `${value}`, { path: "/" });

  const onAddItemToCart = (id: number) => {
    handleCookie(JSON.stringify(products[id]))
  }

  return (
    <ul>
      {products.length < 1 && 'NO DATA FOUND'}
      {products.map((product: Car, index) => {
        return (
          truthyCar(product) && <ProductItem
            key={index}
            name={product.name}
            model={product.model}
            productsPage
            price={product.price}
            addItemToCart={() => onAddItemToCart(index)}
          />
        );
      })}
    </ul>
  )
}

export default ProductsPage;