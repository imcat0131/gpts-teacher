// src/main/dependencyInjector.ts
import { Container } from 'inversify';
import 'reflect-metadata';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { UserRepositoryImpl } from '../infrastructure/database/userRepositoryImpl';
import { IGetUser } from '../domain/interfaces/IGetUser';
import { GetUser } from '../application/usecases/getUser';
import { UserController } from '../adapter/controllers/userController';

const container = new Container();
container.bind<IUserRepository>('IUserRepository').to(UserRepositoryImpl);
container.bind<IGetUser>('IGetUser').to(GetUser);
container.bind<UserController>('UserController').to(UserController);

export { container };
