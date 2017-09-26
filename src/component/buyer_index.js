import React, { Component } from 'react';
import axios from 'axios';


export default class BuyerHome extends Component {
  constructor() {
    super();
    this.state = {
      listOfCategories:[]
    };
    //  localStorage.setItem("userData", response.data.data);
    this.getCategories = this.getCategories.bind(this);
  }

  componentWillMount() {
    this.getCategories();
  }

  getCategories(){

    var thisObj = this;
    axios({
      method:'get',
      url:'/category/getAllCategory',
      baseURL: 'http://10.136.22.124:8080',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      credentials: 'same-origin',
      responseType:'json',
  }).then(function (response) {
      thisObj.setState({listOfCategories : response.data.data})
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

  }

  render() {

    console.log("categories " ,this.state.listOfCategories)
    return (<div>
    <h1> Landing Page-Buyer</h1>
    <h3> Welcome </h3>
    <lable className=""> Category </lable>
<select className="form-control" >
  <option value="-1">--Select-- </option>
     {this.state.listOfCategories.map((cat,index) => {
       return (<option key={index} value={cat.categoryId}> {cat.categoryName} </option>)
        })
     }
   </select>

  </div>);
  }
}
