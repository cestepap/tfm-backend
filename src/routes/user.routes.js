import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/users.controller';
import { authJwt, verifySignup } from '../middlewares';

router.get('/', userCtrl.getUsers);
router.get('/rol/:rol', userCtrl.getUsersByRole);

router.post(
	'/',
	[
		
		// [authJwt.verifyToken, authJwt.isAdmin],
		// verifySignup.checkDuplicateUsernameOrEmail,
	],
	userCtrl.createUser
);
router.delete(
	'/:userId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	userCtrl.deleteUserById
);

router.put(
	'/:userId',
	// [authJwt.verifyToken, authJwt.isAdmin],
	userCtrl.updateUserById
);

export default router;
