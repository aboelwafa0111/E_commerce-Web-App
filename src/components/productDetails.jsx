import React, { Component } from 'react';
import qs from "query-string";

class ProductDetails extends Component {
    
    state = {}

    render() { 
        const product = this.props.products.filter( c => c.id === parseInt(this.props.match.params.id) )[0];
    
        const count = product.count;
        
        const countClasses = (count > 0) ? "text-success" : "text-danger" ;

        const btnSuccessClasses = "btn btn-outline-success pl-5 pr-5 pt-3 pb-3";
        const btnDangerClasses = "btn btn-outline-danger pl-5 pr-5 pt-3 pb-3 disabled";
        const buttonClasses = (count >0) ? btnSuccessClasses : btnDangerClasses;


        const qsObj = qs.parse(this.props.location.search);
        console.log(qsObj);

        const btnNavigate = () => (buttonClasses === "btn btn-outline-success pl-5 pr-5 pt-3 pb-3" ) ? this.props.history.push('/cart') : 0 ;

        return ( 
            <React.Fragment>
                <div className="container m-0 p-0">
                    <div className="row">
                            <div className="col">
                                <div className="card text-white bg-dark mt-5">
                                <div className="card-header">Product ID : #{product.id}</div>
                                <div className="card-body text-left ml-4 mr-4">
                                    <h3 className="card-title">Name : <span className={countClasses}>{product.name}</span></h3>
                                    <h3 className="card-title">Count : <span className={countClasses}>{count}</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-right mt-5">   
                            <button 
                                className={buttonClasses}
                                onClick={btnNavigate}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductDetails;

{/* 
const ProductDetails = props => {
   

    return ( 
        
    );
}
 
export default ProductDetails;
*/}