export type ICar = {
  name: string,
  model: string,
  price: string,
  img?: string,
  airCondition: boolean | any,
  transmission: string,
  luggage: string,
  doors: string,
  passengers: string,
  trailer: boolean | any,
  gps: boolean | any,
  childSeat: boolean | any
}

export type Car = {
  name: string | null,
  model: string | null,
  price: string | null,
  img?: string | null,
  airCondition?: boolean,
  transmission?: string,
  luggage?: string,
  doors?: string | null | any,
  passengers?: string | null,
  pickUpAddress?: string,
  leaveAddress?: string,
  pickUpDate?: string,
  leaveDate?: string,
  trailer?: boolean,
  gps?: boolean,
  childSeat?: boolean,
  extraDriver?: boolean
}

export type CartItem = {
  selectedCar: Car,
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