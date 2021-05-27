import { Router } from 'express';
const router = Router();

import * as notaDiarioCtrl from '../controllers/notaDiario.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', notaDiarioCtrl.getDiario);
router.get('/:notaDiarioId', notaDiarioCtrl.getNotaDiarioById);
router.get('/diario/:diarioId', notaDiarioCtrl.getNotasDiarioByDiarioId);
router.post(
	'/',
	[
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	notaDiarioCtrl.createNotaDiario
);
router.delete(
	'/:notaDiarioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	notaDiarioCtrl.deleteNotaDiarioById
);

router.put(
	'/:notaDiarioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	notaDiarioCtrl.updateNotaDiarioById
);

export default router;
