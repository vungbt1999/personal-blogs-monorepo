import { render } from '@testing-library/react';

import UiCms from './ui-cms';

describe('UiCms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCms />);
    expect(baseElement).toBeTruthy();
  });
});
