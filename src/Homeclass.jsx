//Class Component
import { Component } from "react";

class Homeclass extends Component {
    render() {
        return (
            <>
            <p>Good Morning {this.props.fname}</p>
            <p>Profession : {this.props.profession}</p>
            <h5>hi {this.props.fage}</h5>
            </>
        )
    }
}

export default Homeclass;

