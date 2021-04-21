import React from 'react'

const cardStyle = {
    borderRadius: "1rem",
    width: "320px",
    boxShadow: "3px 3px 3px gray",
    background: "tomato",
    height: "380px",
    boxSizing: "borderBox",
    padding: "1rem"
}
const companyLogo = {
    width: "60px",
    height: "60px",
    borderRadius: "4px",
    background: "LightGray",
    margin: "10px 0",
    textAlign: "center",
    padding: "1rem .2rem",
    fontFamily: "fantasy"
}

export default function Card_2() {
    return (
        <div style={cardStyle}>
           <p className="small">Name :</p>
           <hr/>
           <p className="small">Designation :</p>
           <hr/>
           <p className="small">Department :</p>
           <hr/>
           <p className="small">Join Date :</p>
           <hr/>
           <div className="row">
               <div className="col-3">
           <div style={companyLogo}>
               Logo
           </div>
               </div>
               <div className="col-9 h2 text-center text-uppercase" style={{letterSpacing:"1px"}}>
                company name
               </div>
           </div>
           <hr/>
           <p className="text-black" style={{textAlign:"center"}}>abdullahferdus@gmail.com</p>
           
        </div>
    )
}
