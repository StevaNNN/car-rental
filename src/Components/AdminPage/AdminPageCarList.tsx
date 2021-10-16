import React from "react";
import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";

type PROPS = {
  products: Car[],
  deleteItem: any,
  editItem: any
}

const AdminPageCarList = (props: PROPS) => {
  const { products, deleteItem, editItem} = props;
  return (
    <ul>
      <h1>Products list:</h1>
      {products.map((product: Car, index: number) => {
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
            adminPage
            deleteItem={() => deleteItem(index)}
            editItem={() => editItem(index)}
          />
        );
      })}
    </ul>
  )
}
export default AdminPageCarList;