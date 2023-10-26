interface WrapperProps {
  classes?: string;
  children: React.ReactNode;
}

function Wrapper({ classes, children }: WrapperProps) {
  return (
    <div className={"mx-auto max-w-[min(1280px,calc(100%-32px))] " + classes}>
      {children}
    </div>
  );
}

export default Wrapper;
