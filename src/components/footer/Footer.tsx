import Wrapper from "../containers/Wrapper";

function Footer() {
  return (
    <footer>
      <Wrapper classes="flex items-center justify-center py-4">
        <p className="flex items-center gap-2 text-white">
          <span>Made with ♥ by</span>

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

export default Footer;
