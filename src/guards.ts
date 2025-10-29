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
