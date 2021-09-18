import axios from "axios";

const instance = axios.create({
  baseURL : 'https://car-rental-330ee-default-rtdb.europe-west1.firebasedatabase.app'
});

export const sendCar = async (car: any) => await instance.post('/carList.json', car);
export const getCars = async () => {
  const response = await instance.get('/carList.json');
  const data = await response.data;
  let dataArray = [];

  for (const key in data) {
    dataArray.push({
      name: data[key].name,
      model: data[key].model,
      price: data[key].price
    })
  }
  // later update redux store
}

export default instance;