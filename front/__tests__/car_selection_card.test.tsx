import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Car from '../src/pages/car/[id]';
import axios from 'axios';
import CarSelectionCard from '@/components/CarSelectionCard';
import { act } from 'react-dom/test-utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      id: null,
    },
  }),
}));

jest.mock('axios');

describe('Car component', () => {
  const mockData = [
    {
      id: 1,
      brand: 'Volkswagen',
      model: 'T-Cross',
    },
    {
      id: 2,
      brand: 'Fiat',
      model: 'Toro',
    },
  ];

  beforeEach(async () => {
    await act(async () => {
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });
      render(<CarSelectionCard />);
    });
  });

  test('renders cars select option', () => {
    expect(screen.getByText('Selecione o veículo que deseja simular o financiamento')).toBeInTheDocument();
    expect(screen.getByText(`${mockData[0].brand} ${mockData[0].model}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockData[1].brand} ${mockData[1].model}`)).toBeInTheDocument();
  });
});
