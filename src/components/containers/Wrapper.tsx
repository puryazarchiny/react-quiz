import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="WRAPPER | mx-auto max-w-[min(1280px,calc(100%-32px))]">
      {children}
    </div>
  );
}
