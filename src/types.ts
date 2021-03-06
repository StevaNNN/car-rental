export type Car = {
  id?: any,
  name: string,
  model: string,
  price: string,
  img: string,
  airCondition: boolean | undefined,
  transmission: string,
  luggage: string,
  doors: string,
  passengers: string,
  trailer?: boolean,
  gps?: boolean,
  childSeat?: boolean,
}

export type CarAdditional = {
  pickUpAddress?: string,
  leaveAddress?: string,
  pickUpDate?: string,
  leaveDate?: string
  extraDriver?: boolean
}

export type CartItem = {
  selectedCar: Car | any,
  userData: UserInfo,
  totalCost: string | null
}

export type UserInfo = {
  name: string,
  lastName: string,
  age: string,
  phone: string,
  email: string,
  address: string,
  city: string,
  zipCode: number | string
}