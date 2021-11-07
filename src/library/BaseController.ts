import { Request } from 'express';
import { IGetListParams } from '../models/IGetListParams';

/**
 * BaseController
 *
 * Classe base para os controllers
 */
export class BaseController {
    /**
     * listParams
     *
     * Retorna os parâmetros básicos para listagem
     *
     * @param req - Requisição
     *
     * @returns Objeto com os parâmetros
     */
    protected static listParams(req: Request): IGetListParams {
        const { page, size, group, groupBy } = req.query;

        return {
            page: page ? Number(page) : 1,
            size: size ? Number(size) : 10,
            order: group ? String(group) : undefined,
            orderBy: <'ASC' | 'DESC'>String(groupBy) || 'ASC'
        };
    }
}
