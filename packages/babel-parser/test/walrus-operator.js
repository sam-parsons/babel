import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("walrus operator", function () {
  it("should parse", function () {
    expect(getParser(`if (x := y) alert()`)()).toMatchSnapshot();
  });
});
