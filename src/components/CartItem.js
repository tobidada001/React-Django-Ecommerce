import img from '../img/cat-1.jpg'
import { useState, useEffect, useContext } from 'react'
import CartContext from '../CartContext';
export default function CartItem(props) {

    const [quantity, setQuantity] = useState(props.quantity)
    const { updateCart } = useContext(CartContext)

    function handleIncrement() {
        setQuantity(quantity + 1)
        updateCart(props.pid, quantity + 1, props.product)
    }

    function handleDecrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            updateCart(props.pid, quantity - 1, props.product)
        }
    }


    return (

        <tr>

            <td className="align-middle"><img src={`${props.image}`} alt="" style={{ width: '50px', height: '50px' }} />{props.name} 
            <p><span>{props.color &&  <strong>Color: {props.color} </strong> }
             {props.size &&  <strong>Size: {props.size} </strong> } </span></p>
            </td>
            <td className="align-middle">$ {props.price}</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                    <div className="input-group-btn" onClick={handleDecrement}>
                        <button className="btn btn-sm btn-primary btn-minus" >
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" onChange={setQuantity} value={quantity} />
                    <div className="input-group-btn" onClick={handleIncrement}>
                        <button className="btn btn-sm btn-primary btn-plus">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$ {(props.price) * quantity}</td>
            <td className="align-middle"><button onClick={props.onItemDeleteClicked} data-pid={props.pid} className="btn btn-sm btn-danger"><i className="fa fa-times" onClick={props.onItemDeleteClicked} data-pid={props.pid}></i></button></td>
        </tr>
    )
}