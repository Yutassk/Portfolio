import "react-datepicker/dist/react-datepicker.css";
import { ShiftList } from "./component/ShiftList";
import NoticeButton from "./component/NoticeButton";
import { Navbar } from "./component/Navbar";
import { GeneratedURL } from "./component/GenerateURL";
import Header from "./Layout/Header";

export default function Home() {
  return (
    <div className="container border-4 border-green-600 max-w-screen-lg leading-tight">
      <Header />
      <p>簡単みんなのスケジュール調整ツール。今日も効率よくスケジュールを決めましょう。</p>
      <div className="">
        <p>ログインなしでもご利用頂けますが、ログインするとより便利に！</p>
      </div>

      <main className="">
        <GeneratedURL />
      </main>
    </div>
  );
}
