import { ReactNode } from 'react';

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <div className="text-red-500 text-sm italic absolute top-0 left-0 right-0">
      <p>{children}</p>
    </div>
  );
}
