// src/main/dependencyInjector.ts
import { Container } from 'inversify';
import 'reflect-metadata';

const container = new Container();

// user
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { UserRepositoryImpl } from '../infrastructure/database/userRepositoryImpl';
import { IGetUser } from '../domain/interfaces/IGetUser';
import { GetUser } from '../application/usecases/getUser';
import { UserController } from '../adapter/controllers/userController';
container.bind<IUserRepository>('IUserRepository').to(UserRepositoryImpl);
container.bind<IGetUser>('IGetUser').to(GetUser);
container.bind<UserController>('UserController').to(UserController);

// subject
import { ISubjectRepository } from '../domain/interfaces/ISubjectRepository';
import { SubjectRepositoryImpl } from '../infrastructure/database/subjectRepositoryImpl';
import { IGetSubject } from '../domain/interfaces/IGetSubject';
import { GetSubject } from '../application/usecases/getSubject';
import { SubjectController } from '../adapter/controllers/subjectController';
container.bind<ISubjectRepository>('ISubjectRepository').to(SubjectRepositoryImpl);
container.bind<IGetSubject>('IGetSubject').to(GetSubject);
container.bind<SubjectController>('SubjectController').to(SubjectController);


export { container };
