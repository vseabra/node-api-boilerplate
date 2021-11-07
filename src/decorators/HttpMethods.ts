// Modules
import 'reflect-metadata';

// Models
import { Method, IRouteDef, EnumDecorators } from 'models';

const routeAdd = (method: Method, path: string): MethodDecorator => {
    return (target: any, propertyKey: string | symbol): void => {
        if (!Reflect.hasMetadata(EnumDecorators.ROUTES, target.constructor)) {
            Reflect.defineMetadata(EnumDecorators.ROUTES, [], target.constructor);
        }

        const routes = Reflect.getMetadata(EnumDecorators.ROUTES, target.constructor) as IRouteDef[];

        routes.push({
            requestMethod: method,
            path,
            methodName: propertyKey
        });

        Reflect.defineMetadata(EnumDecorators.ROUTES, routes, target.constructor);
    };
};

export const Get = (path = ''): MethodDecorator => routeAdd(Method.GET, path);
export const Post = (path = ''): MethodDecorator => routeAdd(Method.POST, path);
export const Put = (path = ''): MethodDecorator => routeAdd(Method.PUT, path);
export const Patch = (path = ''): MethodDecorator => routeAdd(Method.PATCH, path);
export const Delete = (path = ''): MethodDecorator => routeAdd(Method.DELETE, path);
