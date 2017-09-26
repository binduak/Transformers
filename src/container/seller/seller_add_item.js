import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {TextAreaComponent, TextComponent} from "../../component/input";
import {addProduct} from "../../action/product_action";
import CategoryComponent from "./CategorySelect";

class AddItem extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.addProduct(values, ()=>{this.props.history.push("/seller");})
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
                        <CategoryComponent name="category"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="image" placeholder="Image"/>
                    </div>
                    <div className="form-group row">
                        <TextAreaComponent name="description" placeholder="Short Description"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="quantity" placeholder="Quantity"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="price" placeholder="Price" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({form: 'AddItem'})(connect(null, {addProduct})(AddItem));
