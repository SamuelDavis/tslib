import { assert as test, describe, it } from "vitest";
import { isValueOf, isKeyOf, isInstanceOf, assert } from "./guards.js";

describe("isValueOf", () => {
  it("supports arrays", () => {
    test.isTrue(isValueOf("a", ["a", "b"]));
    test.isTrue(isValueOf("b", ["a", "b"]));
    test.isFalse(isValueOf("c", ["a", "b"]));
  });

  it("supports objects", () => {
    test.isTrue(isValueOf("a", { foo: "a", bar: "b" }));
    test.isTrue(isValueOf("b", { foo: "a", bar: "b" }));
    test.isFalse(isValueOf("qux", { foo: "a", bar: "b" }));
  });
});

describe("isKeyOf", () => {
  it("supports arrays", () => {
    test.isTrue(isKeyOf(0, ["a", "b", "c"]));
    test.isTrue(isKeyOf(2, ["a", "b", "c"]));
    test.isFalse(isKeyOf(3, ["a", "b", "c"]));
  });

  it("supports objects", () => {
    test.isTrue(isKeyOf("foo", { foo: "a", bar: "b" }));
    test.isTrue(isKeyOf("bar", { foo: "a", bar: "b" }));
    test.isFalse(isKeyOf("qux", { foo: "a", bar: "b" }));
  });
});

describe("isInstanceOf", () => {
  it("supports errors", () => {
    test.isTrue(isInstanceOf(new Error(), Error));
    test.isTrue(isInstanceOf(new TypeError(), Error));
    test.isFalse(isInstanceOf(new Error(), TypeError));
  });
});

describe("assert", () => {
  it("isValueOf", () => {
    test.doesNotThrow(() => assert(isValueOf, "b", ["a", "b"]));
    test.throws(() => assert(isValueOf, "c", ["a", "b"]));
    test.doesNotThrow(() => assert(isValueOf, "b", { foo: "a", bar: "b" }));
    test.throws(() => assert(isValueOf, "qux", { foo: "a", bar: "b" }));
  });

  it("isKeyOf", () => {
    test.doesNotThrow(() => assert(isKeyOf, 2, ["a", "b", "c"]));
    test.throws(() => assert(isKeyOf, 3, ["a", "b", "c"]));
    test.doesNotThrow(() => assert(isKeyOf, "bar", { foo: "a", bar: "b" }));
    test.throws(() => assert(isKeyOf, "qux", { foo: "a", bar: "b" }));
  });

  it("isInstanceOf", () => {
    test.doesNotThrow(() => assert(isInstanceOf, new TypeError(), Error));
    test.throws(() => assert(isInstanceOf, new Error(), TypeError));
  });
});
