import axios from "axios";

const instance = axios.create({
	baseURL: "https://food-box-16242.firebaseio.com"
});

export default instance;