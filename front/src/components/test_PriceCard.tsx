import { render, screen } from '@testing-library/react';
import PriceCard from '../src/components/PriceCard';

describe('PriceCard component', () => {
  const mockPrice = 5950000;

  test('renders price correctly', () => {
    render(<PriceCard price={mockPrice} />);
    const priceElement = screen.getByText(`R$ ${mockPrice.toFixed(2)}`);
    expect(priceElement).toBeInTheDocument();
  });
});
