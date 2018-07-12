import React, { Component } from 'react';
import axios from 'axios';
import AddCustomer from './AddCustomer';

class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: [
                {
                    customers: [
                        {
                            firstName: "",
                            lastName: ""
                        }
                    ]
                }
            ],
            selectedStore: 0
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

    _changeStore = (event) => {
        let index = event.currentTarget.dataset.index;
        this.setState({ selectedStore: index })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3 fullBorderRight">
                    <div className="row justify-content-center text-center">
                        <h3 className="title">Stores</h3>
                    </div>
                    <div className="row justify-content-center">
                        {this.state.stores.map((store, i) => {
                            return (
                                <div className="card col-sm-10" data-index={i} onClick={this._changeStore} key={i} style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{store.storeName}</h5>
                                        <p className="card-text">{store.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-sm-6 customers fullBorderRight">
                    <div className="row justify-content-center">
                        <h3 className="title text-center">Customers for Store: {this.state.stores[this.state.selectedStore].storeName}</h3>
                    </div>
                    <div className="row justify-content-center">
                        {this.state.stores[this.state.selectedStore].customers.map((customer, i) => {
                            return (
                                <div className="card col-sm-4" key={i} style={{ width: "18rem", height: "10rem" }}>
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            First Name: {customer.firstName}
                                            <br />
                                            Last Name: {customer.lastName}
                                        </h6>
                                        <p className="card-text">{customer.bio}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row justify-content-center">
                        <h3 className="title text-center">Add Customer:</h3>
                    </div>
                    <AddCustomer selectedStore={this.state.selectedStore} />
                </div>
            </div>
        );
    }
}

export default Stores;