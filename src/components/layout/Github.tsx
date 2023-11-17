import githubMark from "@/assets/icons/github-mark.svg";

export function Github() {
  return (
    <a
      href="https://github.com/puryazarchiny/react-quiz"
      target="_blank"
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-white hover:bg-[#ddd]"
    >
      <img src={githubMark} alt="Invertocat logo" className="w-6" />
    </a>
  );
}
