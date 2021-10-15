import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const ProductItem = (props: any) => {

  const {
    name,
    model,
    price,
    airCondition,
    transmission,
    luggage,
    doors,
    passengers,
    addItemToCart,
    productsPage
  } = props;

  return (
    <Container
      vBox
      style={{
        border: '1px solid black',
        padding: '20px',
        margin: '20px'
      }}
      htmlTag={'li'}
    >
      <p>{`Car name is: ${name}`}</p>
      <p>{`Car model is: ${model}`}</p>
      <p>{`Car price is : ${price}`}</p>
      <p>{airCondition ? 'Car has air condition': "Car has no air condition"} </p>
      <p>{`Car has ${transmission} transmission`}</p>
      <p>{`Car supports ${luggage} of bags`}</p>
      <p>{`Car has ${doors} doors`}</p>
      <p>{`Car accepts ${passengers} passengers`}</p>
      {productsPage && <Button onClick={addItemToCart}>
        Add to cart
      </Button>}
    </Container>
  )
}

export default ProductItem;