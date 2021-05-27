import { Schema, model } from 'mongoose';

const comidaSchema = new Schema(
	{
		idDiaSemanaDieta: {
			ref: 'DiaSemanaDieta',
			type: Schema.Types.ObjectId,
		},
		nombre: {
			type: String,
			required: true,
		},
		hora: {
			type: String,
			required: true,
		},
		proteinasComida: {
			type: Number,
			required: false,
		},
		chsComida: {
			type: Number,
			required: false,
		},
		grasasComida: {
			type: Number,
			required: false,
		},
		kcalComida: {
			type: Number,
			required: false,
		},
		detalleComida: [{}],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('Comida', comidaSchema);
