import { Schema, model } from 'mongoose';

const alimentoSchema = new Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
		},
		grupoAlimento: {
			type: String,
		},
        proteinas: {
			type: Number,
		},
        carbohidratos: {
			type: Number,
		},
        grasas: {
			type: Number,
		},
        kcal: {
			type: Number,
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

export default model('Alimento', alimentoSchema);
