import { z } from 'zod';

export const customStringValidation = (envVarName: string) => z.string({
  required_error: `${envVarName} is required`
}).min(1);

export const customNumberValidation = (envVarName: string) => z.preprocess((input) => {
  if (typeof input === 'string' && input.length < 1) return input;
  const processed = z.string().regex(/^\d+$/).transform(Number).safeParse(input);
  return processed.success ? processed.data : input;
}, z.number({
  required_error: `${envVarName} is required`,
  invalid_type_error: `${envVarName} must be of type number`
}).min(0, {
  message: `${envVarName} must be greater than 0`
}).max(65535, {
  message: `${envVarName} must be less than 65536`
}));

export const customBooleanValidation = (envVarName: string) => z.preprocess((input) => {
  if (typeof input === 'string' && input.length < 1) return input;
  if (typeof input === 'string' && input !== 'true' && input !== 'false') return input;
  return input === 'true' ? true : false;
}, z.boolean({
  required_error: `${envVarName} is required`,
  invalid_type_error: `${envVarName} must be of type boolean`
}));
