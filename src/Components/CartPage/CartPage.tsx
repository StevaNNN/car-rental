import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../UI/Container/Container";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { cartState, actions } from "../../store/cart-store";
import { Car } from "../types";
import { truthyCar } from "../../util";

const CartPage = () => {
  const dispatch = useDispatch();
  // DATA
  const cartData = useSelector((state: cartState) => state.cart);
  const { selectedCar: cartSelectedCar, userData } = cartData;
  const [selectedCar, setSelectedCar] = useState<Car>({
    name: '',
    model: '',
    price: ''
  });
  // Handlers
  const nameHandler = (e: any) => dispatch(actions.addUserName(e.target.value));
  const lastNameHandler = (e: any) => dispatch(actions.addUserLastName(e.target.value));
  const ageHandler = (e: any) => dispatch(actions.addUserAge(e.target.value));
  const phoneHandler = (e: any) => dispatch(actions.addUserPhone(e.target.value));
  const emailHandler = (e: any) => dispatch(actions.addUserEmail(e.target.value));
  const addressHandler = (e: any) => dispatch(actions.addUserAddress(e.target.value));
  const cityHandler = (e: any) => dispatch(actions.addUserCity(e.target.value));
  const zipHandler = (e: any) => dispatch(actions.addUserZipCode(e.target.value));

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    dispatch(actions.onFormSubmit(cartData))
  }

  useEffect(() => {
    setSelectedCar(prevState => {
      return cartSelectedCar
    })
  }, [cartSelectedCar]);

  return (
    <Container className="cart-page" hBox>
      <Container flex1>
        <ul className="cart-items">
          {truthyCar(selectedCar) && <li
            style={{
              border: '1px solid black',
              padding: '20px',
              margin: '20px'
            }}
          >
            <p>{selectedCar.name}</p>
            <p>{selectedCar.model}</p>
            <p>{selectedCar.price}</p>
          </li>}
        </ul>
      </Container>
      <Container vBox>
        <Container vBox flex1 style={{
          "marginBottom": "20px"
        }}>
          <h1 className="cr-font-size-lg">Total price: 200e</h1>
          <p>Your order will be sent to the shop via email, you will not have to pay for anything for now </p>
        </Container>
        <form onSubmit={onFormSubmit}>
          <Container hBox className={'form-field'}>
            <Input type="text" label="Name" onChange={nameHandler} value={userData.name} />
            <Input type="text" label="Last name" onChange={lastNameHandler} value={userData.lastName} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="number" label="Age" onChange={ageHandler} value={userData.age} />
            <Input type="text" label="Phone" onChange={phoneHandler} value={userData.phone} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="text" label="Address" onChange={addressHandler} value={userData.address} />
            <Input type="text" label="E-mail" onChange={emailHandler} value={userData.email} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="text" label="City" onChange={cityHandler} value={userData.city} />
            <Input type="number" label="Zip" onChange={zipHandler} value={userData.zipCode} />
          </Container>
          <textarea placeholder={"Additional text"} />
          <Button>Submit</Button>
        </form>
      </Container>
    </Container>
  );
}

export default CartPage;