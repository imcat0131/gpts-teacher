// src/infrastructure/logger.ts
import winston from 'winston';
import path from 'path';

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
        winston.format.colorize({ all: true })
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export default logger;
