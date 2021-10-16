import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import { productsState } from "../../store/products-store";
import { useCookies } from "react-cookie";
import { GUEST_COOKIE_NAME } from "../../util";
import Container from "../UI/Container/Container";

const ProductsPage = () => {
  const products = useSelector((state: productsState) => state.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies([GUEST_COOKIE_NAME]);

  const handleCookie = (value: string) => setCookie(`${GUEST_COOKIE_NAME}`, `${value}`, { path: "/" });

  const onAddItemToCart = (id: number) => {
    handleCookie(JSON.stringify(products[id]))
  }

  return (
    <Container htmlTag={'ul'} displayFlex wrap>
      {products.length < 1 && 'NO DATA FOUND'}
      {products.map((product: Car, index) => {
        return (
          <ProductItem
            key={index}
            name={product.name}
            model={product.model}
            price={product.price}
            img={product.img}
            airCondition={product.airCondition}
            transmission={product.transmission}
            luggage={product.luggage}
            doors={product.doors}
            passengers={product.passengers}
            trailer={product.trailer}
            gps={product.gps}
            childSeat={product.childSeat}
            productsPage
            addItemToCart={() => onAddItemToCart(index)}
          />
        );
      })}
    </Container>
  )
}

export default ProductsPage;