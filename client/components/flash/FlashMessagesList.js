import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessage';

class FlashMessageList extends Component {
	render() {
		const { deleteFlashMessage } = this.props;
		const messages = this.props.messages.map(message =>
			<FlashMessage
				key={message.id}
				message={message}
				deleteFlashMessage={deleteFlashMessage}
			/>
		);
		return (
			<div>
				{messages}
			</div>
		);
	}
}

FlashMessageList.protoTypes = {
	messages: React.PropTypes.array.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		messages: state.flashMessages
	}
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);