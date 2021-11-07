// Modules
import { Request, Response, NextFunction } from 'express';

// Models
import { ILogger } from 'models';

/**
 * Logger
 *
 * Classe para tratamento de logs
 */
export class Logger implements ILogger {
    public static middleware(req: Request, _res: Response, next: NextFunction): void {
        const logger = new Logger();
        logger.log('\x1b[1m- Log ::\x1b[0m', 'Request:', req.method, req.path);
        next();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public log(...args: any[]): void {
        // eslint-disable-next-line no-console
        console.log(...args);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public error(...args: any[]): void {
        this.log('\x1b[31m ✖\x1b[0m \x1b[41m\x1b[37m\x1b[1m Error \x1b[0m\x1b[31m ::', ...args, '\x1b[0m');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public warning(...args: any[]): void {
        this.log('\x1b[33m ✖\x1b[0m \x1b[43m\x1b[30m\x1b[1m Warning \x1b[0m\x1b[33m ::', ...args, '\x1b[0m');
    }
}
