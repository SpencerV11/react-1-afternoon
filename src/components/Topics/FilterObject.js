// import React, { Component } from 'react'
// class FilterObject extends Component {
//     constructor(){
//         super()
//         this.state = {
//         unFilteredArray: [
//             {name: "Bobby", age: 80}, 
//             {name: "Bibby", age: 12},
//             {dogName: "Josh", age: 2},
//             {dogName: "Jimmy", age: 7}
//         ],
//         userInput: '',
//         filteredArray: []
//     }
// }
//     handleChange(value){
//         this.setState({
//             userInput: value
//         })
//     }
//     handleClick(prop){
//         let property = this.state.unFilteredArray
//         let filteredArray = []
        
//         for(let i = 0; i < unFilteredArray.length; i++){
//             if(unFilteredArray[i].hasOwnProperty(prop)){
//                 filteredArray.push(unFilteredArray[i])
//             }
//         }
//     }
//     render(){
//         return (
//             <div className ="puzzleBox filterObjectPB">
//                 <h4>Filter Object</h4>
//                 <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
//                 <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
//                 <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)}>Filter It</button>
//                 <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
                
//             </div>
//         )
//     }
// }

// export default FilterObject