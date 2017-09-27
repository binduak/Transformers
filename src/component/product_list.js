import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style.css';
import Checkout from "./checkout";


export default class ProductList extends Component {

    constructor() {
        super();
        this.checkout = this.checkout.bind(this);
    }
    checkout(){
        return <Checkout item={this.props.item}/>
    }


    render() {
        return (
            <div>
                <div className="single-pro">
                    <div className="col-md-3 product-men">
                        <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item">
                                <img src={this.props.item.imageURL} alt="productImage" className="pro-image-front"/>
                                <img src={this.props.item.imageURL} alt="productImage" className="pro-image-back"/>
                                {/*<span className="product-new-top">{this.props.item.description}</span>*/}
                            </div>
                            <div className="item-info-product ">
                                <h4>{this.props.item.name}</h4>
                                {/*<h4>{this.props.item.title}</h4>*/}
                                {/*<h4>{this.props.item.description}</h4>*/}
                                <div className="info-product-price">
                                    <span className="item_price">Rs.{this.props.item.price} /-</span>
                                </div>
                                <Link className="item_add single-item hvr-outline-out button2" to="/checkout" onClick={this.toCheckout}>Buy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
