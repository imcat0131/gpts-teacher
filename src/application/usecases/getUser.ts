import { injectable, inject } from 'inversify';
import { IGetUser } from '../../domain/interfaces/IGetUser';
import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/entities/user';

@injectable()
export class GetUser implements IGetUser {
    constructor(@inject('IUserRepository') private userRepository: IUserRepository) {}

    async execute(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        if (user === null) {
            // user not found
            return null;
        }
        return user;
    }
}
