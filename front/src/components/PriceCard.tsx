interface Props {
  title: string;
  price: string;
  tag?: string;
  accent?: boolean;
}
export default function PriceCard({ title, price, tag, accent = false }: Props) {
  return (
    <div className={'p-4 border bg-white rounded-lg shadow w-auto' + (tag && ' relative') + (accent && ' sm:col-span-2')}>
      <p className=" text-lg leading-none font-bold">{title}</p>
      <h3 className="text-2xl leading-snug text-primary font-bold">{price}</h3>
      {tag && <span className="absolute right-0 bg-primary text-white px-2 top-1/2 -translate-y-1/2 rounded-l-full">{tag}</span>}
    </div>
  );
}
