import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export default function Home() {
  return (
    <div className="container m-auto bg-hero-pattern">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
