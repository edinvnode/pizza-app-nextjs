import { render, screen, act } from '@testing-library/react';
import About from '@/app/about/page.tsx'; // adjust the path based on your project
import confetti from 'canvas-confetti';

// Mock next/image (Next.js requires this)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

// Mock canvas-confetti
jest.mock('canvas-confetti', () => jest.fn());

// Mock framer-motion animations (no need for JS animations in tests)
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
  AnimatePresence: ({ children }) => <div>{children}</div>,
}));

// Fake timers for setInterval
jest.useFakeTimers();

describe('About Component', () => {
  test('renders the main heading', () => {
    render(<About />);
    expect(screen.getByText('Papirna čarolija')).toBeInTheDocument();
  });

  test('renders the first message initially', () => {
    render(<About />);

    expect(
      screen.getByText('Predivna torta, izgleda još ljepše uživo! Sve pohvale!')
    ).toBeInTheDocument();

    expect(screen.getByText('— Amina')).toBeInTheDocument();
  });

  test('changes message after interval', () => {
    render(<About />);

    // initial message
    expect(
      screen.getByText('Predivna torta, izgleda još ljepše uživo! Sve pohvale!')
    ).toBeInTheDocument();

    // advance timers by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // second message
    expect(
      screen.getByText(
        'Merisa, hvala ti! Poklon je oduševio moju prijateljicu. Toliko pažnje u svakom detalju.'
      )
    ).toBeInTheDocument();

    expect(screen.getByText('— Selma')).toBeInTheDocument();
  });

  test('calls confetti on mount', () => {
    render(<About />);
    expect(confetti).toHaveBeenCalled();
  });
});
