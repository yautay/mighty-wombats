import winston from "winston";
import path from "path";
import fs from "fs";

const logDir = "log"

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

winston.loggers.add(
    'vuex',
    {
        format: winston.format.combine(
            winston.format.label({label: 'vuex'}),
            winston.format.timestamp(),
            winston.format.prettyPrint()
        ),
        'transports': [
            new winston.transports.Console(
                {
                    colorize: 'all'
                }
            ),
            new winston.transports.File({filename: path.join(logDir, '/error.log'), level: 'error'}),
            new winston.transports.File({filename: path.join(logDir, '/debug.log'), level: 'debug'}),
            new winston.transports.File({filename: path.join(logDir, '/combined.log')}),
        ]
    });

export const vuexLogger = winston.loggers.get('vuex')
