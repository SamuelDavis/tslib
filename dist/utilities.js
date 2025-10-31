import { isString } from "./guards.js";
export function persist(signal, opts) {
    const [get, set] = signal;
    const { key, listener, encode = JSON.stringify, decode = JSON.parse } = opts;
    const item = localStorage.getItem(key);
    if (isString(item))
        set(decode(item));
    listener(() => localStorage.setItem(key, encode(get())));
    return signal;
}
//# sourceMappingURL=utilities.js.map