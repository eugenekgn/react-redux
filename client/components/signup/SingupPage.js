import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessage';
class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    );
  }
}


SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};


//Todo: fix this
export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);