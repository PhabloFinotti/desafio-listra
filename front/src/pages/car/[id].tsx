import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { formatMileage, formatMoney } from '@/utils/stringUtils';
import { useRouter } from 'next/router';
import CarSelectionCard from '@/components/CarSelectionCard';
import PriceCard from '@/components/PriceCard';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { GetStaticPropsContext } from 'next';

export default function CarData({ data }: { data: Car }) {
  const router = useRouter();
  const [simulatedValues, setSimulatedValues] = useState({
    installment6x: 0,
    installment12x: 0,
    installment48x: 0,
  });

  const simulateValues = useCallback(
    (initialPayment: number = 0) => {
      if (!data) return;
      if (initialPayment >= data.price) {
        alert('O valor da entrada não pode ser maior ou igual ao valor do carro');
        return;
      }
      const installment6x = (data.price * 1.1247 - initialPayment) / 6;
      const installment12x = (data.price * 1.1556 - initialPayment) / 12;
      const installment48x = (data.price * 1.1869 - initialPayment) / 48;
      setSimulatedValues({ installment6x, installment12x, installment48x });
    },
    [data]
  );

  useEffect(() => {
    simulateValues();
  }, [data, simulateValues]);

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <CarSelectionCard handleSimulateValue={simulateValues} />
      <div className="mt-20 grid grid-cols-1 gap-y-7 sm:grid-cols-3 sm:gap-x-7">
        <div className="bg-white rounded-b-lg shadow col-span-1">
          <div className="relative w-full">
            <Image className="object-cover w-full" src={data.picture} alt="Imagem do Carro" height={190} width={300} />
            <span className="absolute left-0 bottom-5 bg-white px-2 rounded-r-full flex items-center gap-x-1">
              <Image src="/map-pin.svg" alt="Localização Icone" height={14} width={14} />
              {data.city}
            </span>
          </div>
          <div className="p-4">
            <p className="text-xl font-bold">
              {data.brand} {data.model}
            </p>
            <span className="mt-2">{data.description}</span>
            <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
              <span className="flex whitespace-nowrap items-center gap-x-1 text-heading/70">
                <Image src="/calendar.svg" alt="Ano do veículo" height={16} width={16} />
                {data.year}
              </span>
              <span className="flex whitespace-nowrap items-center gap-x-1 text-heading/70">
                <Image src="/speedometer.svg" alt="Quilometragem" height={16} width={16} />
                {formatMileage(data.mileage)} Km
              </span>
              <span className="flex whitespace-nowrap items-center gap-x-1 text-heading/70">
                <Image src="/car-shift.svg" alt="Tipo de Câmbio" height={16} width={16} />
                {data.transmission}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-5">{formatMoney(data.price)}</h3>
          </div>
        </div>

        <Card classes="h-full col-span-2">
          <div className="relative">
            <h2 className="font-bold text-xl ">Valores simulados para você</h2>
            <span className="absolute h-1 w-10 bg-primary rounded-lg -bottom-3 left-0"></span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-[500px]">
            <PriceCard title="6x" price={formatMoney(simulatedValues.installment6x)} tag="IPVA GRÁTIS" accent />
            <PriceCard title="12x" price={formatMoney(simulatedValues.installment12x)} />
            <PriceCard title="48x" price={formatMoney(simulatedValues.installment48x)} />
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-5">
            <Link
              href="#"
              className="flex items-center gap-x-2 justify-center whitespace-nowrap bg-whatsapp border border-whatsapp text-white rounded-full px-14 py-2.5 h-full tracking-wider font-extrabold transition hover:opacity-90"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp Icone" height={24} width={24} />
              Falar com consultor
            </Link>

            <Link href="#" className="w-full text-center font-bold sm:w-auto hover:underline">
              {data.phone}
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { id } = params || {};

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URl}/cars/${id}`);
    const data = response.data;

    return {
      props: {
        data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do carro:', error);
    return {
      notFound: true,
    };
  }
}
