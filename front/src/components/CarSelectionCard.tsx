import Card from '@/components/Card';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

export default function CarSelectionCard({ handleSimulateValue }: { handleSimulateValue?: (initialPayment: number) => void }) {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [initialPayment, setInitialPayment] = useState<string>('');
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URl}/cars`);
        setCars(response.data);
        if (router.query.id) {
          setSelectedCar(response.data.find((car: { id: number }) => car.id === Number(router.query.id)).id);
        }
      } catch (error) {
        console.error('Erro ao buscar lista de carros:', error);
      }
    }

    fetchCars();
  }, [router.query.id]);

  const handleSelectChange = (id: number) => {
    if (!id) return;

    router.push(`/car/${id}`);
  };

  // Necessário para poder deixar o campo vazio, sem o 0 irritante que nao deixa o usuário apagar
  const handleInitialPaymentInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
    if (value === '') {
      setInitialPayment('');
      return;
    }

    setInitialPayment(value);
  };

  return (
    <>
      <div className="relative">
        <h1 className="font-bold text-3xl ">Simulação de Financiamento</h1>
        <span className="absolute h-1 w-10 bg-primary rounded-lg -bottom-3 left-0"></span>
      </div>

      <Card classes="mt-10">
        <div>
          <label htmlFor="select-car" className="text-lg font-bold">
            Selecione o veículo que deseja simular o financiamento
          </label>
          <div className="flex flex-col items-end gap-4 mt-4 sm:flex-row">
            <select
              id="select-car"
              name="select-car"
              className="w-full h-[3rem] max-w-80 border border-gray-300 rounded-lg px-4 py-2"
              value={selectedCar || ''}
              onChange={(e) => handleSelectChange(Number(e.target.value))}
            >
              <option value="" disabled hidden>
                Selecione um carro
              </option>
              {cars.map((car: Car) => (
                <option key={car.id} value={car.id}>
                  {car.brand} {car.model}
                </option>
              ))}
            </select>

            {handleSimulateValue && (
              <>
                <div>
                  <label className="font-bold text-sm" htmlFor="initial-payment">
                    Valor da Entrada
                  </label>
                  <input
                    type="text"
                    className="w-full h-[3rem] max-w-80 border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Insira o valor da entrada"
                    onInput={(e) => handleInitialPaymentInput(e)}
                    value={initialPayment}
                    id="initial-payment"
                  />
                </div>
                <button
                  className={
                    'bg-primary border border-primary text-white rounded-full px-24 sm:px-28 py-2.5 h-full tracking-wider font-extrabold cursor-pointer transition hover:opacity-90'
                  }
                  type="button"
                  onClick={() => {
                    console.log('clicado');
                    handleSimulateValue(Number(initialPayment));
                  }}
                >
                  Simular
                </button>
              </>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
