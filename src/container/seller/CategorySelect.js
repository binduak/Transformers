import React, {Component} from "react";
import {Field} from "redux-form";
import {getCategoryList} from "../../action/category_action";
import {connect} from "react-redux";

class CategoryComponent extends Component {
    constructor() {
        super();
        this.state = {
            listOfCategories: []
        };
    }

    componentWillMount() {
        this.props.getCategoryList((response) => {console.log(response.data); this.setState({listOfCategories: response.data.data})})
    }

    render() {
        return <Field component={(field)=>{

            return <div><select className="form-control" {...field.input}>
                <option value="-1">--Category--</option>
                {
                    this.state.listOfCategories.map((cat, index) => {
                        return (<option key={index} value={cat.categoryId}> {cat.categoryName} </option>)
                    })
                }
            </select></div>

        }} type="text" {...this.props}/>
    }
}
export default connect(null, { getCategoryList})(CategoryComponent);