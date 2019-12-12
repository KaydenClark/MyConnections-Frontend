import React from 'react';
const bcrypt = require('bcryptjs')
const salt = 10;

export default class SignIn extends React.Component {


  // alert(JSON.stringify(model));
 state ={
   userInfo: []
 }

 onSubmit = (event) => {
  event.preventDefault();
  alert(this.state)
 }

 dataEP = async (event) => {
   const p = event.target.value
   await bcrypt.genSalt(salt, (err, salt) => {
     bcrypt.hash(p, salt, (err, hash) => {
       this.setState({value: hash})
     })
   })
  console.log(this.state)
 }

render () {

  return (
    <div className= "logInBody">
      <form>
        <h1>Email:</h1>
        <input type= "email" placeholder= "Email"></input> <br />
        <h1>Password:</h1>
        <input type= "password" placeholder= "Password" onChange= {this.dataEP}></input><br />
        <input type="submit"></input>
      </form>
    </div>
  );
};
}