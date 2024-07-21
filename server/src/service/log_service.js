const LogEntry = require('../model/log_entry');

exports.logService = async function (log) {
    const logEntry = new LogEntry(log);
    await logEntry.save();
    console.log(logEntry);
}