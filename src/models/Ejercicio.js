import { Schema, model } from 'mongoose';

const ejercicioSchema = new Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
		},
		grupoMuscular: {
			// type: [String],
			type: String,
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

export default model('Ejercicio', ejercicioSchema);
