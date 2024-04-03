import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href?: string;
  children: ReactNode;
}
export default function ListItem({ href, children }: Props) {
  return <li className="hover:opacity-80">{href ? <Link href={href}>{children}</Link> : children}</li>;
}
