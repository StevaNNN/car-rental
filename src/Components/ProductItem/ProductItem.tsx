import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

type PROPS = {
  id: any,
  name: string,
  model: string,
  price: string,
  img: string,
  airCondition: boolean | undefined,
  transmission?: string,
  luggage: string,
  doors: string,
  passengers: string,
  trailer: boolean | undefined,
  gps?: boolean | undefined,
  childSeat?: boolean | undefined,
  deleteItem?: any,
  addItemToCart?: any,
  editItem?: any,
  adminPage?: boolean,
  productsPage?: boolean
}
const ProductItem = (props: PROPS) => {

  const {
    name,
    model,
    price,
    img,
    airCondition,
    transmission,
    luggage,
    doors,
    passengers,
    trailer,
    gps,
    childSeat,
    productsPage,
    adminPage,
    deleteItem,
    addItemToCart,
    editItem
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
      <p>{name && `Car name is: ${name}`}</p>
      <p>{model && `Car model is: ${model}`}</p>
      <p>{price && `Car price is : ${price}`}</p>
      <p>{airCondition && 'Car has air condition'} </p>
      <p>{img && `Car image is ${img}`}</p>
      <p>{transmission && `Car has ${transmission} transmission`}</p>
      <p>{luggage && `Car supports ${luggage} of bags`}</p>
      <p>{doors && `Car has ${doors} doors`}</p>
      <p>{passengers && `Car accepts ${passengers} passengers`}</p>
      <p>{trailer && 'Car support trailer'}</p>
      <p>{gps && 'Car has GPS'}</p>
      <p>{childSeat && 'Car posses child seat'}</p>
      {productsPage && <Button onClick={addItemToCart}>
        Add to cart
      </Button>}
      {adminPage && <>
        <Button onClick={deleteItem}>Delete item</Button>,
        <Button onClick={editItem}>Edit item</Button>
      </>}
    </Container>
  )
}

export default ProductItem;