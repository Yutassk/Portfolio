import "react-datepicker/dist/react-datepicker.css";
import { ShiftList } from "./component/ShiftList";
import NoticeButton from "./component/NoticeButton";
import { Navbar } from "./component/Navbar";
import Firebase from "./component/Firebase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container border-4 border-green-600 max-w-screen-lg leading-tight">
      <header className="bg-green-600 text-slate-100 fixed overflow-hidden top-0 w-full h-12">
        <div className="flex justify-between items-center mx-2">
          <h2 className="text-2xl">しふとさん</h2>
          <div className="flex items-center justify-around space-x-2">
            <NoticeButton />
            <div className="lg:hidden">
              <Navbar />
            </div>
          </div>
        </div>
      </header>
      <p>簡単みんなのスケジュール調整ツール。今日も効率よくスケジュールを決めましょう。</p>
      <div className="">
        <p>ログインなしでもご利用頂けますが、ログインするとより便利に！</p>
      </div>

      <main className="">
        <ShiftList />
      </main>
      {/* <Firebase /> */}
      <Link href={"/s?h=12fewg4534ygdfdh5"}>りんく</Link>
    </div>
  );
}
