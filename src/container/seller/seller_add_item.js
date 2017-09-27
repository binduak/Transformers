import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import {TextAreaComponent, TextComponent} from "../../component/input";
import {addItem} from "../../action/item_action";
import CategoryComponent from "./category_select";

class AddItem extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        console.log(values);
        if (values.category) {
            values.categoryId = JSON.parse(values.category).categoryId;
            values.categoryName = JSON.parse(values.category).categoryName;
        }
        console.log(this.props.user)
        values.sellerId = this.props.user.id;
        values.sellerUsername = this.props.user.name;
        delete values.category
        console.log(values);
        this.props.addItem(values, () => {
            this.props.history.push("/seller");
        })
    }

    render() {
        console.log("In render",this.props)
        return (
            <div className="container-fluid">
                <h4 className="text-muted">Add Item</h4><br/>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-group row">
                        <TextComponent placeholder="Name" name="itemName"/>
                    </div>
                    <div className="form-group row">
                        <CategoryComponent name="category"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="imagePath" placeholder="Image"/>
                    </div>
                    <div className="form-group row">
                        <TextAreaComponent name="description" placeholder="Short Description"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="quantity" placeholder="Quantity"/>
                    </div>
                    <div className="form-group row">
                        <TextComponent name="price" placeholder="Price"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {user};
}

export default reduxForm({form: 'AddItem'})(connect(mapStateToProps, {addItem})(AddItem));
