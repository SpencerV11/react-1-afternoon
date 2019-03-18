import React, { Component } from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString.jsx'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum.jsx'
class TopicBrowser extends Component {
    render(){
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser
