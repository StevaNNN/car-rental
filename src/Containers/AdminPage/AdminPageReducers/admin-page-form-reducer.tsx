import { Car } from "../../../types";

type Action =
  { type: 'NAME', payload: string } |
  { type: 'MODEL', payload: string } |
  { type: 'PRICE', payload: string } |
  { type: 'IMG', payload: string } |
  { type: 'AIR', payload: boolean } |
  { type: 'TRANS', payload: string } |
  { type: 'LUGGAGE', payload: string } |
  { type: 'DOORS', payload: string } |
  { type: 'PASSENGERS', payload: string } |
  { type: 'TRAILER', payload: boolean } |
  { type: 'GPS', payload: boolean } |
  { type: 'CHILD', payload: boolean } |
  { type: 'ALL', payload: Car } |
  { type: 'RESET', payload: Car }

export function adminFormReducer(state: Car, action: Action): Car {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload }
    case 'MODEL':
      return { ...state, model: action.payload }
    case 'PRICE':
      return { ...state, price: action.payload }
    case 'IMG':
      return { ...state, img: action.payload }
    case 'AIR':
      return { ...state, airCondition: action.payload }
    case 'TRANS':
      return { ...state, transmission: action.payload }
    case 'LUGGAGE':
      return { ...state, luggage: action.payload }
    case 'DOORS':
      return { ...state, doors: action.payload }
    case 'PASSENGERS':
      return { ...state, passengers: action.payload }
    case 'TRAILER':
      return { ...state, trailer: action.payload }
    case 'GPS':
      return { ...state, gps: action.payload }
    case 'CHILD':
      return { ...state, childSeat: action.payload }
    case 'ALL':
      return { ...action.payload }
    case "RESET":
      return { ...action.payload }
  }
}