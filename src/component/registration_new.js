import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form'
import {register} from '../action/user_action'
import {connect} from "react-redux";
class NewRegistration extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            emailID: "",
            userName: "",
            password: "",
            confirmPassword: "",
            address: "",
            mobile: "",
            type: -1,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit(values) {

        this.props.history.push('/')
        this.props.register(values);
    }

    renderTextField(field){
        return <div><input type="text" className="form-control" {...field.input} />{field.meta.touched? field.meta.error:''}</div>
    }

    renderTextArea(field){
        return <div><textarea className="form-control"  {...field.input} />{field.meta.touched? field.meta.error:''}</div>
    }

    renderTypeSelect(field){
        return <div><select className="form-control" {...field.input}>
            <option value="-1">--Select--</option>
            <option value="0">Buyer</option>
            <option value="1">Seller</option>
        </select>{field.meta.touched? field.meta.error:''}</div>
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} >
                    <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <Field label="Name" name="name" component={this.renderTextField} type="text" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="emailID" className="col-sm-2 col-form-label">Email ID</label>
                        <div className="col-sm-10">
                            <Field type="text" name="emailID" component={this.renderTextField}  value={this.state.emailID} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="userName" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <Field type="text" name="userName" component={this.renderTextField}  value={this.state.userName} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <Field type="password" name="password" component={this.renderTextField}  value={this.state.password} onChange={this.handleInputChange}
                                   />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <Field type="password" name="confirmPassword" component={this.renderTextField}  value={this.state.confirmPassword} onChange={this.handleInputChange}
                                   />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <Field name="address" value={this.state.address} component={this.renderTextArea}  onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="mobile" className="col-sm-2 col-form-label">Mobile No</label>
                        <div className="col-sm-10">
                            <Field type="text" name="mobile" value={this.state.mobile} component={this.renderTextField}  onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="type" className="col-sm-2 col-form-label">Type</label>
                        <div className="col-sm-10">
                            <Field  name="type" value={this.state.type} component={this.renderTypeSelect}  onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );
    }
}

function validate(values){

    const errors={}

    if(!values.name){
        errors.name="Enter your name"
    }

    if(!values.emailID){
        errors.emailID="Enter your emailID"
    }
    if(!values.userName){
        errors.userName="Enter your user name"
    }
    if(!values.password){
        errors.password="Enter your password"
    }
    if(!values.confirmPassword){
        errors.confirmPassword="Renter your password here"
    }
    if(!values.address){
        errors.address="Enter your address"
    }
    if(!values.mobile){
        errors.mobile="Enter your mobile"
    }
    if(values.type === -1){
        errors.type="Choose your user type"
    }
    return errors;
}
export default reduxForm({validate, form: 'RegistrationForm'})(connect(null, {register})(NewRegistration));
