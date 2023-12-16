// src/infrastructure/database/userRepositoryImpl.ts
import { injectable } from 'inversify';
import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/entities/user';

@injectable()
export class UserRepositoryImpl implements IUserRepository {
    async findById(id: string): Promise<User | null> {
        const user = await User.findByPk(id);
        return user;
    }
}
