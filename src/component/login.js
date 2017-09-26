import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

export default class LoginModule extends Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password : "",
      isValid : false,
      errorMessage: ""
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleChangeUsername (event) {
    this.setState({
      username: event.target.value,
      password: this.state.password,
      errorMessage: "",
      isValid : this.state.password && this.state.username
    });
  }

  handleChangePassword (event) {
    this.setState({
      username: this.state.username,
      password: event.target.value,
      errorMessage: "",
      isValid : this.state.password && this.state.username
    });
  }

  login(e) {
    e.preventDefault();

    let thisObj = this;

    if(thisObj.state.isValid) {
      axios({
        method:'post',
        url:'/user/login',
        baseURL: 'http://localhost:8080',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin',
        responseType:'json',
        data: {
            username: this.state.username,
            password: this.state.password
        }
      }).then(function (response) {
        if(response.data.responseCode > 0) {
          thisObj.setState({
            username: thisObj.state.username,
            password: thisObj.state.password,
            errorMessage:response.data.responseStatus,
            isValid : false
          });
        } else {
          console.log(response.data.data)
          localStorage.setItem("userData", response.data.data);

          if(response.data.data.buyer) {
            thisObj.props.history.push('/buyer');
          } else {
            thisObj.props.history.push('/seller');
          }

        }

        console.log(response);
      }).catch(function (error) {

        console.log(error);
      });
    }
  }

  render() {
    return (
          <form className="login-form">
            <h4 className="text-muted">Welcome To Tradeaway</h4>
            <div className={"alert alert-warning alert-dismissible fade " + (this.state.errorMessage ? 'show' : 'hidden')}  role="alert">
              <strong>{this.state.errorMessage}</strong>
            </div>
            <input type="text" placeholder="username" maxLength="50" onChange = {this.handleChangeUsername} required/>
            <input type="password" placeholder="password" maxLength="50" onChange = {this.handleChangePassword} required/>
            <button onClick={this.login}>login</button>
            {<p className="message">Not registered? <Link to="/register">Create an account</Link></p> }
          </form>
    );
  }
}
