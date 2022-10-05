import { DB_HOST, DB_PORT, DB_DATABASE,DB_USER,DB_PASSWORD } from '@config';

export const dbConnection = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
