import 'dotenv/config';

export const config = {
    app: {
        port: process.env.APP_PORT || 3000
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB_NAME || 'my_database'
    },
    mongodb: {
        cloud_uri: process.env.DB_CLOUD_URI,
        local_uri: process.env.LOCAL,
        host: process.env.DB_HOST ||'localhost',
        user: process.env.DB_USER ||'',
        password: process.env.DB_PASSWORD ||'',
        database: process.env.DB_DATABASE ||'',
        port: process.env ||27017
    }
};