import { getPathNameFromLocationPath } from '$utils/strings';

describe('Return right string', function() {
  it('return rocket', function() {
    expect(getPathNameFromLocationPath('/rocket')).toBe('rocket');
  });
});
