export function assert(guard, value, ...args) {
    if (!guard(value, ...args))
        throw new TypeError();
}
export function isInstanceOf(value, ctor) {
    return value instanceof ctor;
}
export function isValueOf(value, other) {
    return Array.isArray(other)
        ? other.includes(value)
        : Object.values(other).includes(value);
}
export function isKeyOf(value, other) {
    return value in other;
}
export function isFunction(value) {
    return typeof value === "function";
}
export function isString(value) {
    return typeof value === "string";
}
export function isBoolean(value) {
    return value === true || value === false;
}
export function isArray(value) {
    return Array.isArray(value);
}
export function isNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
export function isDate(value, cast = false) {
    value = cast ? new Date(value) : value;
    return value instanceof Date && isNumber(value.getTime());
}
//# sourceMappingURL=guards.js.map