// Libraries
import { RequestHandler } from 'express';
import { Schema } from 'express-validator';

// Repositories
import { ClientRepository } from '../../../library/database/repository';

// Validators
import { BaseValidator } from '../../../library/BaseValidator';

// Entities
import { Client } from '../../../library/database/entity';

/**
 * ClientValidator.
 *
 * possui validaadores para o endpoint dos clientes
 * @extends {BaseValidator}
 */
export class ClientValidator extends BaseValidator {
    private static model: Schema = {
        name: BaseValidator.validators.name,
        id: {
            ...BaseValidator.validators.id(new ClientRepository()),
            errorMessage: 'cliente não encontrado'
        },
        duplicate: {
            errorMessage: 'usuario já existe',
            custom: {
                options: async (_: string, { req }) => {
                    let check = false;

                    // TODO validar os outros campos, fora name.
                    if (req.body.name) {
                        const clientRepository: ClientRepository = new ClientRepository();
                        const client: Client | undefined = await clientRepository.findByName(req.body.name);

                        check = client ? req.body.id === client.id.toString() : true;
                    }

                    return check ? Promise.resolve() : Promise.reject();
                }
            }
        }
    };

    /**
     * post
     *
     * @returns Lista de validadores
     */
    public static post(): RequestHandler[] {
        return ClientValidator.validationList({
            name: ClientValidator.model.name,
            duplicate: ClientValidator.model.duplicate
        });
    }

    /**
     * put
     *
     * @returns Lista de validadores
     */
    public static put(): RequestHandler[] {
        return ClientValidator.validationList({
            id: ClientValidator.model.id,
            ...ClientValidator.model
        });
    }

    /**
     * onlyId
     *
     * @returns Lista de validadores
     */
    public static onlyId(): RequestHandler[] {
        return BaseValidator.validationList({
            id: ClientValidator.model.id
        });
    }
}
