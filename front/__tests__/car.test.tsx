import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Car from '../src/pages/car/[id]';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../src/components/CarSelectionCard', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-car-selection-card" />,
  };
});

describe('Car component', () => {
  const mockData: Car = {
    id: 1,
    picture: 'https://placehold.co/300x200',
    description: 'Test Description',
    city: 'Goiânia',
    brand: 'Volkswagen',
    model: 'T-Cross',
    year: 2020,
    mileage: 15850,
    transmission: 'Automático',
    price: 5950000,
    phone: '(62) 12345-1234',
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: '1' },
    });

    render(<Car data={mockData} />);
  });

  test('renders car description', () => {
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  test('renders car year', () => {
    expect(screen.getByText(mockData.year)).toBeInTheDocument();
  });

  test('renders seller phone', () => {
    expect(screen.getByText(mockData.phone)).toBeInTheDocument();
  });

  test('renders car brand and model', () => {
    expect(screen.getByText(mockData.brand + ' ' + mockData.model)).toBeInTheDocument();
  });
});
