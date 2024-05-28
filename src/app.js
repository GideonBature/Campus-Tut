const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const connectDB = require('./config/db');
const { redisClient, getAsync, setAsync, delAsync } = require('./config/redis');

const authDoc = require('./documentation/authDoc');
const bookingDoc = require('./documentation/bookingDoc');
const courseDoc = require('./documentation/courseDoc');
const reviewDoc = require('./documentation/reviewDoc');
const tutorDoc = require('./documentation/tutorDoc');
const userDoc = require('./documentation/userDoc');

const app = express();

connectDB();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CampusTut API',
            version: '1.0.0',
            description: 'API documentation for the CampusTut application',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{
            bearerAuth: []
        }],
    },
    apis: ['./documentation/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.use((req, res, next) => {
    req.redisClient = redisClient;
    req.getAsync = getAsync;
    req.setAsync = setAsync;
    req.delAsync = delAsync;
    next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message });
});

module.exports = app;
