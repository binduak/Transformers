import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style.css';
import Checkout from "./checkout";


export default class ProductList extends Component {

    constructor() {
        super();
        this.checkout = this.checkout.bind(this);
    }

    checkout() {
        return <Checkout item={this.props.item}/>
    }


    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.item.imageURL} alt={this.props.item.name} width="150px" height="250px"/>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.item.name}</h4>
                        <p className="card-text">Rs.{this.props.item.price}</p>
                        <p className="card-text"><Link className="item_add single-item hvr-outline-out button2" to="/checkout" onClick={this.toCheckout}>Buy</Link></p>
                    </div>
            </div>

        );
    }
}
