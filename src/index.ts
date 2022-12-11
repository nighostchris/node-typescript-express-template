import express from 'express';

import env from './config/env.config.js';

const server = express();
const router = express.Router();

server.get('/', (req, res) => res.send('server online'));

server.listen(env.PORT, env.HOST, () => {
  console.log('Server running');
});
