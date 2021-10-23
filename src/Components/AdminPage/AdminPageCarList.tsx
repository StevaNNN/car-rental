import React from "react";
import { Car } from "../types";
import ProductItem from "../ProductItem/ProductItem";
import Container from "../UI/Container/Container";

type PROPS = {
  products: Car[],
  deleteItem: any,
  editItem: any
}

const AdminPageCarList = (props: PROPS) => {
  const { products, deleteItem, editItem} = props;
  return (
    <Container htmlTag='ul' vBox>
      <h1>Products list:</h1>
      <Container hBox>
        {products.map((product: Car, index: number) => {
          return (
            <ProductItem
              key={index}
              id={product.id}
              name={product.name}
              model={product.model}
              price={product.price}
              img={product && product.img}
              airCondition={product.airCondition}
              transmission={product.transmission}
              luggage={product.luggage}
              doors={product.doors}
              passengers={product.passengers}
              trailer={product.trailer}
              gps={product.gps}
              childSeat={product.childSeat}
              adminPage
              deleteItem={() => deleteItem(product.id)}
              editItem={() => editItem(product.id)}
            />
          );
        })}
      </Container>
    </Container>
  )
}
export default AdminPageCarList;