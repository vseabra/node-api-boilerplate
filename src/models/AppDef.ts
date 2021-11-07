import { Singleton } from '../decorators';
import { ILogger } from './ILogger';

@Singleton
export class AppDef {
    public logger: ILogger;

    constructor() {
        this.logger = {
            log: () => {
                // empty
            },
            error: () => {
                // empty
            },
            warning: () => {
                // empty
            }
        };
    }
}
