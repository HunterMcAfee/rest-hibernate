import React, { Component } from 'react';
import axios from 'axios';

class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerData: {
                firstName: "",
                lastName: "",
                bio: ""
            }
        }
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.customerData);
        axios.post(`http://localhost:3001/store/${this.props.store.id}/addCustomer`, this.state.customerData)
            .then((res) => {
                this.props._fetchStores();
                console.log(res.data);
            })
            .catch((error) => {
                console.log(`Error adding customer to store: ${error}`)
            });
    }

    _handleDataChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let newState = {...this.state};
        newState.customerData[name] = value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this._handleSubmit}>
                    <div className="input-group">
                        <input onChange={this._handleDataChange} type="text" name="firstName" className="form-control" placeholder="First Name:" />
                        <input onChange={this._handleDataChange} type="text" name="lastName" className="form-control" placeholder="Last Name:" />
                    </div>
                    <textarea onChange={this._handleDataChange} className="form-control" name="bio" placeholder="Bio" />
                    <br />
                    <button className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCustomer;