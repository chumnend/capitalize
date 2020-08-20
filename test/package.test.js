const capitalize = require('../src');
const chai = require('chai');
const expect = chai.expect;

describe('Package', () => {
  it('expects to capitalize all letter', () => {
    const target = 'test';
    const expected = 'TEST';
    const res = capitalize(target);
    expect(res).to.equal(expected);
  });
});
