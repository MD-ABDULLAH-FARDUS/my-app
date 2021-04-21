import React from 'react'
import Card from './Card'
import Card_2 from './Card_2'
import Card_3 from './Card_3'
const display = () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    alert (`User name is: ${name} & email is: ${email}`)
}



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
                        <input type="text" style={{textTransform: "uppercase"}}  className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="d-grid my-2">
                        <button type="button" onClick={display} className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card_2 />
                </div>
                <div className="col-md-4">
                    <Card_3 />
                </div>
            </div>
        </div>
    )
}
