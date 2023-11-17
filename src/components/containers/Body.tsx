import { Box } from "@/components";

interface BodyProps {
  children: React.ReactNode;
  classes?: string;
}

export function Body({ children, classes }: BodyProps) {
  return (
    <Box classes={"grid min-h-screen grid-rows-[auto_1fr_auto] " + classes}>
      {children}
    </Box>
  );
}
