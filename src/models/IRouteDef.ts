import { Method } from './EnumMethod';

export interface IRouteDef {
    path: string;
    requestMethod: Method;
    methodName: string | symbol; // Método da classe que vai ser executado na rota
}
