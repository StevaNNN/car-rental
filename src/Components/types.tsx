export type Car = {
  name: string | null,
  model: string | null,
  price: string | null,
  img?: string | null,
  airCondition?: boolean,
  transmission?: any,
  luggage?: any,
  doors?: number | null,
  passengers?: number | null,
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
  totalCost: string
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