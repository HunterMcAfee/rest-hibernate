import React, { Component } from 'react';
import axios from 'axios';

class SearchCustomer extends Component {
    constructor() {
        super();
        this.state = {
            customers: [],
            lastName: ""
        }
    }

    _handleChange = (event) => {
        let targetName = event.target.name;
        let targetValue = event.target.value;
        this.setState({ [targetName]: targetValue });
    }

    _fetchCustomerLastName = async (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3001/customer/lastname/${this.state.lastName}`)
            .then((res) => {
                this.setState({ customers: res.data });
            })
            .catch((error) => {
                console.log(`Customer not found: ${error}`);
            })
    }

    render() {
        return (
            <div className="searchComponent">
                <div className="row justify-content-center">
                    <h3 className="text-center title">Search Customer by Last Name:</h3>
                    <form className="input-group" onSubmit={this._fetchCustomerLastName}>
                        <input type="text" className="form-control" onChange={this._handleChange} name="lastName" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="row justify-content-center">
                    {this.state.customers.map((customer, i) => {
                        return (
                            <div className="card col-sm-8" key={i} style={{ width: "18rem", height: "10rem" }}>
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
        );
    }
}

export default SearchCustomer;