import prod1 from '../../img/product-1.jpg'
import prod2 from '../../img/product-2.jpg'
import prod3 from '../../img/product-3.jpg'
import prod4 from '../../img/product-4.jpg'
import Product from '../Product';
import {useEffect, useState} from 'react'
import Api from '../../api/Api';


export default function RecentProducts(){
    const [products, setProducts] = useState([])

    useEffect(() => {
      Api('products', setProducts)
    }, []);

    return (
        <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        <div className="row px-xl-5">
        
        { products.map((product) => {
                return <Product key={product.id} url={product.get_absolute_url} name = {product.name} price = {product.price}/>
            })
        }
          

        </div>
    </div>
    )
}