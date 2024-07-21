const LogEntry = require('../model/log_entry');

exports.addLog = async function (log) {
    const logEntry = new LogEntry(log);
    await logEntry.save();
}

exports.getLogs = async function () {
    return LogEntry.find();
}