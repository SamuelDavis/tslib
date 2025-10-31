import type { Signal, EffectFunction } from "./types.ts";
export declare function persist<T>(signal: Signal<T>, opts: {
    key: string;
    listener: <N>(fn: EffectFunction<undefined | NoInfer<N>, N>) => void;
    encode?: (value: T) => string;
    decode?: (value: string) => T;
}): Signal<T>;
//# sourceMappingURL=utilities.d.ts.map