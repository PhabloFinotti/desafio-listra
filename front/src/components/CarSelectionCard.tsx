import Card from '@/components/Card';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CarSelectionCard() {
  const router = useRouter();
  const [hasSelectedCar, setHasSelectedCar] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);
  const [initialPayment, setInitialPayment] = useState<number>(0);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get(`${process.env.API_URL}/cars`);
        setCars(response.data);
        setHasSelectedCar(router.query.id !== undefined);
        setSelectedCar(response.data.find((car: Car) => car.id === Number(router.query.id)));
      } catch (error) {
        console.error('Erro ao buscar lista de carros:', error);
      }
    }

    fetchCars();
  }, []);

  const handleSelectChange = (id: number) => {
    if (!id) return;

    setHasSelectedCar(true);
    router.push(`/car/${id}`);
  };

  const handleSimulateValue = () => {
    alert('Simulação realizada com sucesso!');
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
          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <select
              id="select-car"
              name="select-car"
              className="w-full h-[3rem] max-w-80 border border-gray-300 rounded-lg p-2"
              defaultValue={selectedCar?.id || ''}
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

            {hasSelectedCar && (
              <>
                <label htmlFor="initial-payment">Valor da Entrada</label>
                <input
                  type="number"
                  className="w-full h-[3rem] max-w-80 border border-gray-300 rounded-lg p-2"
                  placeholder="Insira o valor da entrada"
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInitialPayment(Number(e.target.value))}
                  value={initialPayment}
                  id="initial-payment"
                />
                <button
                  disabled={hasSelectedCar}
                  className={'bg-primary border border-primary text-white rounded-full px-24 sm:px-28 py-2.5 h-full tracking-wider font-extrabold'}
                  onClick={() => handleSimulateValue()}
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
