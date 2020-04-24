import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'

export class Form extends Component {

    state = {
        name: "",
        email: "",
        message: ""
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message }
        this.props.addLead(lead)

    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input value={name} type="text" name="name" className="form-control" id="exampleInputName"
                            onChange={this.onChange} aria-describedby="nameHelp" />
                        <small id="nameHelp" className="form-text text-muted">Please enter here your name.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={email} name="email" onChange={this.onChange} type="email"
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputMessage">Message</label>
                        <input type="textarea" name="message" onChange={this.onChange} value={message} className="form-control"
                            id="exampleInputMessage" aria-describedby="messageHelp" />
                        <small id="messageHelp" className="form-text text-muted">Enter your message here.</small>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}



export default connect(null, { addLead })(Form)
