import { injectable, inject } from 'inversify';
import { IGetSubject } from '../../domain/interfaces/IGetSubject';
import { ISubjectRepository } from '../../domain/interfaces/ISubjectRepository';
import { Subject } from '../../domain/entities/subject';

@injectable()
export class GetSubject implements IGetSubject {
    constructor(@inject('ISubjectRepository') private userRepository: ISubjectRepository) {}

    async execute(id: string): Promise<Subject | null> {
        const user = await this.userRepository.findById(id);
        if (user === null) {
            // user not found
            return null;
        }
        return user;
    }
}
