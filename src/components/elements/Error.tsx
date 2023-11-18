interface ErrorProps {
  error: string;
}

export function Error({ error }: ErrorProps) {
  return <p className="text-2xl text-white">{error}</p>;
}
