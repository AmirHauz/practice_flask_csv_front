import { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getProductsAsync,selectProducts, addProductAsync,delProductAsync,updProductAsync,selectUpdate } from './productSlice';

const Product = () => {
  const products = useAppSelector(selectProducts);
  const productUpdate= useAppSelector(selectUpdate)
  const dispatch = useAppDispatch();
  const [pid, setpid] = useState(0)
  const [pname, setpname] = useState("")
  const [pdescription, setpdescription] = useState("")
  const [pprice, setpprice] = useState(0)
  const [pamount, setpamount] = useState(0)

  useEffect(() => {
    console.table(products)
  }, [products])



  useEffect(() => {
    dispatch(getProductsAsync())
  }, [productUpdate])

  return (
    <div><h1>Product</h1>
      product id:<input onChange={(e) => setpid(+e.target.value)}/>
      product name:<input onChange={(e) => setpname(e.target.value)}/><br/>
      description:<input onChange={(e) => setpdescription(e.target.value)}/>
      price:<input onChange={(e) => setpprice(+e.target.value)}/><br/>
      amount:<input onChange={(e) => setpamount(+e.target.value)}/>
      <button onClick={() => dispatch(addProductAsync({pid,pname,pdescription,pprice,pamount}))}>add product</button>      
      <br/><hr/>
      



amount of products types: {products.length}
      <hr/>
      {products.map((prod, i) =>
        <div key={i}>
          product id: {prod.pid}<br />
          product name:{prod.pname}<br />
          description:{prod.pdescription}<br />
          price:{prod.pprice}<br />
          amount in stock:{prod.pamount}<br />
         
          <button onClick={() => dispatch(updProductAsync({pid,pname,pdescription,pprice,pamount}))}>update</button>
          <button onClick={() => dispatch(delProductAsync(prod.pid))}>delete</button>
          <hr />
        </div>)}
    </div>
  )
}

export default Product


