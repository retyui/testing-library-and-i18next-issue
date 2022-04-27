import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

test("testing-library can't find i18n Trans texts", () => {
  const {getByText, debug} = render(<App />);

  debug();

  // 1) <Text>Test1</Text>
  getByText('My test'); // ❌ not found
  getByText(/My test/); // ❌ not found

  // 2) <Text>Open <Text>link</Text></Text>
  getByText('Open'); // ❌ not found
  getByText(/Open/); // ❌ not found
  getByText('Open link'); // ❌ not found
  getByText(/Open link/); // ❌ not found
  getByText('link'); // ✅️ exists

  // 3) <Text>Hello <Text>callstack</Text>!</Text>
  getByText('Hello'); // ❌ not found
  getByText(/Hello/); // ❌ not found
  getByText('Hello callstack!'); // ❌ not found
  getByText(/Hello callstack!/); // ❌ not found
  getByText('callstack'); // ✅️ exists
});
