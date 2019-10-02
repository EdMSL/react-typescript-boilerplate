import { assert } from 'chai';
import 'mocha';

import { getPathNameFromLocationPath } from '$utils/strings';

/* eslint-disable func-names, prefer-arrow-callback */
/* Mocha eslint require not use arrow functions as callback for describe, it, etc. */
describe('Return right string', function() {
  it('return rocket', function() {
    assert.equal(getPathNameFromLocationPath('/rocket'), 'rocket');
  });
});
