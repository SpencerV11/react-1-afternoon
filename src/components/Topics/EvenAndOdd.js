import React, { Component } from 'react'
class EvenAndOdd extends Component {
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    evensAndOdds(){
        let odds = []
        let evens = []
        let split = this.state.userInput.split(",")
        let stringToInt = split.map((value) => parseInt(value))
        stringToInt.filter((el) => {
            if(el % 2 === 0){
                evens.push(el)
             }
            else {
                odds.push(el)
            }
        })

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
        
    
    handleChange(value) {
        console.log(value)
        this.setState({
            userInput: value
        })
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                className="inputLine" 
                onChange={e => this.handleChange(e.target.value)}>
                </input>
                <button 
                className="confirmationButton"
                onClick={() => this.evensAndOdds(this.state.userInput)}>
                Split Array</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd