import { Method } from './EnumMethod';

export interface IRouteDef {
    path: string;
    requestMethod: Method;
    methodName: string | symbol;
}
