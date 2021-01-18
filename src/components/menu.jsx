import React, { Component } from 'react';
import Cart from './cart';

class Menu extends Component {
    
    render() { 

        return ( 
            <React.Fragment>
            <div className="row">
                    <div className="col">
                        <div className="alert alert-primary mt-5" role="alert">
                            <h1 className="p-4">About Page</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Prouduct</th>
                                    <th scope="col">Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            {this.props.products.map(
                                product => (
                                <Cart 
                                    product={product} 
                                    onClick={this.props.onClick}
                                    />)
                            )}

                        </table>                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Menu;