import React, { Component } from 'react'
class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
        unFilteredArray: [
            {name: "batman", age: 37, hobbie: "Fight Crime"},
            {name: "superman", age: "infinity", hobbie: "Using my laserbeam"},
            {make: "Tesla", model: "X", color: "Black", speed: "fast"},
            {make: "Ford", model: "Raptor", color: "Gray", speed: "fast"},
            {family: "Voorhees", familySize: 8},

        ],
        userInput: '',
        filteredArray: []
    }
}
    handleChange(value){
        this.setState({
            userInput: value
        })
    }
    handleClick(prop){
        let unFill = this.state.unFilteredArray
        let filteredArray = []
        
        for(let i = 0; i < unFill.length; i++){
            if(unFill[i].hasOwnProperty(prop)){
                filteredArray.push(unFill[i])
            }
        }
        this.setState({
            filteredArray: filteredArray
        })
    }
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)}>Filter Object</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
                
            </div>
        )
    }
}

export default FilterObject