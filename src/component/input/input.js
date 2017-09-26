import React,{Component} from "react";
import {Field} from "redux-form";

export class TextComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <input type="text" placeholder={field.placeholder} className="form-control" required {...field.input} />
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class EmailComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <input type="email" placeholder={field.placeholder} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
        required {...field.input} />
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class PasswordComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <input type="password" placeholder={field.placeholder} className="form-control" pattern=".{8,}" required {...field.input} />
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class DateComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <input type="date" placeholder={field.placeholder} className="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required {...field.input} />
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class TextAreaComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <textarea placeholder={field.placeholder} className="form-control" required  {...field.input} />
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class TypeComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <select className="form-control" required {...field.input}>
            <option value="-1">--Type--</option>
            <option value="0">Buyer</option>
            <option value="1">Seller</option>
        </select>
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}

export class GenderComponent extends Component{
    constructor(props){
        super(props);
    }
    renderField(field){
        return <div><select className="form-control" {...field.input}>
            <option value="-1">--Gender--</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
        </select></div>
    }
    render(){
        return <Field component={this.renderField} type="text" {...this.props}/>
    }
}