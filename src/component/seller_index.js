import React, { Component } from 'react';
import axios from 'axios';


export default class SellerHome extends Component {

    render() {

        return (
            <div>
            <h1> Landing Page-Seller</h1>
            <h3> Welcome </h3>
            <Link to="/">Log out</Link>
            <ul>
                <li><Link to="/seller/addItem">Add New Item</Link></li>
            </ul>

        </div>);
    }
}
