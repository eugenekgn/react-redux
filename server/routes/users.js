import express from 'express';
import Validator from 'validator';
import { isEmpty } from 'lodash';

const router = express.Router();

const validateInput = data => {

	const errors = {};

	if (Validator.isNull(data.username)) {
		errors.username = 'This field is required';
	}

	if (Validator.isNull(data.email)) {
		errors.email = 'This field is required';
	}

	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email field is required';
	}

	if (Validator.isNull(data.password)) {
		errors.password = 'This field is required';
	}

	if (Validator.isNull(data.passwordConfirmation)) {
		errors.passwordConfirmation = 'This field is required';
	}

	if (!Validator.equals(data.password, data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Passwords must match';
	}


	if (Validator.isNull(data.timezone)) {
		errors.timezone = 'This field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);
	if (!isValid) {
		res.status(400).json(errors);
	}
});

export default router;