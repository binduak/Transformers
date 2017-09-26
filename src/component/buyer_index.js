import React, { Component } from 'react';
import axios from 'axios';


export default class BuyerHome extends Component {
  constructor() {
    super();
    this.state = {
      listOfCategories:[];
      categoryId:-1;
      listOfproducts:[]
    };
    //  localStorage.setItem("userData", response.data.data);
    this.getCategories = this.getCategories.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
    this.getCategoryList = this.getCategoryList.bind(this);
  }

  componentWillMount() {
    this.getCategories();
  }

this.getCategoryId(e){

this.setState({categoryId : e.target.value});
this.getCategoryList();
return(<div>
  {this.state.listOfproducts.map((cat,index) => {
    return {cat}
  })}
</div>)
}

this.getCategoryList(){
  axios({
    method:'get',
    url:'/category/{this.state.categoryId}',
    baseURL: 'http://10.136.22.124:8080',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    credentials: 'same-origin',
    responseType:'json',
}).then(function (response) {
thisObj.setState({listOfproducts : response.data.data})
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });

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
<select className="form-control" onChange={this.getCategoryId(e)}>
  <option value="-1">--Select-- </option>
     {this.state.listOfCategories.map((cat,index) => {
       return (<option key={index} value={cat.categoryId}> {cat.categoryName} </option>)
        })
     }
   </select>

  </div>);
  }
}
