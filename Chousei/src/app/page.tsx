import "react-datepicker/dist/react-datepicker.css";
import { GeneratedURL } from "./component/GenerateURL";
import Header from "./Layout/Header";
import LocalStorageData from "./Layout/LocalStorageData";

export default function Home() {
  return (
    <div className=" border-4 border-green-600 max-w-screen-lg leading-tight m-auto">
      <Header />
      <p>簡単みんなのスケジュール調整ツール。今日も効率よくスケジュールを決めましょう。</p>
      <div className="">
        <p>ログインなしでもご利用頂けますが、ログインするとより便利に！</p>
      </div>

      <main className="">
        <GeneratedURL />
      </main>
      <LocalStorageData />
    </div>
  );
}
