// any component class is a class containing two main methods 
// state = {} to save the data 
// render () {} to render the templet

import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Product extends Component {
    /* 
    state = { 
        name : this.props.product.name,
        count : this.props.product.count
    };
    */

    getClasses () {
        let classes;
        if(this.props.product.count === 0 ) {
            classes = "badge bg-danger text-light m-2";
        } else if  (this.props.product.count > 0 && this.props.product.count < 5 ) {
            classes = "badge bg-primary text-light m-2";
            
        } else {
            classes = "badge bg-warning text-dark m-2";
        }
        return classes;
    }

    renderNames() {
        if(this.props.product.names.length === 0) {
            return (
                <div>
                    <h2>List is Empty</h2>
                    <p>add some records to display the list</p>
                </div> 
            )
        } 
        
        return (
            <ul>
                {this.props.product.names.map(name => 
                <li key={name}>{name}</li>
                )}
            </ul>
        );
        
    }

    render() { 
        
        return (
            <div className="card mb-1 text-white bg-dark">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col text-left">
                                <span className="h4">
                                    <Link to={`/products/${this.props.product.id}`}>{this.props.product.name}</Link>
                                </span>
                                <span className={this.getClasses()}>{this.props.product.count}</span>
                            </div>
                            <div className="col text-right">
                                <button
                                    onClick={ () => this.props.onDecrement(this.props.product)} 
                                    className="btn btn-primary btn-sm mr-2">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button
                                    onClick={ () => this.props.onIncrement(this.props.product)} 
                                    className="btn btn-primary btn-sm mr-2">
                                    <i className="fas fa-plus"></i>
                                </button>
                                <button
                                    onClick={ () => this.props.onDelete(this.props.product)}
                                    className="btn btn-danger btn-sm">
                                    <i className="fas fa-trash" ></i>
                                </button>
                                <br/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;