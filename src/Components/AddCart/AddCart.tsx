import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export interface Car {
  name: string,
  model: string,
  price: number
}

const AddCart = () => {
  const [carList, setCarList] = useState<Car[]>([]);
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
      await sendCar(newCar);
      await getCars();
    }
  }

  const sendCar = async (car: any) => await axios.post('/carList.json', car);

  const getCars = async () => {
    const response = await axios.get('/carList.json');
    const data = await response.data;
    let dataArray = [];

    for (const key in data) {
      dataArray.push({
        name: data[key].name,
        model: data[key].model,
        price: data[key].price
      })
    }
    // later update redux store
  }

  useEffect(() => {
    getCars();
  }, [])
  return (
    // <SliderAbstract />
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
    </div>
  );
}

export default AddCart;