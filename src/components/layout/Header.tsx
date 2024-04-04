import { Link } from "react-router-dom";

import githubMark from "@/assets/icons/github-mark.svg";
import { Wrapper } from "@/components";

export function Header() {
  return (
    <header>
      <Wrapper>
        <div className="CONTAINER | flex justify-between p-4">
          <Link to="/" className="font-caveat text-3xl font-bold text-white">
            ✏️ React Quiz
          </Link>

          <a
            href="https://github.com/puryazarchiny/react-quiz"
            target="_blank"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-white hover:bg-[#eee]"
          >
            <img src={githubMark} alt="Invertocat logo" className="w-6" />
          </a>
        </div>
      </Wrapper>
    </header>
  );
}
