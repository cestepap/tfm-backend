import { Router } from 'express';
const router = Router();

import * as diasSemanaDietaCtrl from '../controllers/diaSemanaDieta.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', diasSemanaDietaCtrl.getDiasSemanaDieta);
router.get('/:diaSemanaDietaId', diasSemanaDietaCtrl.getDiaSemanaDietaById);
router.get('/dieta/:dietaId', diasSemanaDietaCtrl.getDiasSemanaDietaByDietaId);


router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	diasSemanaDietaCtrl.createDiaSemanaDieta
);


router.delete(
	'/:diaSemanaDietaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diasSemanaDietaCtrl.deleteDiaSemanaDietaById
);

router.put(
	'/update/:diaSemanaDietaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	diasSemanaDietaCtrl.updateDiaSemanaDietaById
);

export default router;
