// Modules
// import { DeepPartial } from 'typeorm';
import { Request, Response } from 'express';

// Library
import { BaseController } from '../../../library';

// Decorators
import { Controller, Delete, Get, Middlewares, Post, PublicRoute, Put } from '../../../decorators';

// Models
import { EnumEndpoints } from '../../../models';

// Routes
import { RouteResponse } from '../../../routes';

// Entities
import { Client } from '../../../library/database/entity';

// Repositories
import { ClientRepository, UserRepository } from '../../../library/database/repository';

// Validators
// import { ClientValidator } from '../middlewares/ClientValidator';

@Controller(EnumEndpoints.CLIENT)
export class ClientController extends BaseController {
    /**
     * @swagger
     * /clients:
     *   get:
     *     summary: retorna todos os clientes.
     *     tags: [Users]
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - $ref: '#/components/parameters/listPageRef'
     *       - $ref: '#/components/parameters/listSizeRef'
     *       - $ref: '#/components/parameters/listOrderRef'
     *       - $ref: '#/components/parameters/listOrderByRef'
     *     responses:
     *       $ref: '#/components/responses/baseResponse'
     */
    @Get()
    @PublicRoute()
    public async getAll(req: Request, res: Response): Promise<void> {
        const [rows, count] = await new ClientRepository().list<Client>(ClientController.listParams(req));
        RouteResponse.success({ rows, count }, res);
    }
}
