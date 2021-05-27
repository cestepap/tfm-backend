import { Schema, model } from 'mongoose';

const detalleComidaSchema = new Schema(
	{
		idComida: {
			// para referenciar con el modelo DiaSemanaRutina
			ref: 'Comida',
			type: Schema.Types.ObjectId,
		},
		idAlimento: {
			// para referenciar con el modelo Alimento
			ref: 'Alimento',
			type: Schema.Types.ObjectId,
		},
		cantidad: {
			type: Number,
			required: true,
		},
		proteinasDetalleComida: {
			type: Number,
			required: true,
		},
		chsDetalleComida: {
			type: Number,
			required: true,
		},
		grasasDetalleComida: {
			type: Number,
			required: true,
		},
		kcalDetalleComida: {
			type: Number,
			required: true,
		},
		observaciones: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export default model('DetalleComida', detalleComidaSchema);
