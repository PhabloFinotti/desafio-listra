import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PriceCard from '../src/components/PriceCard';

describe('Price Card', () => {
  test('renders PriceCard component with correct props', () => {
    const mockData = {
      title: '6x',
      installment6x: 1000,
      tag: 'IPVA GRÁTIS',
    };

    render(<PriceCard title={mockData.title} price={mockData.installment6x.toString()} tag={mockData.tag} />);

    expect(screen.getByText('6x')).toBeInTheDocument();
    expect(screen.getByText(mockData.installment6x.toString())).toBeInTheDocument();
    expect(screen.getByText('IPVA GRÁTIS')).toBeInTheDocument();
  });
});
