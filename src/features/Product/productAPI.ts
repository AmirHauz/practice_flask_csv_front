import axios from "axios";
import Product from '../../app/models/Product';
import{MY_SERVER} from '../../env'

export function getProducts() {
  return new Promise<{ data:Product[] }>((resolve) =>
  
    axios.get(MY_SERVER).then(res => resolve({data: res.data})))
}

export function addProduct(prod:Product) {
  return new Promise<{ data: Product }>((resolve) =>
  
    axios.post(MY_SERVER, prod).then(res => resolve({data: res.data})))
}

export async function delProduct(id:number) {
  return await axios.delete(MY_SERVER + "/" + id).then(res => id)
}

export async function updProduct(prod: Product) {
  return await axios.put(MY_SERVER + "/" + prod.pid,prod).then(res => res.data)
}
