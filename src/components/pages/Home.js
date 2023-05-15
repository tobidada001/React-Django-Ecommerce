import Carrosel from "../top/Carrosel";
import Featured from "../section/Featured";
import Categories from "../section/Categories";
import Vendor from "../section/Vendor";
import { Fragment } from 'react'
import FeaturedProducts from "../section/FeaturedProducts";
import RecentProducts from "../section/RecentProducts";
import Offers from "../section/Offers";
export default function Home(props) {
    return (
        <Fragment>
            
            <Carrosel />
            <Featured />
            <Categories />
            <FeaturedProducts />
            <Offers />
            <RecentProducts />
            <Vendor />

        </Fragment>
    )
}