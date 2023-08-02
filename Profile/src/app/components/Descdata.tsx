import React, { createContext } from "react";

type List = { title: string; desc: string };
export const MainList: React.Context<List[]> = createContext([
  { title: "about", desc: "わたしについて" },
  { title: "experience", desc: "今までの経歴を書く" },
  { title: "project", desc: "どんなプロジェクトを作ったか" },
  { title: "writing", desc: "Blogあれば" },
  { title: "skill", desc: "どんなスキルセットがあるか" },
]);
export const Descdata: React.FC = () => {
  return <div>Descdata</div>;
};
