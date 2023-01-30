const { format, createLogger, transports } = require("winston");

const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ message, label, timestamp }) => {
    return `${timestamp} [${label}]: ${message}`;
});

const logger = (category) => {
    return createLogger({
        level: "debug",
        format: combine(label({label: category}), timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), customFormat),
        transports: [new transports.Console()],
    });
}

module.exports = logger;