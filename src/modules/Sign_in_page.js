import React from 'react'

export default function Sign_in_page() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="display-1 text-primary text-center">Sign in page</p>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="d-grid my-2">
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
