import { render, screen } from '@testing-library/react';
import CarSelectionCard from './CarSelectionCard';

describe('CarSelectionCard component', () => {
  test('renders car selection card', () => {
    render(<CarSelectionCard />);
    const carSelectionCardElement = screen.getByTestId('mock-car-selection-card');
    expect(carSelectionCardElement).toBeInTheDocument();
  });
});
