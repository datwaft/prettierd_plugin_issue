import hello_world from "@src/module";
import { expect } from "chai";

describe("the module module", function () {
  it("should not return anything", function () {
    const returnValue = hello_world();
    expect(returnValue).to.be.undefined;
  });
})
