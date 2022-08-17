import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increas: 0
        };
        this.aging = this.aging.bind(this);
    }

    aging() {
        this.setState({increas: this.state.increas + 1})
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age + this.state.increas}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {this.aging}>Birthday Button for { firstName } { lastName }</button>
            </div>
        );
    }
}

export default PersonCard;