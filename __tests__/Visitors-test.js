/**
 * @format
 */

import 'react-native';
import React from 'react';
import Visitors from '../comps/Tenant/Visitors.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Visitors />);
});
