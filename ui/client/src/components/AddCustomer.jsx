import React, { Component } from 'react';

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
    render() {
        return (
            <div>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="First Name:" />
                        <input type="text" className="form-control" placeholder="Last Name:" />
                    </div>
                    <textarea className="form-control" placeholder="Bio" />
                    <br />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCustomer;