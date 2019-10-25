/**
 * @format
 */

import 'react-native';
import React from 'react';
import Report from '../comps/Tenant/Report.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Report />);
});
