import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-center items-center py-4 bg-primary">
      <Image src="/listra.svg" alt="Logo Listra" width={155} height={45} priority />
    </header>
  );
}
