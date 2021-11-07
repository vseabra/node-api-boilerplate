import { BaseRepository } from './BaseRepository';
import { Application } from '../entity/Application';

/**
 * ApplicationRepository
 *
 * Querys para tabela de application
 */
export class ApplicationRepository extends BaseRepository {
    /**
     * findCredential
     *
     * Busca uma aplicação
     * @param { string } id
     * @param { string } key
     * @return { Promise<Application | undefined> }
     */
    public async findCredential(id: string, key: string): Promise<Application | undefined> {
        const application = await this.getConnection().getRepository(Application).findOne(id);
        return application?.key === key ? application : undefined;
    }
}
