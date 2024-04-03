import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  classes?: string;
}

export default function Card({ children, classes = '' }: Props) {
  return <div className={'bg-card w-full p-8 ' + classes}>{children}</div>;
}
