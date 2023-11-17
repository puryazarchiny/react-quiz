import { Box } from "@/components";

interface WrapperProps {
  children: React.ReactNode;
  classes?: string;
}

export function Wrapper({ children, classes }: WrapperProps) {
  return (
    <Box classes={"mx-auto max-w-[min(1280px,calc(100%-32px))] " + classes}>
      {children}
    </Box>
  );
}
