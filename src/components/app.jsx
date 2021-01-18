import React, { Component } from 'react';
import NavBar from "./navbar";
import ShoppingCart from "./shopingCart";
import { Route , Switch, Redirect } from "react-router-dom";
import About from './about';
import Home from './home';
import Contact from './contact';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';

class App extends Component {
    state = {
        products : [
            {id: 1, name: "Burger", price : 35, isInCart: false, count: 0},
            {id: 2, name: "Frise", price : 15, isInCart: false, count: 0},
            {id: 3, name: "Cola", price : 5, isInCart: false, count: 0},
            {id: 4, name: "KFC", price : 25, isInCart: false, count: 0},
            {id: 5, name: "Macdonaldes", price : 45, isInCart: false, count: 0},
            {id: 6, name: "Sandwitsh", price : 12, isInCart: false, count: 0}
        ]
    }

    handleDelete = product => {
        // clone
        // edite
        const products = this.state.products.filter( (p) => p.id !== product.id);
        // setState()
        this.setState({products})
    };

    handleReset = () => {
        // clone 
        let products = [...this.state.products];
        // edite 
        products = products.map( p => {
            p.count = 0;
            return p;
        });
        // stetState()
        this.setState({ products });
    };

    handleIncreament = product => {
        // clone 
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        // edite
        products[index].count++;
        // setState()
        this.setState({
            products
        });
        
    };

    handleDecreament = product => {
        // clone 
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        // edite
        if (products[index].count > 0) {
            products[index].count--;
        }
        // setState()
        this.setState({
            products
        });
        
    };

    handleInCartChange = product => {
        console.log("change")
        // clone
        const products = [...this.state.product];
        const index = products.indexOf(product);
        // edite
        index.isInCart = !index.isInCart;
        // setState()
        this.setState({
            products
        })
    }

    render() {
        return ( 
                <React.Fragment>
                    <NavBar productsCout={this.state.products.filter( p => p.count > 0).length}/>
                    <main className="container text-center">
                        <Switch>
                            <Route path="/notfound" component={NotFound} />
                            <Route path="/products/:id/:name?" render={ props => (
                                    <ProductDetails 
                                        products={this.state.products}
                                        {...props}
                                    />
                            ) } />
                            <Route path="/cart" render={ props => (
                                <ShoppingCart 
                                    products={this.state.products}
                                    onDelete={this.handleDelete}
                                    onReset={this.handleReset}
                                    onIncrement={this.handleIncreament}
                                    onDecrement={this.handleDecreament}
                                    {...props}
                                />
                            )}/>
                            <Route path="/menu" render={ props => (
                                <Menu
                                    products={this.state.products}
                                    onClick={this.handleInCartChange}
                                    {...props}/>
                            )}/>

                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/home" component={Home} />
                            <Redirect from="/" to="/home" />
                            <Redirect to="/notfound" />
                        </Switch>
                    </main>
                </React.Fragment>
         );
    }
}
 
export default App;