import { useState, useContext ,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../CartContext';
import Api from '../../api/Api';

export default function NavBar() {

    const {items}  = useContext(CartContext);
    const totalproducts = items.reduce((total, item) => total + item.quantity, 0)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        Api('categories', setCategories)
    }, []);

    return (

        <div className="container-fluid bg-dark mb-30">
            <div className="row px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
                        <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', 'zIndex': 999 }}>
                        <div className="navbar-nav w-100">
                            <div className="nav-item dropdown dropright">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                    <a href="" className="dropdown-item">Men's Dresses</a>
                                    <a href="" className="dropdown-item">Women's Dresses</a>
                                    <a href="" className="dropdown-item">Baby's Dresses</a>
                                </div>
                            </div>

                    { categories &&  categories.map(category => {
                                    return <a key={category.id} href="" className="nav-item nav-link">{category.category_name}</a>
                                }) }
                          
                        </div>
                    </nav>
                </div>

                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                        <Link to='/' className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <NavLink to='/' className="nav-item nav-link ">Home</NavLink>
                                <NavLink to='/shop' className="nav-item nav-link">Shop</NavLink>

                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></a>
                                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                        <NavLink to='/cart' className="dropdown-item">Shopping Cart</NavLink>
                                        <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                                    </div>
                                </div>
                                <NavLink to='/contact-us' className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                <a className="btn px-0">
                                    <i className="fas fa-heart text-primary"></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>10</span>
                                </a>
                                <Link to='/cart' className="btn px-0 ml-3">
                                    <i className="fas fa-shopping-cart text-primary"></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>{ totalproducts }</span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}