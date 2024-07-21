const express = require('express');
const app = express();

const API_KEY = 'foo-bar';

app.get('/logs', async (req, res, next) => {
    return res.status(200).json({});
});

app.post('/log', async (req, res, next) => {
    try {
        if (req.get('X-API-KEY') !== API_KEY) {
            return res.status(401).json({errors: 'Unauthorized access'});
        } else {
            return res.status(200).json({});
        }
    } catch (error) {
        return res.status(500).json({errors: error});
    }
})

exports.app = app;