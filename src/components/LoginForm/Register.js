import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import LoginForm from './LoginForm';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;

        return (
            <div className="form-group" onSubmit={this.onSubmit}>
                <form className="text-center border order-light p-5">
                    <p className="h4 mb-4 text-primary">Sign UP</p>

                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" name="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})} />
                    <input type="password" name="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"onChange={e => this.setState({password: e.target.value})} />
                    <input type="password" name="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Confirm Password"onChange={e => this.setState({password: e.target.value})} />
                    <button className="btn btn-info btn-block my-4" type="submit">Login</button>

                    {isLoginPending && <div className="text-primary mb-3">Please wait...</div>}
                    {isLoginSuccess && <div className="text-success mb-3">successfully signed up...</div>}
                    {loginError && <div className="text-warning">Invalid All field must be filled ....</div>}

                    <p className="text-success mt-4">Already a member? <a href="/Register">Login</a></p>
                </form>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {email, password } = this.state;
        this.props.login(email, password);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
