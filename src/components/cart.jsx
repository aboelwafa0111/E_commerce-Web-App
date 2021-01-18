import React from 'react';
import Product from './product';

const Cart = props => {
    const style = !props.product.isInCart ? {color : "#80808080", cursor: "pointer"} : {cursor: "pointer"} ;
    return ( 
        <React.Fragment>
            <tbody>
                <tr>
                    <td scope="col">{props.product.id}</td>
                    <td scope="col">{props.product.name}</td>
                    <td scope="col">{props.product.price} <span>LE</span></td>
                    <td scope="col" style={style}><i className="fa fa-cart-arrow-down"></i></td>
                </tr>
            </tbody>
        </React.Fragment>
     );
}
 
export default Cart;