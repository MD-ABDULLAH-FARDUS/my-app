const labelStyle = {
  display: "inline-block",
  fontSize: "1.5rem",
  marginRight: "20px",
  marginBottom: "10px"
}
const inputStyle = {
  width: "400px",
  height: "30px",
  textTransform: "uppercase"
}
const buttonStyle = {
  width: "200px",
  height: "60px",
  fontSize: "2rem"
}
const man = () => {
  let name = document.getElementById("name").value 
  let email = document.getElementById("email").value
  alert (`User Name is : ${name} and User mail is : ${email}`)
}
function App() {
    return (
        <div>
          <div>
           <label style={labelStyle} htmlFor="name">Name:</label>
           <input type="text" style={inputStyle} id="name"/>
          </div>
          <div>
           <label style={labelStyle} htmlFor="email">Email:</label>
           <input type="email" name="" id="email" style={inputStyle}/>
          </div>
          <button style={buttonStyle} onClick={man}>Submit</button>
        </div>
    );
}

export default App;
