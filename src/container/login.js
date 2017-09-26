import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {login} from '../action/user_action'
import '../App.css';

class LoginModule extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.isValid) {
      this.props.login({
          username: this.state.username,
          password: this.state.password
      }, (response) => {
        if(response.data.responseCode > 0) {
            this.setState({
            username: this.state.username,
            password: this.state.password,
            errorMessage:response.data.responseStatus,
            isValid : false
          });
        } else {
          this.props.history.push((response.data.data.buyer?'/buyer':'/seller'));
        }
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
            <button onClick={this.handleSubmit}>login</button>
            {<p className="message">Not registered? <Link to="/register">Create an account</Link></p> }
          </form>
    );
  }
}

export default connect(null, {login})(LoginModule);