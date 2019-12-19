import React from 'react';
const bcrypt = require('bcryptjs')
const salt = 10;

export default class SignIn extends React.Component {


  // alert(JSON.stringify(model));
 state ={
   userEmail: [],
   password: []
 }

 handleSubmit = (event) => {
  event.preventDefault();
  alert(JSON.stringify(this.state))
  console.log(this.state)
 }

 dataUE = async (event) => {
   const email = event.target.value
   this.setState({userEmail: email})
  //  console.log(this.state.userEmail)
 }
 dataEP = async (event) => {
   const p = event.target.value
   await bcrypt.genSalt(salt, (err, salt) => {
     bcrypt.hash(p, salt, (err, hash) => {
       this.setState({password: hash})
     })
   })
  //  console.log(this.state.password)
 }

render () {

  return (
    <div className= "logInBody">
      <form onSubmit= {this.handleSubmit}>
        <h1>Email:</h1>
        <input type= "email" placeholder= "Email" onChange= {this.dataUE}></input> <br />
        <h1>Password:</h1>
        <input type= "password" placeholder= "Password" onChange= {this.dataEP}></input><br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
}