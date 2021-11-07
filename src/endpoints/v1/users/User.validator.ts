// Libraries
import { RequestHandler } from 'express';
import { Schema } from 'express-validator';

// Repositories
import { UserRepository } from './User.repository';

// Validators
import { BaseValidator } from '../../../library/BaseValidator';

/**
 * UserValidator
 *
 * Classe de validadores para o endpoint de usuários
 */
export class UserValidator extends BaseValidator {
    /**
     * model
     *
     * Schema para validação no controller de usuários
     */
    private static model: Schema = {
        name: BaseValidator.validators.name
    };

    /**
     * post
     *
     * @returns { Array<RequestHandler> }
     */
    public static post(): Array<RequestHandler> {
        return UserValidator.validationList(UserValidator.model);
    }

    /**
     * put
     *
     * @returns { Array<RequestHandler> }
     */
    public static put(): Array<RequestHandler> {
        return UserValidator.validationList({
            id: BaseValidator.validators.id(new UserRepository()),
            ...UserValidator.model
        });
    }

    /**
     * onlyId
     *
     * @returns { Array<RequestHandler> }
     */
    public static onlyId(): Array<RequestHandler> {
        return BaseValidator.validationList({
            id: BaseValidator.validators.id(new UserRepository())
        });
    }
}
