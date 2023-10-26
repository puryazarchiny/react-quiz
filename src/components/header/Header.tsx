import Wrapper from "../containers/Wrapper";

function Header() {
  return (
    <header>
      <Wrapper classes="flex justify-between p-4">
        <a href="#" className="font-caveat text-3xl font-bold text-white">
          ✏️ React Quiz
        </a>

        <a
          href="https://github.com/puryazarchiny/react-quiz"
          target="_blank"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-white hover:bg-[#ddd]"
        >
          <img
            src="/icons/github-mark.svg"
            alt="Invertocat logo"
            className="w-6"
          />
        </a>
      </Wrapper>
    </header>
  );
}

export default Header;
