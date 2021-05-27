import { Router } from 'express';
const router = Router();

import * as detalleEjercicioCtrl from '../controllers/detalleEjercicio.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', detalleEjercicioCtrl.getDetallesEjercicios);
router.get('/:detalleEjercicioId', detalleEjercicioCtrl.getDetalleEjercicioById);
router.get('/rutina/:diaSemanaRutinaId', detalleEjercicioCtrl.getDetallesEjerciciosByDiaSemanaRutinaId);

router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	detalleEjercicioCtrl.createDetalleEjercicio
);


router.delete(
	'/:detalleEjercicioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	detalleEjercicioCtrl.deleteDetalleEjercicioById
);

router.put(
	'/:detalleEjercicioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	detalleEjercicioCtrl.updateDetalleEjercicioById
);

export default router;
