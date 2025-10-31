import type { Signal, EffectFunction } from "./types.ts";
import { isString } from "./guards.js";

export function persist<T>(
  signal: Signal<T>,
  opts: {
    key: string;
    listener: <N>(fn: EffectFunction<undefined | NoInfer<N>, N>) => void;
    encode?: (value: T) => string;
    decode?: (value: string) => T;
  },
): Signal<T> {
  const [get, set] = signal;
  const { key, listener, encode = JSON.stringify, decode = JSON.parse } = opts;

  const item = localStorage.getItem(key);
  if (isString(item)) set(decode(item));
  listener(() => localStorage.setItem(key, encode(get())));

  return signal;
}
