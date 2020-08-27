import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props){
        super()
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
    

    addNum = () => {
        
        this.setState({
            sum: this.state.num1 + this.state.num2
        })

    }


    render(){
        
        return (
            <div className="container">
            <h1>Add with React!</h1>

                <input type="number"
                name="num1"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                name="num2"
                placeholder="Enter your first number"
                value={this.state.num2}
                onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={() => this.addNum()}>=</button>
                <p>Result: {this.state.sum}</p>
            </div>
        )
    }
}

export default Calculator;