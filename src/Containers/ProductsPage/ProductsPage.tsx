import { Car } from "../../types";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { productsState } from "./ProductsPageSlice/products-slice";
import Container from "../../Components/UI/Container/Container";
import { useHistory, useLocation } from "react-router";
import { selectedCar } from "../ProductPage/ProductPageActions/product-actions";
import { useEffect } from "react";

const ProductsPage = (props: any) => {
  const products = useSelector((state: productsState) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let test: any = '';

  const handleCarSelect = async (id: any) => {
    dispatch(selectedCar(products[id].id));
    test = setTimeout(() => {
      history.push(location.pathname + `/${id}`);
    }, 350);
  };


  useEffect(() => {
    console.log(test)
    return () => {
      clearTimeout(test);
    }
  }, [test])

  return (
    <Container htmlTag={'ul'} displayFlex wrap>
      {products.length < 1 && 'NO DATA FOUND'}
      {!!products[0]?.id && products.map((product: Car, index) => {
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
            id={product.id}
          />
        );
      })}
    </Container>
  );
}

export default ProductsPage;