// src/adapter/controllers/userController.ts
import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { IGetUser } from '../../domain/interfaces/IGetUser';
import logger from '../../infrastructure/logging/logger';

@injectable()
export class UserController {
    constructor(@inject('IGetUser') private getUser: IGetUser) {}

    async getUserById(req: Request, res: Response) {
        logger.info("params id" + req.params.id)
        const user = await this.getUser.execute(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }

        return;
    }
}
