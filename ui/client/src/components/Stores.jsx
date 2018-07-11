import React, { Component } from 'react';
import axios from 'axios';

class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: []
        }
    }

    componentDidMount = () => {
        this._retrieveStores();
    }

    _retrieveStores = async () => {
        axios.get(`http://localhost:8080/stores/all`)
            .then((stores) => {
                console.log(stores);
            })
            .catch((error) => {
                console.log(`Error retrieving stores from API: ${error}`)
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Stores;