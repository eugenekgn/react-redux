import express from 'express';
import { validateInput } from '../../common/validation/signup';
import bcrypt from 'bcrypt';
import { isEmpty } from 'lodash';

import User from '../models/user';

const router = express.Router();

const validateUser = (data, otherValidations) => {

	const { errors } = otherValidations(data);
	return Promise.all([
		User.where({ email: data.email }).fetch().then(user => {
			if (user) { errors.email = 'There is user with such email' }
		}),
		User.where({ username: data.username }).fetch().then(user => {
			if (user) { errors.username = 'There is user with such username' }
		})
	]).then(() => {
		return {
			errors,
			isValid: isEmpty(errors)
		}
	})
};

router.post('/', (req, res) => {
	return validateUser(req.body, validateInput)
		.then(({ errors, isValid }) => {
			if (isValid) {
				const { username, password, timezone, email } = req.body;
				const password_digest = bcrypt.hashSync(password, 10);

				User.forge({
					username, timezone, email, password_digest
				}, {
						hasTimestamps: true
					})
					.save()
					.then(() => res.json({ success: true }))
					.catch(err => res.status(500).json({ error: err }))

			} else {
				res.status(400).json(errors);
			}
		})
});

export default router;