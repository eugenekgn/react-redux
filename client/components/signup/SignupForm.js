import React, { Component } from 'react';
import timezones from '../../data/timezones';
import classnames from 'classnames';
import _ from 'lodash';


class SignupForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({
      errors: {},
      isLoading: true
    });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(() => {

    }, (err) =>
        this.setState({
          errors: err.response.data,
          isLoading: false
        })
    );
  }



  render() {
    const { errors } = this.state;
    const options = _.map(timezones, (value, key) => {
      return <option key={key} value={value}>{value}</option>
    });
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className={classnames("form-group", { 'has-error': errors.username })}>
          <label htmlFor="username" className="control-label">Username</label>
          <input type="text"
            value={this.state.username}
            onChange={this.onChange}
            name="username"
            className="form-control"
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>
        <div className={classnames("form-group", { 'has-error': errors.email })}>
          <label htmlFor="email" className="control-label">Email</label>
          <input type="text"
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            className="form-control"
          />
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>
        <div className={classnames("form-group", { 'has-error': errors.password })}>
          <label htmlFor="password" className="control-label">Password</label>
          <input type="password"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>
        <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
          <label htmlFor="passwordConfirmation" className="control-label">Password (Confirm)</label>
          <input type="password"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            name="passwordConfirmation"
            className="form-control"
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>
        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}>
            <option value="" disabled>Chose Your Timezone</option>
            {options}
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-large" disabled={this.state.isLoading}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;