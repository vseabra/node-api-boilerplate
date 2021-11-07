import 'reflect-metadata';
import { EnumDecorators } from '../models/EnumDecorators';

export const Middlewares = (...args: any[]): any => {
    return (target: any, propertyKey: string | symbol): void => {
        const middlewares: any = Reflect.getMetadata(EnumDecorators.MIDDLEWARE, target.constructor) || {};

        middlewares[propertyKey] = [];
        args.forEach(item => {
            const data: Array<any> = Array.isArray(item) ? item : [item];
            middlewares[propertyKey] = middlewares[propertyKey].concat(...data);
        });

        Reflect.defineMetadata(EnumDecorators.MIDDLEWARE, middlewares, target.constructor);
    };
};
