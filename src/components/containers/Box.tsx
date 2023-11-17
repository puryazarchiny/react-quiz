interface BoxProps {
  children: React.ReactNode;
  classes?: string;
  onClick?: () => void;
}

export function Box({ children, classes, onClick }: BoxProps) {
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
