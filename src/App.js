import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name &nbsp;</label>
              <input
                type="text"
                className="firstName"
                placeholder="First Name"
                name="First Name"
                noValidate
                onChange={this.handleSubmit}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name &nbsp;</label>
              <input
                type="text"
                className="lastName"
                placeholder="Last Name"
                name="Last Name"
                noValidate
                onChange={this.handleSubmit}
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                {" "}
                E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="email"
                className="email"
                placeholder="E-mail"
                name="email"
                noValidate
                onChange={this.handleSubmit}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password &nbsp;&nbsp;</label>
              <input
                type="password"
                className="password"
                placeholder="password"
                name="Password"
                noValidate
                onChange={this.handleSubmit}
              />
            </div>
            <div className="createAccount">
              <button type="submit"> Create Account </button>
              <small> Already Have An Account? </small>
              {/* <button type="submit"> Already Have an Account? </button> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
