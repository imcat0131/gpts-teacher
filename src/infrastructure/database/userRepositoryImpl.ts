// src/infrastructure/database/userRepositoryImpl.ts
import { injectable } from 'inversify';
import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/entities/user';

@injectable()
export class UserRepositoryImpl implements IUserRepository {

    async findById(id: string): Promise<User | null> {
        // データベースからユーザーを検索するロジック
        return new User(id, 'Example User'); // 仮の実装
    }
}
