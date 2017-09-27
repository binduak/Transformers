import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCategoryList} from "../action/category_action";
import {getItemsList} from "../action/item_action";
import {Link} from "react-router-dom";
import ProductList from "../component/product_list";

class BuyerHome extends Component {
    constructor() {
        super();
        this.state = {
            listOfCategories: [],
            categoryId: -1,
            listOfItems: []
        };
        this.getItemsList = this.getItemsList.bind(this);
    }

    componentWillMount() {
        this.props.getCategoryList((response) => {console.log(this.props.user.name); console.log(response.data); this.setState({listOfCategories: response.data.data})})
    }

    getItemsList(e) {
        console.log(this.props.user,"this.props.user");
        this.setState({categoryId: JSON.parse(e.target.value).categoryId});
        this.props.getItemsList(
            JSON.parse(e.target.value).categoryId,
            JSON.parse(e.target.value).categoryName,
            (response)=> {
                console.log("response.data",response.data)
            }
        )
    }

    render() {
        return (<div>
            <h1> Landing Page-Buyer</h1>
            <h3> Welcome {this.props.user.name}</h3>
            <Link to="/">Log out</Link>
            <lable className=""> Category</lable>
            <select className="form-control" onChange={this.getItemsList}>
                <option value="-1">--Select--</option>
                {this.state.listOfCategories.map((cat, index) => {
                    return (<option key={index} value={JSON.stringify({categoryId:cat.categoryId, categoryName: cat.categoryName})}>{cat.categoryName}</option>)
                })
                }
            </select>
            <div class="card-group">
            {
            this.props.items.map((item,index) => {
                return <ProductList key={index} item={item}/>
            })}
            </div>
        </div>);
    }
}

function mapStateToProps({user, items}) {
    console.log(user, items,"user, item");
    return {user, items};
}
export default connect(mapStateToProps, {getCategoryList,getItemsList})(BuyerHome);
