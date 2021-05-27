import { Router } from 'express';
const router = Router();

import * as comidasCtrl from '../controllers/comida.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', comidasCtrl.getComidas);
router.get('/:comidaId', comidasCtrl.getComidaById);
router.get('/diaSemanaDieta/:diaSemanaDietaId', comidasCtrl.getComidasByDiaSemanaDietaId);


router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	comidasCtrl.createComida
);


router.delete(
	'/:comidaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	comidasCtrl.deleteComidaById
);

router.put(
	'/:comidaId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	comidasCtrl.updateComidaById
);

export default router;
