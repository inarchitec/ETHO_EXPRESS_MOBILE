import axios from "axios";
import {REACT_APP_API_URL} from '@env';
import {REACT_APP_API_TOKEN} from '@env';



export const makeReq = axios.create({
 
  baseURL:REACT_APP_API_URL,
  mode: "cors",
  headers: {
    Authorization: "bearer " + REACT_APP_API_TOKEN,
  },
});
