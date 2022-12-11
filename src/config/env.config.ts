import { z } from 'zod';

const customNumberValidation = (envVarName: string) => z.preprocess((input) => {
  if (typeof input === 'string' && input.length < 1) return input;
  const processed = z.string().regex(/^\d+$/).min(1).transform(Number).safeParse(input);
  return processed.success ? processed.data : input;
}, z.number({
  required_error: 'POST is required',
  invalid_type_error: 'PORT must be of type number'
}).min(0, {
  message: `${envVarName} must be greater than 0`
}).max(65535, {
  message: `${envVarName} must be less than 65536`
}));

const schema = z.object({
  HOST: z.string({
    required_error: 'HOST is required'
  }).min(1).regex(/(\d+\.)+\d+/, {
    message: 'HOST must be a valid URL'
  }),
  PORT: customNumberValidation('PORT'),
});

const validatedEnv = schema.safeParse(process.env);

if (validatedEnv.success === false) {
  validatedEnv.error.errors.forEach((e) => console.error(e.message));
  process.exit(1);
}

export default validatedEnv.data;
