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
          <Image id="wave-item-01" src="/mainvisual.jpg" alt="" width={500} height={500} sizes="(max-width: 480px)" />
        </div>
        <section>
          <h2>仕事への向き合い方</h2>
          <div>
            <h3>生産性向上</h3>
            <p></p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias earum eaque similique ut a nihil excepturi at laborum necessitatibus, libero illum, dolorem aliquid assumenda vel nam.
              Necessitatibus consectetur quos quo adipisci cupiditate laboriosam asperiores corrupti? Accusantium dolore voluptatem maxime aspernatur, repellendus a voluptate consequatur mollitia
              labore. Accusantium consequatur voluptate totam, eum cumque blanditiis voluptates tenetur tempore repellat odit ab et nam, enim velit fugiat numquam expedita non ea pariatur quidem
              eligendi reiciendis! Magni veniam totam inventore? A, quos animi dolores, praesentium soluta dolor harum minus ea nobis ut id sint odit eius maxime, et consequatur! Vero ipsam nulla
              quidem quia.
            </p>
          </div>
          <div>
            <h3>チームプレー</h3>
            <p></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam numquam quibusdam incidunt voluptatibus iste rerum accusantium sed natus aperiam ut totam necessitatibus
              consectetur, quaerat ad pariatur corporis perferendis possimus placeat magnam repellat veniam quo? Vel vero autem dolorum deserunt. Nemo, animi, quia hic unde soluta assumenda voluptas,
              porro totam perferendis odit molestiae. Eius ut facilis veniam quos error corrupti harum, minus culpa, eos ratione molestiae officiis numquam vero atque nulla maiores tenetur autem
              ducimus nihil itaque soluta ipsa molestias, veritatis libero! Ad alias, sequi labore molestiae nobis aliquid similique excepturi nostrum doloribus, animi quibusdam! Quidem iste fugiat
              neque aut?
            </p>
          </div>
          <div>
            <h3>怒らない</h3>
            <p></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde corrupti aliquam saepe quos provident ut magnam laudantium, ab impedit repudiandae itaque, possimus officia
              aspernatur. Reprehenderit ipsam saepe quidem facilis dolore adipisci dolorem labore fuga sed! Asperiores aliquid dolorum molestias adipisci itaque ipsa sed, sint voluptas nesciunt modi
              quas quod ab repudiandae earum ipsum quia nisi nam doloremque temporibus! Nulla, fuga! Suscipit veritatis quibusdam obcaecati, expedita numquam doloremque aperiam possimus tempore
              sapiente non. Dolorum a quis in saepe eius autem laborum omnis incidunt consequuntur eum eaque perferendis iure esse ducimus, sed voluptatem odit ullam numquam? Quos odio ullam dolorum
              fuga.
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
