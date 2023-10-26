interface ContainerProps {
  classes?: string;
  children: React.ReactNode;
}

function Container({ classes, children }: ContainerProps) {
  return <div className={classes}>{children}</div>;
}

export default Container;
