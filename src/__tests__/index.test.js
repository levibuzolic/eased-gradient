/* eslint-env jest */

const easedGradient = require('../');

describe('easedGradient', () => {
  it('should return argument', () => {
    expect(easedGradient('test')).toBe('test');
  });
});
