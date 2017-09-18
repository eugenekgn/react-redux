import React, {Component} from 'react';
import timezones from '../../data/timezones';
import _ from 'lodash';


class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }


  render() {
    const options = _.map(timezones, (value, key) => {
      return <option key={key} value={value}>{value}</option>
    });
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label htmlFor="username" className="control-label">Username</label>
          <input type="text"
                 value={this.state.username}
                 onChange={this.onChange}
                 name="username"
                 className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="control-label">Email</label>
          <input type="text"
                 value={this.state.email}
                 onChange={this.onChange}
                 name="email"
                 className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="control-label">Password</label>
          <input type="password"
                 value={this.state.password}
                 onChange={this.onChange}
                 name="password"
                 className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation" className="control-label">Password (Confirm)</label>
          <input type="password"
                 value={this.state.passwordConfirmation}
                 onChange={this.onChange}
                 name="passwordConfirmation"
                 className="form-control"
          />
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
          <button className="btn btn-primary btn-large">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default SignUpForm;