import type { ObjectSchema, ValidationError } from "yup";
import type { ValidateOptions } from "yup/lib/types";
import type { ObjectShape } from "yup/lib/object";

const defaultOptions: ValidateOptions = {
  stripUnknown: true,
  abortEarly: false,
};

export const validate: Validator = async (
  schema,
  payload,
  options = defaultOptions
) => {
  try {
    const data = await schema.validate(payload, options);
    return { data, errors: null };
  } catch (error) {
    return { data: null, errors: normalizeErrors(error as ValidationError) };
  }
};

function normalizeErrors({ inner }: ValidationError) {
  return inner.reduce<Record<string, string[]>>((errors, current) => {
    const path = current.path || "message";
    errors[path] = current.errors;
    return errors;
  }, {});
}

type Validator = (
  schema: ObjectSchema<ObjectShape>,
  payload: unknown,
  options?: ValidateOptions
) => Promise<ValidatorReponse>;

type ValidatorReponse = {
  data: unknown | null;
  errors: Record<string, string[]> | null;
};
