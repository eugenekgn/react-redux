import React from 'react';
import classnames from 'classnames';

const TextField = ({ field, value, label, error, type, onChange, checkUserExists }) => {
	return (
		<div className={classnames("form-group", { 'has-error': error })}>
			<label
				htmlFor={field}
				className="control-label">{label}</label>
			<input
				className="form-control"
				type={type}
				onBlur={checkUserExists}
				onChange={onChange}
				value={value}
				name={field}
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
};

TextField.propTypes = {
	field: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	error: React.PropTypes.string,
	type: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	checkUserExists: React.PropTypes.func
};

TextField.defaultProps = {
	type: 'text'
};


export default TextField;