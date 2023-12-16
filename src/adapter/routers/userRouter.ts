import { Router } from 'express';
import { UserController } from '../controllers/userController';

export function getUserRoutes(userController: UserController): Router {
    const router = Router();
    router.get('/users/:id', (req, res) => userController.getUserById(req, res));
    return router;
}
