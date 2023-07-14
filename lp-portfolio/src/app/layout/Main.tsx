"use client";
import Image from "next/image";
import React from "react";

export const Main = () => {
  return (
    <div>
      <main>
        <div className="h-96 relative mb-20">
          <Image src="/green.jpg" alt="" fill style={{ objectFit: "cover" }} />
        </div>
        <section className=" display_size">
          <h2 className="text-center">仕事への向き合い方</h2>

          <div className="">
            <div className="">
              <h3>生産性向上</h3>
              <p></p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias earum eaque similique ut a nihil excepturi at laborum necessitatibus, libero illum, dolorem aliquid assumenda vel
                nam. Necessitatibus consectetur quos quo adipisci cupiditate laboriosam asperiores corrupti? Accusantium dolore voluptatem maxime aspernatur, repellendus a voluptate consequatur
                mollitia labore. Accusantium consequatur voluptate totam, eum cumque blanditiis voluptates tenetur tempore repellat odit ab et nam, enim velit fugiat numquam expedita non ea pariatur
                quidem eligendi reiciendis! Magni veniam totam inventore? A, quos animi dolores, praesentium soluta dolor harum minus ea nobis ut id sint odit eius maxime, et consequatur! Vero ipsam
                nulla quidem quia.
              </p>
            </div>
            <div className="">
              <h3>チームプレー</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam numquam quibusdam incidunt voluptatibus iste rerum accusantium sed natus aperiam ut totam necessitatibus
                consectetur, quaerat ad pariatur corporis perferendis possimus placeat magnam repellat veniam quo? Vel vero autem dolorum deserunt. Nemo, animi, quia hic unde soluta assumenda
                voluptas, porro totam perferendis odit molestiae. Eius ut facilis veniam quos error corrupti harum, minus culpa, eos ratione molestiae officiis numquam vero atque nulla maiores tenetur
                autem ducimus nihil itaque soluta ipsa molestias, veritatis libero! Ad alias, sequi labore molestiae nobis aliquid similique excepturi nostrum doloribus, animi quibusdam! Quidem iste
                fugiat neque aut?
              </p>
            </div>
            <div className="">
              <h3>怒らない</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde corrupti aliquam saepe quos provident ut magnam laudantium, ab impedit repudiandae itaque, possimus officia
                aspernatur. Reprehenderit ipsam saepe quidem facilis dolore adipisci dolorem labore fuga sed! Asperiores aliquid dolorum molestias adipisci itaque ipsa sed, sint voluptas nesciunt modi
                quas quod ab repudiandae earum ipsum quia nisi nam doloremque temporibus! Nulla, fuga! Suscipit veritatis quibusdam obcaecati, expedita numquam doloremque aperiam possimus tempore
                sapiente non. Dolorum a quis in saepe eius autem laborum omnis incidunt consequuntur eum eaque perferendis iure esse ducimus, sed voluptatem odit ullam numquam? Quos odio ullam dolorum
                fuga.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div>
            <h2>スキル</h2>
            <ul>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
                HTML,CSS
              </li>
              <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
              <li>Javascript</li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                React
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="" />
                TailwindCSS
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                Typescript
              </li>
              <li>
                <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" />
                Next.js
              </li>
            </ul>
          </div>
        </section>

        <section className=" display_size">
          <div>
            <h2>趣味</h2>
            <ul>
              <li>
                <p>読書</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui inventore optio molestias ex tempora amet minus blanditiis quis perferendis? Eos facere neque temporibus vel
                  modi fugit mollitia, eaque dolores?
                </p>
              </li>
              <li>
                <p>筋トレ</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste quam magnam quidem saepe harum fuga nulla voluptatibus cumque incidunt minima rem, explicabo nam dolor. Et, eaque
                  quam! Sequi, totam?
                </p>
              </li>
              <li>
                <p>ゲーム</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste quam magnam quidem saepe harum fuga nulla voluptatibus cumque incidunt minima rem, explicabo nam dolor. Et, eaque
                  quam! Sequi, totam?
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
