import { render } from '@testing-library/react';
import { Footer } from 'src/components/common';

describe('샘플테스트 그룹', () => {
  test('테스트1', () => {
    expect(3).toBe(3);
  });
});

describe('샘플테스트 그룹2', () => {
  test('테스트2', () => {
    render(<Footer />);
    expect(2).toBe(2);
  });
});
