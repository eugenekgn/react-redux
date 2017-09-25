import React, { Component } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		console.log('onClick');
		this.props.deleteFlashMessage(this.props.message.id)
	}

	render() {
		const { id, type, text } = this.props.message;

		return (
			<div className={classnames('alert', {
				'alert-success': type === 'success',
				'alert-danger': type === 'error'
			})}>
				<button className="close"
					onClick={this.onClick}>
					<span>&times;</span>
				</button>
				{text}
			</div>
		);
	}
}

FlashMessage.protoTypes = {
	message: React.PropTypes.object.isRequired,
	deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;