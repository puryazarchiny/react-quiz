import { Footer, Header } from "@/components";
import { AppRoutes } from "@/routes";

export function App() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "grid min-h-screen grid-rows-[auto_1fr_auto] bg-[#23272f] font-wotfard",
  );

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
