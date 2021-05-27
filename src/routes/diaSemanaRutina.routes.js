import { Router } from 'express';
const router = Router();

import * as diasSemanaRutinaCtrl from '../controllers/diaSemanaRutina.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', diasSemanaRutinaCtrl.getDiasSemanaRutina);
router.get('/:diaSemanaRutinaId', diasSemanaRutinaCtrl.getDiaSemanaRutinaById);
router.get(
	'/rutina/:rutinaId',
	diasSemanaRutinaCtrl.getDiasSemanaRutinaByRutinaId
);

router.post(
	'/',
	[
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	diasSemanaRutinaCtrl.createDiaSemanaRutina
);

router.delete(
	'/:diaSemanaRutinaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diasSemanaRutinaCtrl.deleteDiaSemanaRutinaById
);

router.put(
	'/update/:diaSemanaRutinaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diasSemanaRutinaCtrl.updateDiaSemanaRutinaById
);

export default router;
