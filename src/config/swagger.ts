import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerConfig: swaggerJSDoc.OAS3Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Helpper Origins API',
            version: '1.0.0'
        },
        host: 'localhost:4444',
        components: {
            securitySchemes: {
                BearerAuth: {
                    in: 'header',
                    type: 'http',
                    scheme: 'bearer'
                }
            }
        }
    },
    apis: ['src/library/third-party/swagger/**/*.ts', 'src/endpoints/**/*.ts']
};
