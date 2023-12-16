import { Router } from 'express';
import { UserController } from '../controllers/userController';
import logger from '../../infrastructure/logging/logger';

export function getUserRoutes(userController: UserController): Router {
    const router = Router();
    logger.info('userController');
    router.get('/user/:id', (req, res) => userController.getUserById(req, res));
    return router;
}
