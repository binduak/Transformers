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
            <div class="card">
                <img class="card-img-top" src={this.props.item.imageURL} alt={this.props.item.name} width="150px" height="250px"/>
                    <div class="card-block">
                        <h4 class="card-title">{this.props.item.name}</h4>
                        <p class="card-text">Rs.{this.props.item.price}</p>
                        <p class="card-text"><Link className="item_add single-item hvr-outline-out button2" to="/checkout" onClick={this.toCheckout}>Buy</Link></p>
                    </div>
            </div>

        );
    }
}
