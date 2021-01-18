import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import Team from './about-componencts/team';
import Company from './about-componencts/company';
import Owner from './about-componencts/owner';
import NotFound from './notFound';

class About extends Component {
    state = {  }
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

                    {/* navigation */}
                    <div className="col-3">
                       <div id="list-example" class="list-group">
                            <NavLink className="list-group-item list-group-item-action" aria-current="true" to="/about/company">About Company</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/about/team">Abot Team</NavLink>
                            <NavLink className="list-group-item list-group-item-action" to="/about/owner">About Owner</NavLink>
                        </div>
                    </div>

                    {/* component */}
                    <div className="col-9">
                        <div 
                            data-bs-spy="scroll" 
                            data-bs-target="#list-example" 
                            data-bs-offset="0" 
                            className="scrollspy-example p-3" 
                            tabindex="0">
                            <Switch>
                                <Route path="/about/notfound" component={NotFound} />
                                <Route path="/about/team" component={Team} />
                                <Route path="/about/company" component={Company} />
                                <Route path="/about/owner" component={Owner} />
                                <Redirect from="/about" to="/about/company" />
                                <Redirect to="/about/notfound" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default About;