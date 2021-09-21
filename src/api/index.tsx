import axios from "axios";

const instance = axios.create({
  baseURL : 'https://car-rental-330ee-default-rtdb.europe-west1.firebasedatabase.app'
});

export default instance;