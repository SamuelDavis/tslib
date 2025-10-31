export function assert<T, Args extends any[]>(
  guard: (value: unknown, ...args: Args) => value is T,
  value: unknown,
  ...args: Args
): asserts value is T {
  if (!guard(value, ...args)) throw new TypeError();
}

export function isInstanceOf<T>(
  value: unknown,
  ctor: new (...args: any[]) => T,
): value is T {
  return value instanceof ctor;
}

export function isValueOf<T>(
  value: any,
  other: T[] | Record<string | number | symbol, T>,
): value is T {
  return Array.isArray(other)
    ? other.includes(value)
    : Object.values(other).includes(value);
}

export function isKeyOf<T extends string | number | symbol>(
  value: any,
  other: Record<T, any>,
): value is T {
  return value in other;
}

export function isFunction<T extends (...args: any[]) => any>(
  value: unknown | T,
): value is T {
  return typeof value === "function";
}
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
export function isBoolean(value: unknown): value is boolean {
  return value === true || value === false;
}
export function isArray<T = unknown>(value: T[] | unknown): value is T[] {
  return Array.isArray(value);
}
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}
export function isDate(value: unknown, cast: boolean = false): value is Date {
  value = cast ? new Date(value as string) : value;
  return value instanceof Date && isNumber(value.getTime());
}
