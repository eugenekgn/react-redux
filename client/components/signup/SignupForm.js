import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import timezones from '../../data/timezones';
import classnames from 'classnames';
import _ from 'lodash';
import { validateInput } from '../../../common/validation/signup';
import TextField from '../common/TextField';

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
    this.isValid = this.isValid.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    //TODO: change this, don't like it
    if (!isValid) {
      this.setState({
        errors
      });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.userSignupRequest(this.state).then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You have signed up successfully. Welcome!'
        });
        browserHistory.push('/');
      }, (err) =>
          this.setState({
            errors: err.response.data,
            isLoading: false
          })
      );
    } else {
      console.log('validation failure')
    }
  }



  render() {
    const { errors } = this.state;
    const options = _.map(timezones, (value, key) => {
      return <option key={key} value={value}>{value}</option>
    });
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <TextField
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextField
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextField
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextField
          error={errors.passwordConfirmation}
          label="Password (Confirm)"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

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
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
};

export default SignupForm;