export type AnyRecord<Value = any> = Record<symbol | string | number, Value>;
export type { Signal, EffectFunction } from "solid-js";
export type Targeted<El extends Element = HTMLElement, Ev extends Event = Event> = Ev & {
    currentTarget: El;
};
export type ExtendProps<Source, Extension extends AnyRecord = {}, Ignore extends string | number | symbol = never> = Source extends (props: infer Props, ...rest: any[]) => any ? ExtendProps<Props, Extension, Ignore> : Source extends AnyRecord ? Omit<Source, keyof Extension | Ignore> & Extension : never;
//# sourceMappingURL=types.d.ts.map