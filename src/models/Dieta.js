import { Schema, model } from 'mongoose';

const dietaSchema = new Schema(
	{
		idCliente: {
			// para referenciar con el modelo User
			ref: 'User',
			type: Schema.Types.ObjectId,
		},
		idProfesional: {
			// para referenciar con el modelo User
			ref: 'User',
			type: Schema.Types.ObjectId,
		},
		titulo: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
		},
		fechaInicio: {
			type: String,
			required: true,
		},
		estado: {
			type: String,
			required: true,
		},
		proteinasTotalesSemana: {
			type: Number,
			default: 0
		},
        chsTotalesSemana: {
			type: Number,
			default: 0
		},
        grasasTotalesSemana: {
			type: Number,
			default: 0
		},
		kcalTotalesSemana: {
			type: Number,
			default: 0
		},
		diaSemanaDieta: [
			{
                type: String
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('Dieta', dietaSchema);
