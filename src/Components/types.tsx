export type CartItem = {
  carModel: string,
  pickUpAddress: string,
  leaveAddress: string,
  pickUpDate: string,
  leaveDate: string,
  trailer?: boolean,
  gps?: boolean,
  childSeat?: boolean,
  extraDriver?: boolean
}

export type UserInfo = {
  name: string,
  lastName: string,
  age: string,
  phone: string,
  email: string,
  address: string,
  city: string,
  state: string,
  zipCode: number
}

export type Car = {
  name: string,
  model: string,
  price: string,
  airCondition?: boolean,
  transmission?: boolean,
  luggage?: boolean,
  doors?: number | null,
  passengers?: number | null
}