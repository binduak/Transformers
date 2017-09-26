import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class SellerHome extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <h1> Landing Page-Seller</h1>
                <h3> Welcome  {this.props.user.name}</h3>
                <Link to="/">Log out</Link>
                <ul>
                    <li><Link to="/seller/addItem">Add New Item</Link></li>
                </ul>

            </div>);
    }
}

function mapStateToProps({user}) {
    return {user};
}

export default connect(mapStateToProps)(SellerHome);
