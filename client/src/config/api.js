import axios from "axios";

export default axios.create({
  baseURL: 'http://192.168.2.12:5000/api/v1'
});