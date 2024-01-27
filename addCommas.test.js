const addCommas = require('./addCommas');
const { describe, it } = require('chai');
const { expect } = require('chai');

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toEqual("function");
  });
});
