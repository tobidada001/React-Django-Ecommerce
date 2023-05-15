import productimg3 from '../img/product-3.jpg'
import {Link} from 'react-router-dom'
export default function Product(props){
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={productimg3} alt="" />
                <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                    <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                </div>
            </div>
            <div className="text-center py-4">
                <Link to={props.url} className="h6 text-decoration-none text-truncate" href="">{props.name}</Link>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${props.price}</h5><h6 className="text-muted ml-2"><del>{Number(props.price) * 6}</del></h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star text-primary mr-1"></small>
                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                    <small className="far fa-star text-primary mr-1"></small>
                    <small>(99)</small>
                </div>
            </div>
        </div>
    </div>
    )
}