import cat1 from '../../img/cat-1.jpg'
import cat2 from '../../img/cat-2.jpg'
import { useEffect, useState } from 'react'
import Api from '../../api/Api';
export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        Api('categories', setCategories)
    }, []);

    return (
        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
            <div className="row px-xl-5 pb-3">

                {categories.map((category, index) => {
                    return(
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                                    <img className="img-fluid" src={cat1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>{category.category_name}</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                )
                })}



            </div>
        </div>
    )
}