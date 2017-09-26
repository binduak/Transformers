import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCategoryList} from "../action/category_action";
import {getProductList} from "../action/product_action";

class BuyerHome extends Component {
    constructor() {
        super();
        this.state = {
            listOfCategories: [],
            categoryId: -1
        };
        this.getProductsList = this.getProductsList.bind(this);
    }

    componentWillMount() {
        this.props.getCategoryList((response) => {console.log(response.data); this.setState({listOfCategories: response.data.data})})
    }

    getProductsList(e) {
        this.setState({categoryId: e.target.value});
        this.props.getProductList(e.target.value, (response)=>{console.log(response.data)})
        return (<div>
            {this.props.products.map((cat, index) => {
                return {cat}
            })}
        </div>)
    }

    render() {
        return (<div>
            <h1> Landing Page-Buyer</h1>
            <h3> Welcome </h3>
            <lable className=""> Category</lable>
            <select className="form-control" onChange={this.getProductsList}>
                <option value="-1">--Select--</option>
                {this.state.listOfCategories.map((cat, index) => {
                    return (<option key={index} value={cat.categoryId}> {cat.categoryName} </option>)
                })
                }
            </select>

        </div>);
    }
}

function mapStateToProps({weather}) {
    return {weather};
}
export default connect(mapStateToProps, {getCategoryList, getProductList})(BuyerHome);
