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
        this._fetchStores();
    }

    _fetchStores = async () => {
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
            <div className="row">
                <div className="col-sm-3 bd-sidebar">
                    <div className="row justify-content-center text-center">
                        <h3 className="title">Stores</h3>
                    </div>
                    <div className="row justify-content-center">
                        {this.state.stores.map((store, i) => {
                            return (
                                <div className="card col-sm-10" key={i} style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{store.storeName}</h5>
                                        <p className="card-text">{store.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Stores;