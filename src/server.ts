// Library
import { App } from './library';

// Config
import { dbConfig } from './config/database';
import { swaggerConfig } from './config/swagger';

// Middlewares
import { Logger } from './middlewares/Logger';

// Endpoints
import { UserController } from './modules/users/v1/controllers/UserController';

const app: App = new App({
    port: Number(process.env.PORT || 8080),
    controllers: [UserController],
    middlewares: [Logger.middleware],
    logger: new Logger(),
    swaggerOptions: process.env.NODE_ENV === 'development' ? swaggerConfig : undefined,
    dbConfig
});

app.start();
