import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Yuta Sasaki</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Hobby</a>
            </li>
            <li>
              <a href="#">Future</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="flex justify-center">
          <Image src="/mainvisual.jpg" alt="" width={500} height={500} sizes="(max-width: 480px)" />
        </div>
        <section>
          <h2>Profile</h2>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
