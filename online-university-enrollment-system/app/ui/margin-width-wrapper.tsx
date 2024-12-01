import { ReactNode } from 'react';

export default function MarginWidthWrapper({
                                             children,
                                           }: {
  children: ReactNode;
}) {
  return (
      <div className="flex flex-col transition-all duration-300 ease-in-out ml-[var(--sidebar-width)] min-h-screen">
        {children}
      </div>
  );
}
