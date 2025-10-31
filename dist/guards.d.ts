export declare function assert<T, Args extends any[]>(guard: (value: unknown, ...args: Args) => value is T, value: unknown, ...args: Args): asserts value is T;
export declare function isInstanceOf<T>(value: unknown, ctor: new (...args: any[]) => T): value is T;
export declare function isValueOf<T>(value: any, other: T[] | Record<string | number | symbol, T>): value is T;
export declare function isKeyOf<T extends string | number | symbol>(value: any, other: Record<T, any>): value is T;
export declare function isFunction<T extends (...args: any[]) => any>(value: unknown | T): value is T;
export declare function isString(value: unknown): value is string;
export declare function isBoolean(value: unknown): value is boolean;
export declare function isArray<T = unknown>(value: T[] | unknown): value is T[];
export declare function isNumber(value: unknown): value is number;
export declare function isDate(value: unknown, cast?: boolean): value is Date;
//# sourceMappingURL=guards.d.ts.map