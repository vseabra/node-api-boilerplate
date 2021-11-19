// Modules
import { DeepPartial, DeleteResult, Repository } from 'typeorm';

// Entities
import { Client } from '../entity';

// Repositories
import { BaseRepository } from './BaseRepository';

/**
 * ClientRepository.
 * contém metodos para manipualão da tabela Client
 *
 * @extends {BaseRepository}
 */
export class ClientRepository extends BaseRepository {
    constructor() {
        super();
        this.entity = Client;
    }

    /**
     * insert.
     *
     * insere um novo cliente no banco de dados.
     *
     * @param client - objeto <Client>, com campos opcionais.
     * @returns Promise que resolve em um Client.
     */
    public insert(client: DeepPartial<Client>): Promise<Client> {
        const clientRepository: Repository<Client> = this.getConnection().getRepository(Client);
        return clientRepository.save(clientRepository.create(client));
    }

    /**
     * update.
     *
     * atualiza um cliente no banco de dados.
     *
     * @param client - objeto <Client>, com campos opcionais.
     * @returns Promise que resolve em um Client.
     */
    public update(client: DeepPartial<Client>): Promise<Client> {
        return this.getConnection().getRepository(Client).save(client);
    }

    /**
     * delete.
     *
     * deleta um cliente no banco de dados.
     *
     * @param id - id do cliente.
     * @returns resultado da deleleção (<DeleteResult>)
     */
    public delete(id: string): Promise<DeleteResult> {
        return this.getConnection().getRepository(Client).delete(id);
    }

    /**
     * findByName.
     *
     * busca um cliente pelo nome.
     *
     * @param name - nome do client.
     * @returns Promise que resolve em um Client, ou undefined.
     */
    public findByName(name: string): Promise<Client | undefined> {
        return this.getConnection().getRepository(Client).findOne({ name });
    }
}
