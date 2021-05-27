import { Schema, model } from 'mongoose';

const diaSemanaDietaSchema = new Schema(
	{
		idDieta: {
			ref: 'Dieta',
			type: Schema.Types.ObjectId,
		},
		nombre: {
			type: String,
			required: true,
		},
		descripcion: {
			type: String,
			required: true,
		},
        proteinasTotalesDia: {
			type: String,
			default: ""
		},
        chsTotalesDia: {
			type: String,
			default: ""
		},
        grasasTotalesDia: {
			type: String,
			default: ""
		},
		kcalTotalesDia: {
			type: String,
			default: ""
		},
		comida: [
			{
				type: String,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('DiaSemanaDieta', diaSemanaDietaSchema);
