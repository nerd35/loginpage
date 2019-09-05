import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import './LoginForm.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        let {email, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;

        return (
            <div className="form-group" onSubmit={this.onSubmit}>
                <form className="text-center border order-light p-5 formfield formsection mx-auto">
                    <p className="h4 mb-4 text-white">Login Here</p>

                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4 inputfield mx-auto" name="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})} />
                    <input type="password" name="password" id="defaultLoginFormPassword" className="form-control mb-4 inputfield mx-auto" placeholder="Password"onChange={e => this.setState({password: e.target.value})} />
                    <button className="btn btn-info btn-block my-4 inputfieldbtn mx-auto" type="submit">Login</button>

                    {isLoginPending && <div className="text-warning mb-3">Please wait...</div>}
                    {isLoginSuccess && <div className="text-light mb-3">successfully Logged in...</div>}
                    {loginError && <div className="text-warning">Invalid Email and Password ....</div>}

                    <p className="text-white mt-4">Not a member? <a href="/Register" className="text-light registerText">Register</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
