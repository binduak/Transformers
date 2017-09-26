import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {register} from '../action/user_action'
import {connect} from "react-redux";

class Registration extends Component {

    constructor() {
        super();
        this.state = {type: -1}
        this.onSubmit = this.onSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onSubmit(values) {

        this.props.history.push('/')
        this.props.register(values);
    }

    renderExpField(field) {
        return <span><input type="text" className="form-control" required {...field.input} />
        </span>
    }

    renderEmailField(field) {
        return <span><input type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            required {...field.input} />
        </span>
    }

    renderPasswordField(field) {
        return <span><input type="password" className="form-control" pattern=".{8,}" required {...field.input} />
        </span>
    }

    renderTextField(field) {
        console.log(field);
        return <span><input type="text" className="form-control" required {...field.input} />
        </span>
    }

    renderTextArea(field) {
        return <span><textarea className="form-control" required  {...field.input} />
        </span>
    }

    renderTypeSelect(field) {
        return <span><select className="form-control" required {...field.input}>
            <option value="-1">--Select--</option>
            <option value="0">Buyer</option>
            <option value="1">Seller</option>
        </select></span>
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
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <Field label="Name" placeholder="Name" name="name" component={this.renderTextField} type="text"/>
                    </div>
                    <div className="form-group row">
                        <label for="emailID" className="col-sm-2 col-form-label">Email ID</label>
                        <Field name="emailID" component={this.renderEmailField}/>
                    </div>
                    <div className="form-group row">
                        <label for="userName" className="col-sm-2 col-form-label">Username</label>
                        <Field name="userName" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">Password</label>
                        <Field name="password" component={this.renderPasswordField}/>
                    </div>
                    <div className="form-group row">
                        <label for="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <Field name="confirmPassword" component={this.renderPasswordField}/>
                    </div>
                    <div className="form-group row">
                        <label for="address" className="col-sm-2 col-form-label">Address</label>
                        <Field name="address" component={this.renderTextArea}/>
                    </div>
                    <div className="form-group row">
                        <label for="mobile" className="col-sm-2 col-form-label">Mobile No</label>
                        <Field name="mobile" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <label for="type" className="col-sm-2 col-form-label">Type</label>
                        <Field name="type" component={this.renderTypeSelect} onChange={this.onTypeChange}/>
                    </div>
                    {
                        this._renderBuyerOrSellerForm()
                    }
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
                        <label for="gender" className="col-sm-2 col-form-label">Gender</label>
                        <Field name="gender" component={this.renderGenderSelect}/>
                    </div>
                    <div className="form-group row">
                        <label for="dateOfBirth" className="col-sm-2 col-form-label">Date Of Birth</label>
                        <Field name="dateOfBirth" component={this.renderTextField}/>
                    </div>
                </div>
            )
        if (this.state.type == 1)
            return (
                <div>
                    <div className="form-group row">
                        <label for="panNo" className="col-sm-2 col-form-label">Pan Number</label>
                        <Field name="panNo" component={this.renderTextField}/>
                    </div>
                    <div className="form-group row">
                        <label for="experience" className="col-sm-2 col-form-label">Experience</label>
                        <Field name="experienceYears" component={this.renderExpField}/>&nbsp;Years&nbsp;
                        <Field name="experienceMonths" component={this.renderExpField}/>&nbsp;Months
                    </div>
                </div>
            )
    }

    onTypeChange(e) {
        this.setState({type: e.target.value});
    }
}

export default reduxForm({form: 'RegistrationForm'})(connect(null, {register})(Registration));
