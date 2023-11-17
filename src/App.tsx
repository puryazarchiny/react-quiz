import { Body, Footer, Header } from "@/components";
import { AppRoutes } from "@/routes";

export function App() {
  return (
    <Body classes="bg-[#23272f] font-wotfard">
      <Header />
      <AppRoutes />
      <Footer />
    </Body>
  );
}
