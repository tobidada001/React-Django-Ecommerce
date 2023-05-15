import {Link} from 'react-router-dom'

export default function BreadCrumb(props){
    return (

        <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
               
                    <Link className="breadcrumb-item text-dark" to='/'>Home</Link>

                    {props.label1 && props.label2 ? <a className="breadcrumb-item text-dark" href="#">{props.label1}</a> : <span className="breadcrumb-item active">{props.label1 }</span>}
                    
                    {props.label2 && <span className="breadcrumb-item active">{props.label2}</span>}
                    
                </nav>
            </div>
        </div>
    </div>
    )
}