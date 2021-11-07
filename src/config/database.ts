import { ConnectionOptions } from 'typeorm';

export const dbConfig: ConnectionOptions = {
    name: 'ho-api',
    type: 'mongodb',
    authSource: 'admin',
    database: 'baseapi',
    url: process.env.MONGO_CONNECTION_URL,
    entities: [
        'src/endpoints/v1/**/*.entity.ts',
        'src/library/database/entity/**/*.entity.ts',
        'endpoints/v1/**/*.entity.js',
        'library/database/entity/**/*.entity.js'
    ],
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
