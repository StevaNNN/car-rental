import { useParams } from "react-router";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const ProductItem = (props: any) => {
  // @ts-ignore
  const params: {} = useParams().productId;

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
      <p>{name}</p>
      <p>{model}</p>
      <p>{price}</p>
      <p>{airCondition && airCondition}</p>
      <p>{transmission && transmission}</p>
      <p>{luggage && luggage}</p>
      <p>{doors && doors}</p>
      <p>{passengers && passengers}</p>
      {productsPage && <Button onClick={addItemToCart}>
        Add to cart
      </Button>}
    </Container>
  )
}

export default ProductItem;