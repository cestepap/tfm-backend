import { Router } from 'express';
const router = Router();

import * as ejercicioCtrl from '../controllers/ejercicios.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', ejercicioCtrl.getEjercicios);
router.get('/:ejercicioId', ejercicioCtrl.getEjercicioById);

router.get('/grupo-muscular/:grupoMuscular', ejercicioCtrl.getEjercicioByGrupoMuscular);


router.post(
	'/',
	[
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	ejercicioCtrl.createEjercicio
);
router.delete(
	'/:ejercicioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	ejercicioCtrl.deleteEjercicioById
);

router.put(
	'/:ejercicioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	ejercicioCtrl.updateEjercicioById
);

export default router;
