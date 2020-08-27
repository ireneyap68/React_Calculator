import React, {Component} from 'react';
import './App.css';


class Calculator extends Component {
    constructor(props){
        super()
        this.operators = ['+', '-', '*', '/']
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
            operator:''
        }
    }
   

    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value)});
    }

    setOperator = (e) => {
        this.setState({ operator: e.target.value})
    }
    
    setCalculate = () => {
        if(this.state.operator === '+'){
            this.setState({sum: this.state.num1 + this.state.num2})
        } else if (this.state.operator === '-'){
            this.setState({sum: this.state.num1 - this.state.num2})
        } else if (this.state.operator ==='*'){
            this.setState({sum: this.state.num1 * this.state.num2})
        } else if (this.state.operator === '/'){
            this.setState({sum: this.state.num1 / this.state.num2})
        }
    }

    render(){
        
        return (
            <div className="container">
            <h1>Calculator with React!</h1>

                <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={ (e) => this.setNum(e, 'num1') }
                />
                <select onChange={ (e) => this.setOperator(e)} >
                    {this.operators.map(function (item){
                        return<option value={item}>{item}</option>;
                    })}
                
                </select>

                <input type="number"
                name="num2"
                placeholder="Enter your first number"
                value={this.state.num2}
                onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={() => this.setCalculate()}>=</button>
                <h3>Result: {this.state.sum}</h3>
            </div>
        )
    }
}

export default Calculator;