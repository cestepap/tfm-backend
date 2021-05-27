import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		rol: {
			// [
			// {
			// 	// para referenciar con el modelo roles y asignar los id dentro de un array
			// 	ref: 'Role',
			// 	type: Schema.Types.ObjectId,
			// },
			// ],
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: false,
		},
		imagen: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

//static llamar un metodo sin necesidad de instanciarlo
//metodo para cifrar
userSchema.statics.encryptPassword = async (password) => {
	//manera de aplicar el algoritmo, 10 es lo habitual.
	const salt = await bcrypt.genSalt(10);
	// crear contraseña cifrada
	return await bcrypt.hash(password, salt);
};

//metodo para comparar contraseñas
userSchema.statics.comparePassword = async (password, recievedPassword) => {
	//devuelve true si las contraseñas coinciden

	return await bcrypt.compare(password, recievedPassword);
};

export default model('User', userSchema);
