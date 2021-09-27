import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../UI/Container/Container";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { cartState } from "../../store/cart-store";
import { Car } from "../types";
import {truthyCar, validateEmailField, validateTextField} from "../../util";
import useField from "../../hooks/use-field";
import { sendItemToCart } from "../../actions/cart-actions";
import { guestState } from "../../store/guest-store";
import Dialog from "../UI/Dialog/Dialog";
import ProductItem from "../ProductItem/ProductItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: cartState) => state.cart);
  const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
  const guestData = useSelector((state: guestState) => state.guest);
  const [selectedCar, setSelectedCar] = useState<Car>({
    name: '',
    model: '',
    price: '',
    img: '',
    airCondition: false,
    transmission: '',
    luggage: '',
    doors: null,
    passengers: null,
    trailer: false,
    gps: false,
    childSeat: false,
    extraDriver: false
  });
  let formIsValid = false;

  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: age,
    hasError: ageHasError,
    isValid: ageIsValid,
    valueBlurHandler: ageBlurHandler,
    valueChangeHandler: ageChangeHandler,
    reset: ageReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: phone,
    hasError: phoneHasError,
    isValid: phoneIsValid,
    valueBlurHandler: phoneBlurHandler,
    valueChangeHandler: phoneChangeHandler,
    reset: phoneReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: address,
    hasError: addressHasError,
    isValid: addressIsValid,
    valueBlurHandler: addressBlurHandler,
    valueChangeHandler: addressChangeHandler,
    reset: addressReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset
  } = useField((value: string) => validateEmailField(value));

  const {
    value: city,
    hasError: cityHasError,
    isValid: cityIsValid,
    valueBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    reset: cityReset
  } = useField((value: any) => validateTextField(value));

  const {
    value: zip,
    hasError: zipHasError,
    isValid: zipIsValid,
    valueBlurHandler: zipBlurHandler,
    valueChangeHandler: zipChangeHandler,
    reset: zipReset
  } = useField((value: any) => validateTextField(value));

  if(
    nameIsValid &&
    lastNameIsValid &&
    ageIsValid &&
    addressIsValid &&
    phoneIsValid &&
    emailIsValid &&
    cityIsValid &&
    zipIsValid) {
    formIsValid = true
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if(!formIsValid) {
      return;
    }

    // combine objects for sending data to redux store
    dispatch(sendItemToCart({
     selectedCar: {...guestData},
     userData: {
       name: name,
       lastName: lastName,
       email: email,
       phone: phone,
       city: city,
       zipCode: zip,
       age: age,
       address: address
     },
      totalCost: guestData.price
    }));

    setIsDialogVisible(true)

    nameReset();
    lastNameReset();
    ageReset();
    phoneReset();
    addressReset()
    emailReset();
    cityReset();
    zipReset();
  }

  useEffect(() => {
    setSelectedCar(guestData)
  }, [guestData])

  return (
    <Container className="cart-page" hBox>
      <Container flex1>
        <ul className="cart-items">
          {truthyCar(selectedCar) && <ProductItem
              name={name}
              model={selectedCar.model}
              price={selectedCar.price}
              img={selectedCar.img}
              airCondition={selectedCar.airCondition}
              transmission={selectedCar.transmission}
              luggage={selectedCar.luggage}
              doors={selectedCar.doors}
              passengers={selectedCar.passengers}
              trailer={selectedCar.trailer}
              gps={selectedCar.gps}
              childSeat={selectedCar.childSeat}
              extraDriver={selectedCar.extraDriver}
          />}
        </ul>
      </Container>
      <Container vBox>
        <Container vBox flex1 style={{ "marginBottom": "20px" }}>
          <h1 className="cr-font-size-lg">{guestData.price}</h1>
          <p>Your order will be sent to the shop via email, you will not have to pay for anything for now </p>
        </Container>
        <form onSubmit={onFormSubmit}>
          <Container hBox className={'form-field'}>
            <Input type="text" label="Name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={name}
                   hasError={nameHasError} />
            <Input type="text" label="Last name" onChange={lastNameChangeHandler} value={lastName}
                   onBlur={lastNameBlurHandler} hasError={lastNameHasError} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="number" label="Age" onChange={ageChangeHandler} onBlur={ageBlurHandler} value={age}
                   hasError={ageHasError} />
            <Input type="text" label="Phone" onChange={phoneChangeHandler} onBlur={phoneBlurHandler} value={phone}
                   hasError={phoneHasError} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="text" label="Address" onChange={addressChangeHandler} onBlur={addressBlurHandler}
                   value={address} hasError={addressHasError} />
            <Input type="text" label="E-mail" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email}
                   hasError={emailHasError} />
          </Container>
          <Container hBox className={'form-field'}>
            <Input type="text" label="City" onChange={cityChangeHandler} onBlur={cityBlurHandler} value={city}
                   hasError={cityHasError} />
            <Input type="number" label="Zip" onChange={zipChangeHandler} onBlur={zipBlurHandler} value={zip}
                   hasError={zipHasError} />
          </Container>
          <textarea placeholder={"Additional text"} />
          <Button>Submit</Button>
        </form>
      </Container>
      <Dialog
        open={isDialogVisible}
        close={() => setIsDialogVisible(false)}
        title={'Order confirmation'}
      >
        <h1>Make sure that these infos are coorect before reservation</h1>
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
        <p>Name is: {name}</p>
        <p>Last name is: {lastName}</p>
        <p>Email is: {email}</p>
        <p>Phone is: {phone}</p>
        <p>Address is: {address}</p>
        <p>City is: {city}</p>
        <p>Age is: {age}</p>
        <p>Zip code is: {zip}</p>
      </Dialog>
    </Container>
  );
}

export default CartPage;