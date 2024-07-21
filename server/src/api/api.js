const express = require('express');
const app = express();
const {validationResult, body, matchedData} = require('express-validator');
const bodyParser = require('body-parser');

const LogService = require('../service/log_service')

const API_KEY = 'foo-bar';

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({  extended: true }));

// Validation of incoming log request
const checkTitle = () => body('title').trim().notEmpty();
const checkLogDate = () => body('logDate').trim().notEmpty();

app.get('/logs', async (req, res, next) => {
    const logs = await LogService.getLogs();
    return res.status(200).json({logs});
});

app.post('/log', checkTitle(), checkLogDate(), async (req, res, next) => {
    try {
        if (req.get('X-API-KEY') !== API_KEY) {
            // No API key on request, unauthorized
            return res.status(401).json({errors: 'Unauthorized access'});
        } else {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                // Incoming log entry request failed validation checks
                return res.status(400).json({errors: errors.array()});
            }

            await LogService.addLog(matchedData(req));
            return res.status(200).json({});
        }
    } catch (error) {
        return res.status(500).json({errors: error});
    }
})

exports.app = app;