import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];

		// console.log(token);

		if (!token)
			return res.status(403).json({ message: 'No existe Token válido' });

		const decoded = jwt.verify(token, config.SECRET);
		req.UserId = decoded.id;

		const user = await User.findById(req.UserId, { password: 0 }).populate(
			'roles'
		);
		if (!user) return res.status(403).json({ message: 'No se encuentra el usuario' });

		next();
	} catch (error) {
		return res.status(401).json({ message: 'Acceso no autorizado' });
	}
};

export const isModerator = async (req, res, next) => {
	// buscamos de todos los roles aquellos en el k el id este incluido en user.roles[]
	const user = await User.findById(req.UserId);
	const roles = await Role.find({ _id: { $in: user.roles } });
	// console.log(roles);

	for (let i = 0; i < roles.length; i++) {
		if (roles[i].name === 'moderator') {
			next();
			return;
		}
	}

	return res.status(403).json({ message: 'Request moderator role' });
};

export const isAdmin = async (req, res, next) => {
	// buscamos de todos los roles aquellos en el k el id este incluido en user.roles[]
	const user = await User.findById(req.UserId);
	const roles = await Role.find({ _id: { $in: user.roles } });
	// console.log(roles);

	for (let i = 0; i < roles.length; i++) {
		if (roles[i].name === 'admin') {
			next();
			return;
		}
	}

	return res.status(403).json({ message: 'Request admin role' });
};
