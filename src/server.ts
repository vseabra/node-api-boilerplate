// Library
import { App, Logger } from './library';

// Config
import { dbConfig } from './config/database';
import { swaggerConfig } from './config/swagger';

// Endpoints
import { ClientController } from './modules/clients';

const app: App = new App({
    port: Number(process.env.PORT || 8080),
    controllers: [ClientController],
    middlewares: [Logger.middleware],
    logger: new Logger(),
    swaggerOptions: process.env.NODE_ENV === 'development' ? swaggerConfig : undefined,
    dbConfig
});

app.start();
