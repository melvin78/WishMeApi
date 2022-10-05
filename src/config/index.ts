// import { config } from 'dotenv';
// config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE,DB_PASSWORD, SECRET_KEY, DB_USER,LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
