import Product from "../Product";
import Api from "../../api/Api";
import {useState, useEffect} from 'react'

export default function FeaturedProducts() {
    const [featuredProducts, setFeaturedProducts] = useState([])

    useEffect(() => {
      Api('products', setFeaturedProducts)
    }, []);

    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
            <div className="row px-xl-5">

             { featuredProducts.map((product) => {
                return <Product key = {product.id} url={product.get_absolute_url} name = {product.name} price = {product.price}/>
            })
        }
          
            </div>
        </div>
    )
}