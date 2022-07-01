import React, { Component } from 'react';
import { loginService } from '../services/login';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: '',
            token: localStorage.getItem('token') || '',
            isLogin: false
        }
    }
    
    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        loginService(data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({
                    isLogin: true
                })
            })
    }

    handleLogout = () => {
        localStorage.clear();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.isLogin? 
                    <>
                        <div className='wrapper vh-100'>
                            <div className='d-flex h-100 justify-content-center align-items-center'>
                                <div className="card shadow w-50 px-5 py-5">
                                    <h1 className='mb-3'>Sign In</h1>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" name='email' id="exampleFormControlInput1" onChange={(value) => this.handleEmail(value)} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input type="password" class="form-control" name='password' id="exampleFormControlInput1" onChange={(value) => this.handlePassword(value)} />
                                    </div>
                                    <button type="button" className='btn btn-dark' onClick={() => this.handleSubmit()}>Sign Up</button>
                                </div>
                            </div>
                        </div>  
                    </>
                    :
                    <>
                        <button type='button' className='btn btn-dark' onClick={() => this.handleLogout()}>Logout</button>
                    </>
                }
            </div>
        );
    }
}

export default Login;
