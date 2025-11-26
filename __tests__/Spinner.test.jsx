import { render, screen } from '@testing-library/react';
import Spinner from '@/components/Spinner/Spinner';

describe('Spinner component', () => {
  it('renders the spinner SVG', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner-svg');
    expect(spinner).toBeInTheDocument();
  });

  it('applies the default size if no size prop is provided', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner-svg');
    expect(spinner).toHaveAttribute('width', '300');
    expect(spinner).toHaveAttribute('height', '300');
  });

  it('applies a custom size when provided', () => {
    render(<Spinner size={100} />);
    const spinner = screen.getByTestId('spinner-svg');
    expect(spinner).toHaveAttribute('width', '100');
    expect(spinner).toHaveAttribute('height', '100');
  });

  it('contains the circle elements and path', () => {
    render(<Spinner />);
    const spinner = screen.getByTestId('spinner-svg');
    const circles = spinner.querySelectorAll('circle');
    const path = spinner.querySelector('path');

    expect(circles.length).toBe(4); // 1 big + 3 small
    expect(path).toBeInTheDocument();
  });
});
