import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {register} from '../action/user_action'
import {connect} from "react-redux";

import axios from "axios"
const  { DOM: { input, select, textarea } } = React

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

    renderExpField(field) {
        return <input type="text" placeholder={field.placeholder} className="form-control" required {...field.input} />
    }

    renderEmailField(field) {
        return <input type="email" placeholder={field.placeholder} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            required {...field.input} />
    }

    renderPasswordField(field) {
        return <input type="password" placeholder={field.placeholder} className="form-control" pattern=".{8,}" required {...field.input} />
    }

    renderTextField(field) {
        return <input type="text" placeholder={field.placeholder} className="form-control" required {...field.input} />
    }

    renderTextArea(field) {
        return <textarea placeholder={field.placeholder} className="form-control" required  {...field.input} />
    }

    renderTypeSelect(field) {
        return <select className="form-control" required {...field.input}>
            <option value="-1">--Select--</option>
            <option value="0">Buyer</option>
            <option value="1">Seller</option>
        </select>
    }

    renderGenderSelect(field) {
        return <div><select className="form-control" {...field.input}>
            <option value="-1">--Select--</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
        </select></div>
    }


    render() {
        return (
            <div className="container-fluid">
                <h4 className="text-muted"> Registration</h4><br/>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group row">
                        <Field label="Name" placeholder="Name" name="name" component={this.renderTextField} type="text"/>
                    </div>
                    <div className="form-group row">
                        <Field name="emailId" placeholder="Email Address" component={this.renderEmailField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="username" placeholder="Username" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="password" placeholder="Password" component={this.renderPasswordField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="confirmPassword" placeholder="Confirm Password" component={this.renderPasswordField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="address" placeholder="Address"  component={this.renderTextArea}/>
                    </div>
                    <div className="form-group row">
                        <Field name="mobileNumber" placeholder="Mobile No" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="type" placeholder="Type" component={this.renderTypeSelect} onChange={this.onTypeChange}/>
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
                        <Field name="gender" placeholder="Gender" component={this.renderGenderSelect}/>
                    </div>
                    <div className="form-group row">
                        <Field name="dateOfBirth" placeholder="Date Of Birth" component={this.renderTextField}/>
                    </div>
                </div>
            )
        if (this.state.type == 1)
            return (
                <div>
                    <div className="form-group row">
                        <Field name="panCardNo" placeholder="Pan Number" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <Field name="experienceYears" placeholder="Experience(Years)"component={this.renderExpField}/>&nbsp;
                        <Field name="experienceMonths" placeholder="Experience(Months)" component={this.renderExpField}/>&nbsp;
                    </div>
                </div>
            )
    }

    onTypeChange(e) {
        this.setState({type: e.target.value, errorMessage: ""});
    }

    handleRegistrationResponse(response) {
        console.log(response.data.responseStatus == "Sucess")
        if (response.data.responseStatus == "Sucess") {
            this.props.history.push("/");
        } else {
            this.setState({type: this.state.type, errorMessage: response.data.responseStatus})
        }
        return response;
    }
}

export default reduxForm({form: 'RegistrationForm'})(connect(null, {register})(Registration));
