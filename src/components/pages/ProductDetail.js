import { Fragment, useContext, useState, useEffect } from 'react'
import Product from '../Product';
import prodimg1 from '../../img/product-1.jpg'
import prodimg2 from '../../img/product-2.jpg'
import prodimg3 from '../../img/product-3.jpg'
import prodimg4 from '../../img/product-4.jpg'
import { useParams } from 'react-router-dom'
import Api, { DetailApi } from '../../api/Api';
import CartContext from '../../CartContext';

export default function ProductDetails() {

    const { addToCart } = useContext(CartContext)

    function submitItem(event) {
        var inputQuantity = document.getElementById('inputQuantity').value;
        var productId = event.target.value;
        
            if (document.getElementById('sizeForm')){
                var size = Object.fromEntries(new FormData(document.getElementById('sizeForm')))   }
           
            if (document.getElementById('colorForm')){
                var color = Object.fromEntries(new FormData(document.getElementById('colorForm')))  }
           
            addToCart(size || 0, color || 0, inputQuantity, productId)
    }

    var param = useParams()
    const [products, setProducts] = useState([])
    const [productDetail, setProductDetail] = useState({})
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        DetailApi(param.lookup, setProductDetail)
    }, [param.lookup, setProductDetail]);

    useEffect(() => {
        Api('products', setProducts)
    }, []);

    return (
        <Fragment>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src={prodimg1} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={prodimg2} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={prodimg3} alt="Image" />
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100 h-100" src={prodimg4} alt="Image" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{productDetail.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">${productDetail.price}</h3>
                            <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                                clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                            <div className="d-flex mb-3">

                                {productDetail.size  && productDetail.size.length > 0 &&
                                    <Fragment>

                                        <strong className="text-dark mr-3">Sizes:</strong>
                                        <form id="sizeForm">

                                            {productDetail.size.map((size) => {
                                                return <div key={size.id} className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input" id={`size-${size.id}`} name="size" value={size.id} />
                                                    <label className="custom-control-label" htmlFor={`size-${size.id}`}>{size.size}</label>
                                                </div>
                                            })}

                                        </form>
                                    </ Fragment >
                                }
                            </div>
                            <div className="d-flex mb-4">

                                {productDetail.color  && productDetail.color.length > 0 &&
                                    <Fragment>
                                        <strong className="text-dark mr-3">Colors:</strong>
                                        <form id="colorForm">

                                            {productDetail.color.map((color) => {

                                                return <div key={color.id} className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input" id={`color-${color.id}`} value={color.id} name="color" />
                                                    <label className="custom-control-label" htmlFor={`color-${color.id}`}>{color.name}</label>
                                                </div>
                                            })}

                                        </form>

                                    </Fragment>
                                }
                            </div>


                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                                    <div className="input-group-btn" onClick={(e) => {

                                        var inputVal = e.target.parentElement.parentElement.children[1]
                                        inputVal && inputVal.value > 1 && setQuantity(Number(inputVal.value) - 1);
                                    }}>

                                        <button className="btn btn-primary btn-minus" >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>

                                    <input type="text" id="inputQuantity" name="quantity" className="form-control bg-secondary border-0 text-center" value={quantity} onChange={setQuantity} min="1" />

                                    <div className="input-group-btn" onClick={(e) => {
                                        var inputVal = e.target.parentElement.parentElement.children[1]
                                        inputVal && setQuantity(Number(inputVal.value) + 1);
                                    }}>
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button onClick={submitItem} value={productDetail.id} className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                            </div>

                            <ShareOnSocial />
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="bg-light p-30">
                            <div className="nav nav-tabs mb-4">
                                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p dangerouslySetInnerHTML={{ __html: productDetail.description }}>
                                    </p>

                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p dangerouslySetInnerHTML={{ __html: productDetail.description }}>
                                    </p>

                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row">

                                        <Reviews />

                                        <ReadAReview />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>

                <div className="row px-xl-5">
                    {products.map((product) => {
                        return <Product key={product.id} url={product.get_absolute_url} name={product.name} price={product.price} />
                    })
                    }

                </div>
            </div>

        </Fragment>
    )
}







export function ReadAReview() {
    return (
        <div className="col-md-6">
            <h4 className="mb-4">Leave a review</h4>
            <small>Your email address will not be published. Required fields are marked *</small>
            <div className="d-flex my-3">
                <p className="mb-0 mr-2">Your Rating * :</p>
                <div className="text-primary">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="message">Your Review *</label>
                    <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-0">
                    <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                </div>
            </form>
        </div>
    )
}



export function Reviews() {
    return (
        <div className="col-md-6">
            <h4 className="mb-4">1 review for "Product Name"</h4>
            <div className="media mb-4">
                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                <div className="media-body">
                    <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                    <div className="text-primary mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                </div>
            </div>
        </div>
    )
}



export function ShareOnSocial() {

    return (
        <div className="d-flex pt-2">
            <strong className="text-dark mr-2">Share on:</strong>
            <div className="d-inline-flex">
                <a className="text-dark px-2" href="">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-dark px-2" href="">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="text-dark px-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest"></i>
                </a>
            </div>
        </div>
    )
}