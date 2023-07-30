import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export default function Home({}) {
  return (
    <div className="container m-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
