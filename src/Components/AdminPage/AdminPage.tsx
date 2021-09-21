import React, { useRef } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { productsState } from "../../store/products-store";
import { sendCarData } from "../../actions/admin-actions";
import ProductItem from "../ProductItem/ProductItem";
import { Car } from "../types";
import { truthyCar } from "../../util";

const AdminPage = () => {
  const dispatch = useDispatch();
  // for later use when creating admin page
  const products = useSelector((state: productsState) => state.products);
  const nameRef = useRef<any>(null);
  const priceRef = useRef<any>(null);
  const modelRef = useRef<any>(null);

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const model = modelRef.current?.value;
    const price = priceRef.current?.value;

    if (name.trim().length > 0 && model.trim().length > 0 && price.trim().length > 0) {
      const newCar = {
        name,
        model,
        price
      }
      dispatch(sendCarData(newCar))
    }
  }

  return (
    <div>
      <form
        onSubmit={formSubmitHandler}
        style={{
          padding: '20px',
          border: '1px solid black',
          margin: '20px'
        }}
      >
        <Input type="text" label={'name'} ref={nameRef} />
        <Input type="text" label={"model"} ref={modelRef} />
        <Input type="number" label={"price"} ref={priceRef} />
        <Button type="submit">
          Submit
        </Button>
      </form>
      <ul>
        {products.map((product: Car, index) => {
          return (
            truthyCar(product) && <ProductItem
              key={index}
              name={product.name}
              model={product.model}
              price={product.price}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default AdminPage;