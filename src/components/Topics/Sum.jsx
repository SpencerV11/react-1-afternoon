import React, { Component } from 'react'
class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(movement) {
        console.log(movement)
        this.setState({
            number1: parseInt(movement)
        })
    }

    handleChange2(movement) {
        console.log(movement)
        this.setState({
            number2: parseInt(movement)
        })
    }

    add(input1, input2) {
        this.setState({
            sum: input1 + input2
        })
        
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input onChange={ (e) => this.handleChange(e.target.value) } className="inputLine"></input>
                <input onChange={ (e) => this.handleChange2(e.target.value) } className="inputLine"></input>
                <button onClick={ () => this.add(this.state.number1, this.state.number2) } className="confirmationButton">Submit</button>
                <span className="resultsBox">Your sum is: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum