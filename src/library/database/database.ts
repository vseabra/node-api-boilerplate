import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { EnumConstants } from '../../models/EnumConstants';

/**
 * Database
 *
 * Gerencia a conexão com o banco de dados
 */
export class Database {
    /**
     * connect
     *
     * Retorna conexão com o banco de dados e em caso de erro o servidor inicia
     *
     * @param connectionOptions - Opções para conexão
     *
     * @returns Instância de conexão
     */
    public static async connect(connectionOptions: ConnectionOptions): Promise<Connection> {
        const customConfig: ConnectionOptions = {
            ...connectionOptions,
            name: EnumConstants.CONNECTION_NAME
        };

        return createConnection(customConfig);
    }
}
