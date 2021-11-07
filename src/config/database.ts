import { ConnectionOptions } from 'typeorm';

export const dbConfig: ConnectionOptions = {
    name: 'ho-api',
    type: 'mongodb',
    authSource: 'admin',
    database: 'ho-database',
    url: process.env.MONGO_CONNECTION_URL,
    entities: ['src/library/database/entity/**/*.ts', 'library/database/entity/**/*.js'],
    migrations: ['migrations/seeds/*.ts'],
    cli: {
        migrationsDir: 'migrations/seeds'
    },
    useUnifiedTopology: true,
    useNewUrlParser: true,
    migrationsRun: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    synchronize: true
};
