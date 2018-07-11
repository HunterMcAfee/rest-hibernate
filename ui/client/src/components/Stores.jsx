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
        axios.get(`http://localhost:3001/store/all`)
            .then((res) => {
                let newState = { ...this.state };
                newState.stores = res.data;
                this.setState(newState);
            })
            .catch((error) => {
                console.log(`Error retrieving stores from API: ${error}`)
            })
    }

    render() {
        return (
            <div className="row justify-content-center">
                {this.state.stores.map((store, i) => {
                    return (
                        <div className="col-sm-3" key={i}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{store.storeName}</h5>
                                    <p className="card-text">{store.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Stores;