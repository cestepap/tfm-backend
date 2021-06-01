import User from '../models/User';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import config from '../config';

export const signup = async (req, res) => {
	const { username, email, password, rol } = req.body;

	const newUser = new User({
		username,
		email,
		password: await User.encryptPassword(password),
		rol,
	});

	const savedUser = await newUser.save();
	console.log(savedUser);

	// permite crear un token, pasando el id
	// y una palabra secreta que traemos del fichero config.
	// el expiresIn es cuando caduca --> 1 dia

	const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
		expiresIn: 86400,
	});

	if (!savedUser)
		return res
			.status(400)
			.json({ message: 'Error durante el proceso' });
	else {
		res.status(200).json({ token, savedUser });
	}
};

export const signin = async (req, res) => {

	const userFound = await await User.findOne({
		email: req.body.email,
	});

	if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' });

	const matchPassword = await User.comparePassword(
		req.body.password,
		userFound.password
	);

	if (!matchPassword)
		return res.status(400).json({
			token: null,
			message: 'Password incorrecto',
			user: userFound,
			reqbody: req.body.password,
			userfound: userFound.password,
		});

	const token = jwt.sign({ id: userFound._id }, config.SECRET, {
		expiresIn: 86400,
	});

	userFound.password = null;
	res.json({ token, userFound });
};
