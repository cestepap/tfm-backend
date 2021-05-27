import { Router } from 'express';
const router = Router();

import * as dietaCtrl from '../controllers/dietas.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', dietaCtrl.getDietas);
router.get('/:dietaId', dietaCtrl.getDieta);

router.get('/ep/:_idEP', dietaCtrl.getDietasByIdEP);
router.get('/user/:_idCliente', dietaCtrl.getDietasByIdCliente);


router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	dietaCtrl.createDieta
);


router.delete(
	'/:dietaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	dietaCtrl.deleteDietaById
);

router.put(
	'/update/:dietaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	dietaCtrl.updateDietaById
);

export default router;
