import { Router } from 'express';
const router = Router();

import * as diarioCtrl from '../controllers/diario.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', diarioCtrl.getDiario);
router.get('/:diarioId', diarioCtrl.getDiarioById);
router.get('/user/:userId', diarioCtrl.getDiarioByUserId);

router.post(
	'/',
	[
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	diarioCtrl.createDiario
);
router.delete(
	'/:diarioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diarioCtrl.deleteDiarioById
);

router.put(
	'/:diarioId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diarioCtrl.updateDiarioById
);

export default router;
