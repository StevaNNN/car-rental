import React, { useEffect, useRef } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {actions, productsStore } from "../../store/products-store";
import { sendCar } from "../../api";

const AdminPage = () => {
  const dispatch = useDispatch();
  // for later use when creating admin page
  const products = useSelector((state: productsStore) => state.products);
  const nameRef = useRef<any>(null);
  const priceRef = useRef<any>(null);
  const modelRef = useRef<any>(null);

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const model = modelRef.current?.value;
    const price = priceRef.current?.value;

    if (name.trim().length > 0 && model.trim().length > 0 && price.trim().length > 0) {
      const newCar = { name, model, price }
      dispatch(actions.addProduct(newCar))
      // await sendCar(newCar);
      // get newLy cars from redux store
      // await getCars();
    }
  }

  useEffect(() => {
    // on cmp initialization get new
    // getCars();
  }, []);
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
      <div>

      </div>
    </div>
  );
}

export default AdminPage;