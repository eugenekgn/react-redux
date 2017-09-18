import React, {Component} from 'react';
import SignupForm from './SignupForm.js';

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm/>
        </div>
      </div>
    );
  }
}


SignUpForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupPage;