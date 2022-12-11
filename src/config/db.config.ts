import pkg from 'knex';
const { knex } = pkg;
import { checkHeartbeat } from 'knex-utils';

import env from './env.config.js';

const db = knex({
  client: 'pg',
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
  },
});

if (env.DB_ENABLE) {
  const { isOk, error } = await checkHeartbeat(db);
  if (isOk === false && typeof error !== 'undefined') {
    console.error(error);
    process.exit(1);
  }
}

export default db;
