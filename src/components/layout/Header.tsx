import { Box, Github, Logo, Wrapper } from "@/components";

export function Header() {
  return (
    <header>
      <Wrapper>
        <Box classes="flex justify-between p-4">
          <Logo />
          <Github />
        </Box>
      </Wrapper>
    </header>
  );
}
