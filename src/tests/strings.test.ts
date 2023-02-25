import { getPathNameFromLocationPath } from '$utils/strings';

describe('Return right string', () => {
  it('return rocket', () => {
    expect(getPathNameFromLocationPath('/rocket')).toBe('rocket');
  });
});
