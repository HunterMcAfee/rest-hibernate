import React, { Component } from 'react';
import axios from 'axios';
import SearchCustomer from './SearchCustomer';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount = () => {
        this._fetchCustomers();
    }
    _fetchCustomers = async () => {
        axios.get(`http://localhost:3001/customer/all`)
            .then((res) => {
                let newState = { ...this.state };
                newState.customers = res.data;
                this.setState(newState);
            })
            .catch((error) => {
                console.log(`Error retrieving customers from API: ${error}`)
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-7 justify-content-center">
                    <div className="row justify-content-center">
                        <h2 className="col-sm-10 text-center title">Customers</h2>
                    </div>
                    <div className="row customers justify-content-center">
                        {this.state.customers.map((customer, i) => {
                            return (
                                <div className="card col-sm-3 col-md-5" key={i} style={{ width: "18rem", height: "10rem" }}>
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
                <div className="col-sm-5">
                    <SearchCustomer />
                </div>
            </div>
        );
    }
}

export default Customers;