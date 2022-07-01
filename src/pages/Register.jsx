import React, { Component } from 'react';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            role: ''
        }
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleChangeRole = (event) => {
        this.setState({
            role: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className='wrapper vh-100'>
                    <div className='d-flex h-100 justify-content-center align-items-center'>
                        <div className="card shadow w-50 px-5 py-5">
                            <h1 className='mb-3'>Sign Up</h1>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" name='name' id="exampleFormControlInput1" onChange={(value) => this.handleChangeName(value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Role</label>
                                <input type="text" class="form-control" name='role' id="exampleFormControlInput1" onChange={(value) => this.handleChangeRole(value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" name='email' id="exampleFormControlInput1" onChange={(value) => this.handleChangeEmail(value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" name='password' id="exampleFormControlInput1" onChange={(value) => this.handleChangePassword(value)}/>
                            </div>
                            <button type="button" className='btn btn-dark' onClick={() => this.handleSubmit()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
