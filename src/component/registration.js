import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {register} from '../action/user_action'
import {connect} from "react-redux";

import axios from "axios"
import"../css/registration.css"
import {
    DateComponent,
    EmailComponent, GenderComponent, PasswordComponent, TextAreaComponent, TextComponent,
    TypeComponent
} from "./input/input";

class Registration extends Component {

    constructor() {
        super();
        this.state = {
            type: -1,
            errorMessage: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.handleRegistrationResponse = this.handleRegistrationResponse.bind(this);
    }

    onSubmit(values) {
        axios({
            method: 'post',
            url: '/user/' + ((values.type == 0) ? 'registerBuyer' : 'registerSeller'),
            baseURL: 'http://localhost:8080',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
            responseType: 'json',
            data: values
        }).then(this.handleRegistrationResponse);
    }

    render() {
        return (
            <div className="container-fluid">
                <h4 className="text-muted"> Registration</h4><br/>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group row">
                        <TextComponent label="Name" placeholder="Name" name="name"/>
                    </div>
                    <div className="form-group row">
                        <EmailComponent name="emailId" placeholder="Email Address"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group row">
                        <PasswordComponent name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group row">
                        <PasswordComponent name="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group row">
                        <TextAreaComponent name="address" placeholder="Address"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="mobileNumber" placeholder="Mobile No" />
                    </div>
                    <div className="form-group row">
                        <TypeComponent name="type" placeholder="Type" onChange={this.onTypeChange}/>
                    </div>
                    {
                        this._renderBuyerOrSellerForm()
                    }
                    {this.state.errorMessage}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    _renderBuyerOrSellerForm() {
        if (this.state.type == 0)
            return (
                <div>
                    <div className="form-group row">
                        <GenderComponent name="gender" placeholder="Gender"/>
                    </div>
                    <div className="form-group row">
                        <DateComponent name="dateOfBirth" placeholder="Date Of Birth (YYY-MM-DD)" />
                    </div>
                </div>
            )
        if (this.state.type == 1)
            return (
                <div>
                    <div className="form-group row">
                        <TextComponent name="panCardNo" placeholder="Pan Number"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="experienceYears" placeholder="Experience(Years)"/>&nbsp;
                        <TextComponent name="experienceMonths" placeholder="Experience(Months)"/>&nbsp;
                    </div>
                </div>
            )
    }

    onTypeChange(e) {
        this.setState({type: e.target.value, errorMessage: ""});
    }

    handleRegistrationResponse(response) {
        console.log(response.data.responseStatus == "Sucess")
        if (response.data.responseStatus == "Success") {
            this.props.history.push("/");
        } else {
            this.setState({type: this.state.type, errorMessage: response.data.responseStatus})
        }
        return response;
    }
}

export default reduxForm({form: 'RegistrationForm'})(connect(null, {register})(Registration));
