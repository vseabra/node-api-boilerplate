// Libraries
import { BaseEntity, Connection, FindConditions, FindManyOptions, getConnection, ObjectID, Repository } from 'typeorm';

// Interfaces
import { EnumConstants } from '../../../models/EnumConstants';
import { IGetListParams } from '../../../models/IGetListParams';

/**
 * BaseRepository
 *
 * Classe que todo repositório estende
 */
export class BaseRepository {
    private connection: Connection;

    protected entity: typeof BaseEntity;

    /**
     * getConnection
     *
     * Retorna instância de conexão do banco
     * @return { Connection }
     */
    protected getConnection(): Connection {
        if (!this.connection) {
            this.connection = getConnection(EnumConstants.CONNECTION_NAME);
        }
        return this.connection;
    }

    /**
     * list
     *
     * Retorna lista de itens
     */
    public list(params: IGetListParams): Promise<[BaseEntity[], number]> {
        const skip: number = (params.page - 1) * params.size;
        const options: FindManyOptions<BaseEntity> = { take: params.size, skip };

        if (params.order) {
            options.order = { [params.order]: params.orderBy };
        }

        const repository: Repository<BaseEntity> = this.getConnection().getRepository(this.entity);
        return repository.findAndCount(options);
    }

    /**
     * findOne
     *
     * Busca um item por id
     * @param { string | number | ObjectID | Date } id
     * @return { Promise<any> } object group
     */
    public findOne(id: string | number | ObjectID | Date): Promise<any> {
        return this.getConnection().getRepository(this.entity).findOne(id);
    }

    /**
     * find
     *
     * Busca todos os itens que atenderem a condição
     *
     * @param { FindConditions<Entity> | undefined } options - Condições de busca
     *
     * @return { Promise<Entity[]> } Lista de itens
     */
    public find<Entity>(options?: FindConditions<Entity> | undefined): Promise<Entity[]> {
        return this.getConnection().getRepository<Entity>(this.entity).find(options);
    }
}
