import React, { Component } from 'react'
class Palindrome extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleClick(value){
        this.setState({
            userInput: value
        })
    }

    pali(userInput){
        let forwards =  userInput
        let backwards = userInput
        backwards = backwards.split('')
        backwards = backwards.reverse()
        backwards = backwards.join('')

        if(forwards === backwards){
            this.setState({palindrome: 'true'})
        }
        else {
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input onChange={(e) => this.handleClick(e.target.value)} className="inputLine"></input>
                <button onClick={() => this.pali(this.state.userInput)} className="confirmationButton"></button>
                <span className="resultsBox">Palidrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome