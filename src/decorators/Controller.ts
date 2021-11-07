import 'reflect-metadata';
import { EnumDecorators } from '../models/EnumDecorators';

export const Controller = (prefix = ''): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata(EnumDecorators.CONTROLLER_PREFIX, prefix, target);

        if (!Reflect.hasMetadata(EnumDecorators.ROUTES, target)) {
            Reflect.defineMetadata(EnumDecorators.ROUTES, [], target);
        }
    };
};
