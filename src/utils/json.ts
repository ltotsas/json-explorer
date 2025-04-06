import { JSONObject, JSONValue } from '@/types/json.ts';

export const isPrimitive = (value: JSONValue | undefined): boolean => {
  return value === null || typeof value !== "object";
};

export const isArrayOfPrimitives = (value: string | number | null | JSONObject | JSONValue[] | undefined | boolean): boolean => {
  return Array.isArray(value) && value.every(isPrimitive);
};

export const resolvePath = (
  base: JSONValue,
  path: string
): JSONValue | undefined => {
  const cleanPath = path.replace(/^res\.?/, "");

  try {
    return cleanPath
      .split(/[\.\[\]]/)
      .filter(Boolean)
      .reduce<JSONValue | undefined>((acc, key) => {

        if (acc === undefined || acc === null) return undefined;
        if (Array.isArray(acc)) {
          const index = Number(key);
          return isNaN(index) ? undefined : acc[index];
        }

        if (typeof acc === "object") {
          return (acc as JSONObject)[key];
        }

        return undefined;
      }, base);
  } catch {
    return undefined;
  }
};
