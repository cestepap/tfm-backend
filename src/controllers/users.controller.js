import User from '../models/User';

export const getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

export const getUsersByRole = async (req, res) => {
    const {rol} = req.params;
	const users = await User.find( {"rol": rol})
	res.json(users);
};

export const createUser = async (req, res) => {
	// res.json('creating user');

	const {username, email, password, role, imagen} = req.body;
    const newUser = new User( {username, email, password, role, imagen});
    const userSaved = await newUser.save();

    //codigos de estado. estado 201 nuevo recurso se ha creado
    res.status(201).json(userSaved);

};

export const deleteUserById = async (req, res) => {
    const {userId} = req.params;
    const deletedUser = await User.findByIdAndDelete(userId)
    console.log(deletedUser);
    res.status(204).json(deletedUser)
};

export const updateUserById = async (req, res) => {
    // el new: true es para que el findByIdAndUpdate devuelva el objeto con los datos ya actualizados
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
	console.log(req.body);
    res.status(200).json(updatedUser);
};