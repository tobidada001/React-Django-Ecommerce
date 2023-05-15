import Product from "../Product";
import ShopProduct from "../ShopProduct";
import { useState, useEffect } from 'react'
import Api from "../../api/Api";
export default function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        Api('products', setProducts)
    }, []);

    return (

        <div className="container-fluid">
            <div className="row px-xl-5">

                <div className="col-lg-3 col-md-4">

                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                                <label className="custom-control-label" htmlFor="price-all">All Price</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-1" />
                                <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-2" />
                                <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-3" />
                                <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-4" />
                                <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="price-5" />
                                <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>



                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                                <label className="custom-control-label" htmlFor="price-all">All Color</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-1" />
                                <label className="custom-control-label" htmlFor="color-1">Black</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-2" />
                                <label className="custom-control-label" htmlFor="color-2">White</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-3" />
                                <label className="custom-control-label" htmlFor="color-3">Red</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-4" />
                                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="color-5" />
                                <label className="custom-control-label" htmlFor="color-5">Green</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>



                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                                <label className="custom-control-label" htmlFor="size-all">All Size</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-3" />
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-4" />
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>

                </div>


                <div className="col-lg-9 col-md-8">
                    <div className="row pb-3">
                        <div className="col-12 pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div>
                                    <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                    <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                                </div>
                                <div className="ml-2">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Latest</a>
                                            <a className="dropdown-item" href="#">Popularity</a>
                                            <a className="dropdown-item" href="#">Best Rating</a>
                                        </div>
                                    </div>
                                    <div className="btn-group ml-2">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">10</a>
                                            <a className="dropdown-item" href="#">20</a>
                                            <a className="dropdown-item" href="#">30</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {products.map((product) => {
                            return <ShopProduct key={product.id} url={product.get_absolute_url} name={product.name} price={product.price} />
                        })
                        }


                        <div className="col-12">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}