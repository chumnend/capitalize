const capitalize = require('../src');
const chai = require('chai');
const expect = chai.expect;

describe('Package', () => {
  it('expects to capitalize all letters in a string', () => {
    const target = 'hello world';
    const expected = 'HELLO WORLD';
    const res = capitalize(target);
    expect(res).to.equal(expected);
  });
  
  it('expects to capitalize only the first letter', () => {
    const target = 'hello world';
    const expected = 'Hello world';
    const res = capitalize(target, 'first');
    expect(res).to.equal(expected);
  });
  
  it('expects to capitalize first letter of each word', () => {
    const target = 'hello world';
    const expected = 'Hello World';
    const res = capitalize(target, 'words');
    expect(res).to.equal(expected);
  });
  
  it('expects to throw an error', () => {
    expect(() => capitalize('test', 'error')).to.throw(Error);
  });
});
