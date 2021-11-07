import { DeepPartial, DeleteResult } from 'typeorm';
import { User } from './User.entity';
import { BaseRepository } from '../../../library/database/repository/BaseRepository';

/**
 * UserRepository
 *
 * Querys para tabela de usuários
 */
export class UserRepository extends BaseRepository {
    constructor() {
        super();
        this.entity = User;
    }

    /**
     * insert
     *
     * Cria um novo usuário
     * @param { DeepPartial<User> } user
     * @return { Promise<User> }
     */
    public insert(user: DeepPartial<User>): Promise<User> {
        const userRepository = this.getConnection().getRepository(User);
        return userRepository.save(userRepository.create(user));
    }

    /**
     * update
     *
     * Altera um usuário
     * @param { User } user
     * @return { Promise<User> }
     */
    public update(user: User): Promise<User> {
        return this.getConnection().getRepository(User).save(user);
    }

    /**
     * delete
     *
     * Remove um usuário pelo id
     * @param { string } id
     * @return { Promise<DeleteResult> }
     */
    public delete(id: string): Promise<DeleteResult> {
        return this.getConnection().getRepository(User).delete(id);
    }

    /**
     * findByName
     *
     * Busca um usuário pelo name
     * @param { string } name - Nome é chave única
     * @return { Promise<User | undefined> }
     */
    public findByName(name: string): Promise<User | undefined> {
        return this.getConnection().getRepository(User).findOne({ name });
    }
}
