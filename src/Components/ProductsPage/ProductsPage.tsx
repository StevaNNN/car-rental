import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import { productsState } from "../../store/products-store";
import { useCookies } from "react-cookie";
import { GUEST_COOKIE_NAME } from "../../util";
import Container from "../UI/Container/Container";
import {useHistory, useLocation} from "react-router";
import {useState} from "react";
import {selectedCar} from "../../actions/product-item-actions";
import {productItemState} from "../../store/product-item-store";

const ProductsPage = (props: any) => {
  const products = useSelector((state: productsState) => state.products);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const state = useSelector((state: productItemState) => state.productItem);
  const [cookies, setCookie] = useCookies([GUEST_COOKIE_NAME]);
  const [selectedCar, setSelectedCar] = useState<any>();

  const handleCookie = (value: string) => setCookie(`${GUEST_COOKIE_NAME}`, `${value}`, { path: "/" });
  const onAddItemToCart = (id: number) => handleCookie(JSON.stringify(products[id]));

  const handleCarSelect = (id: any) => {
    setSelectedCar(products[id]);
    dispatch(selectedCar(id))
  };

  // console.log(state)

  return (
    <Container htmlTag={'ul'} displayFlex wrap>
      {products.length < 1 && 'NO DATA FOUND'}
      {products.map((product: Car, index) => {
        return (
          <ProductItem
            onClick={() => handleCarSelect(index)}
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
            id={product.id}
          />
        );
      })}
    </Container>
  )
}

export default ProductsPage;