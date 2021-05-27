import User from '../models/User';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const signup = async (req, res) => {
	const { username, email, password, rol } = req.body;

	// const userFound = User.find({email})

	const newUser = new User({
		username,
		email,
		password: await User.encryptPassword(password),
		rol,
	});

	// con el initialSetup cargamos los roles de la app
	// si al crear un usuario le determinamos el/los roles se le asignan
	// sino se le asigna el rol por defecto user

	// if (rol) {
	// 	const foundRoles = await Role.find({ name: { $in: roles } });
	// 	newUser.roles = foundRoles.map((role) => role._id);
	// } else {
	// 	const role = await Role.findOne({ name: 'user' });
	// 	newUser.roles = [role._id];
	// }

	const savedUser = await newUser.save();
	console.log(savedUser);

	// permite crear un token. se le pasa el dato para generar el token, por lo general el id
	// y una palabra secreta que traemos del config.
	// el expiresIn es cuando cadua --> 1 dia

	const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
		expiresIn: 86400,
	});

	// res.status(200).json({ token });

	if (!savedUser)
		return res
			.status(400)
			.json({ message: 'Error durante el proceso' });
	else {
		res.status(200).json({ token, savedUser });
	}
};

export const signin = async (req, res) => {
	// no queremos devolver los roles en formato de id, que lo guardado en la collection User
	// populate sirve para recorrer un array y llenarlo del contenido de su collection referenciada

	// const userFound = await await User.findOne({
	// 	email: req.body.email,
	// }).populate('rol');

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
	// res.json({ token, user: userFound });
};
