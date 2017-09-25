import React, {Component} from 'react';

class Registration extends Component {

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(){

    }

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="emailID" className="col-sm-2 col-form-label">Email ID</label>
                        <div className="col-sm-10">
                            <input type="text" name="emailID" value={this.state.emailID} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="userName" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="confirm-password" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <textarea type="text" name="address" value={this.state.address} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="mobile" className="col-sm-2 col-form-label">Mobile No</label>
                        <div className="col-sm-10">
                            <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleInputChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="type" className="col-sm-2 col-form-label">Type</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="type" value={this.state.type} onChange={this.handleInputChange}>
                                <option value="-1" selected={this.state.type == -1}>--Select--</option>
                                <option value="0" selected={this.state.type == 0}>Buyer</option>
                                <option value="1" selected={this.state.type == 1}>Seller</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onSubmit = {this.handleSubmit}>Submit</button>                </form>
            </div>
        );
    }
}

export default Registration;
