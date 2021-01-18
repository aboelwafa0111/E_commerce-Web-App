import React from 'react';

const NotFound = () => {
    return ( 
        <React.Fragment>
            <div className="alert alert-danger mt-5" role="alert">
                <h1 className="p-4">404</h1>
                <hr/>
                <h3 className="p-2">Page Not Found</h3>
            </div>
        </React.Fragment>
     );
}
 
export default NotFound;