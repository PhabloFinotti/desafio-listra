import { ReactNode } from 'react';

interface Props {
  title?: string;
  wrapperClasses?: string;
  inline?: boolean;
  children: ReactNode;
}
export default function List({ children, title, wrapperClasses = '', inline = false }: Props) {
  return (
    <div className={wrapperClasses}>
      {title && <h4 className="font-bold text-lg mb-2.5">{title}</h4>}
      <ul className={'flex gap-2.5 ' + (!inline && 'flex-col')}>{children}</ul>
    </div>
  );
}
