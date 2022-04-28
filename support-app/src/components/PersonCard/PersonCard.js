import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className="card">
                <h1>{firstName} {lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;