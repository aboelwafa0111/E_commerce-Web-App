import React, { Component } from 'react';
import Product from './product';

// we can convert this class from 


class ShoppingCart extends Component {

    render() {
        {/* we can destruct this syntax {{this.props.exaply}} ==> {{example}} by destruct its syntax as the line below */}
        {/* after destracting we could replace {{example}} with {{this.props.exaply}} to make it smaller and more readable */}
        const {products,onIncrement,onDecrement,onReset,onDelete} = this.props;
        return (
            <React.Fragment>
                <div className="alert alert-primary mt-5" role="alert"> 
                    <div className="row align-items-center">
                        <div className="col-9 text-left">
                            <h1 className="ml-3">Shopping Cart</h1>
                        </div>
                        <div className="col-3 text-right align">
                            <button 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Reset"
                                className="btn btn-secondary btn-sm pl-4 pr-4 mr-3"
                                onClick={onReset} >
                                    <i className="fa fa-redo-alt"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                       {products.map( product => (
                            <Product 
                                key={product.id} 
                                onIncrement={onIncrement}
                                product={product}
                                onDecrement={onDecrement}
                                onReset={onReset}
                                onDelete={onDelete}/>
                        ))}
                       </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ShoppingCart;