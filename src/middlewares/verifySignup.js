import User from '../models/User';

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
	const user = await User.findOne({ username: req.body.username });

	if (user) return res.status(400).json({ message: 'El nombre de usario ya existe en el sistema' });

	const email = await User.findOne({ email: req.body.email });

	if (email) return res.status(400).json({ message: 'El email ya existe en el sistema' });

	next();
};
