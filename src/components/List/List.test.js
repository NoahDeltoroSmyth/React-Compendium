import { render } from '@testing-library/react';
import p from './List';

test('list.js p tag maps a pokemon attribute', () => {
  const container = render(<p> type: {p.type_1}</p>);
  expect(container).toMatchSnapshot();
});
