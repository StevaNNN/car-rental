import { useState } from "react";
import { CartItem } from "../types";
import classes from './CartPage.module.scss';
import Container from "../UI/Container/Container";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const CartPage = () => {
  const [items, setItems] = useState<CartItem[]>([{
    carModel: 'Peugeot 208',
    pickUpAddress: 'Dositeja Obradovica 10',
    leaveAddress: 'Josifa Pancica 10',
    pickUpDate: '12-12-2021',
    leaveDate: '21-12-2021'
  }]);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
  }

  return(
    <Container className="cart-page" hBox>
      <Container flex1>
        <ul className="cart-items">
          {items.map((item, id) => {
            return(
              <li
                style={{
                  border: '1px solid black',
                  padding: '20px',
                  margin: '20px'
                }}
                key={id}
              >
                <p>{item.carModel}</p>
                <p>{item.pickUpAddress}</p>
                <p>{item.leaveAddress}</p>
                <p>{item.pickUpDate}</p>
                <p>{item.leaveDate}</p>
              </li>
            );
          })}
        </ul>
      </Container>
      <Container vBox alignItemsEnd >
        <h1>Total price: 200e</h1>
        <p>Your order will be sent to the shop via email, <br/>you will not have to pay for anything for now </p>
        <form onSubmit={onFormSubmit}>
          <Input type="text" label="Name" />
          <Input type="text" label="Last name" />
          <Input type="number" label="Age" />
          <Input type="text" label="Phone" />
          <Input type="text" label="Address" />
          <Input type="text" label="E-mail" />
          <Input type="text" label="City" />
          <Input type="text" label="State" />
          <Input type="number" label="Zip" />
          <textarea placeholder={"Additional text"} />
          <Button>Submit</Button>
        </form>
      </Container>
    </Container>
  );
}

export default CartPage;