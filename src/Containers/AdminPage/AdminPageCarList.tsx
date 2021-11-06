import React from "react";
import { Car } from "../../types";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Container from "../../Components/UI/Container/Container";

type PROPS = {
  products: Car[],
  deleteItem: any,
  editItem: any
}

const AdminPageCarList = (props: PROPS) => {
  const {
    products,
    deleteItem,
    editItem
  } = props;

  return (
    <Container htmlTag='ul' vBox>
      {products.length > 1 && <h1>Products list:</h1>}
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
              withAddEditCarButton
              deleteItem={() => deleteItem(product.id)}
              editItem={() => editItem(product.id)}
            />
          );
        })}
      </Container>
    </Container>
  );
}
export default AdminPageCarList;