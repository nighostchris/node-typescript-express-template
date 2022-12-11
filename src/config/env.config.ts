import { z } from 'zod';

import { customBooleanValidation, customNumberValidation, customStringValidation } from '../utils/env.utils.js';

const schema = z.object({
  HOST: customStringValidation('HOST'),
  PORT: customNumberValidation('PORT'),
  DB_ENABLE: customBooleanValidation('DB_ENABLE'),
  DB_HOST: customStringValidation('DB_HOST').optional(),
  DB_PORT: customNumberValidation('DB_PORT').optional(),
  DB_USER: customStringValidation('DB_USER').optional(),
  DB_PASSWORD: customStringValidation('DB_PASSWORD').optional(),
  DB_DATABASE: customStringValidation('DB_DATABASE').optional()
});

const validatedEnv = schema.safeParse(process.env);

if (validatedEnv.success === false) {
  validatedEnv.error.errors.forEach((e) => console.error(e.message));
  process.exit(1);
}

export default validatedEnv.data;
