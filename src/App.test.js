import { render } from '@testing-library/react';
import Controls from './App';

test('renders learn react link', () => {
  const container = render(<Controls />);
  expect(container).toMatchSnapshot();
});
