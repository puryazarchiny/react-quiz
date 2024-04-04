import { Wrapper } from "@/components";

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <p className="p-4 text-center text-white">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/puryazarchiny"
            target="_blank"
            className="font-caveat text-xl font-bold"
          >
            Purya Zarchiny
          </a>
        </p>
      </Wrapper>
    </footer>
  );
}
