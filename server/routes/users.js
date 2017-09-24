import express from 'express';
import { validateInput } from '../../common/validation/signup';

const router = express.Router();

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);
	if (isValid) {
		res.json({ success: true })
	} else {
		res.status(400).json(errors);
	}
});

export default router;