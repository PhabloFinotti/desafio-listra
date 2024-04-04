import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CarSelectionCard from '@/components/CarSelectionCard';
import axios from 'axios';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    query: { id: null },
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

  test('redirects to car page when selecting a car', async () => {
    await act(async () => {
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });
      render(<CarSelectionCard />);
    });

    await act(async () => {
      // Simular seleção do primeiro carro
      fireEvent.change(screen.getByLabelText('Selecione o veículo que deseja simular o financiamento'), {
        target: { value: mockData[0].id },
      });
    });

    expect(useRouter().push).toHaveBeenCalledWith(`/car/${mockData[0].id}`);
  });
});
