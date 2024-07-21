const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    comments: String,
    logDate: {
        required: true,
        type: String,
    },
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;