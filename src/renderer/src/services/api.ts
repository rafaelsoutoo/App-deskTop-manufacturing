
import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5077',
    timeout: 6000,
})



export{api}