const redis = require('redis');
const { redis_uri } = require('./config');

const redisClient = redis.createClient(redis_uri);

redisClient.on('connect', () => {
    console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
});

module.exports = redisClient;