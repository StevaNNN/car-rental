import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

type PROPS = {
  addItemToCart?: any
  airCondition: boolean | undefined
  childSeat?: boolean
  deleteItem?: any
  editItem?: any
  doors: string | undefined
  gps?: boolean
  id?: any
  img: string | undefined
  luggage: string | undefined
  model: string | undefined
  name: string | undefined
  onClick?: any
  price: string | undefined
  passengers: string | undefined
  trailer?: boolean
  transmission: string | undefined
  withAddToCartButton?: boolean
  withAddEditCarButton?: boolean
}
const ProductItem = (props: PROPS) => {

  const {
    addItemToCart,
    airCondition,
    childSeat,
    deleteItem,
    editItem,
    doors,
    gps,
    img,
    luggage,
    model,
    name,
    onClick,
    price,
    passengers,
    trailer,
    transmission,
    withAddToCartButton,
    withAddEditCarButton
  } = props;

  return (
    <div onClick={onClick}>
      <Container
        vBox
        style={{
          border: '1px solid black',
          padding: '20px',
          margin: '20px'
        }}
        htmlTag={'li'}
      >
        {img ? <img src={img} alt={`${name} ${model}`} /> : null}
        <p>{name && `Car name is: ${name}`}</p>
        <p>{model && `Car model is: ${model}`}</p>
        <p>{price && `Car price is : ${price}`}</p>
        <p>{airCondition && 'Car has air condition'} </p>
        <p>{transmission && `Car has ${transmission} transmission`}</p>
        <p>{luggage && `Car supports ${luggage} of bags`}</p>
        <p>{doors && `Car has ${doors} doors`}</p>
        <p>{passengers && `Car accepts ${passengers} passengers`}</p>
        <p>{trailer && 'Car support trailer'}</p>
        <p>{gps && 'Car has GPS'}</p>
        <p>{childSeat && 'Car posses child seat'}</p>
        {withAddToCartButton && <Button onClick={addItemToCart}>
          Add to cart
        </Button>}
        {withAddEditCarButton && <>
          <Button onClick={deleteItem}>Delete item</Button>,
          <Button onClick={editItem}>Edit item</Button>
        </>}
      </Container>
    </div>
  )
}

export default ProductItem;
