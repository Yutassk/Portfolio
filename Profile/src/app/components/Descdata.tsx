import React, { createContext } from "react";

type List = { index: number; title: string; desc: string };
export const MainList: React.Context<List[]> = createContext([
  { index: 1, title: "about", desc: "小学生の頃にwin95を触って以来、パソコンが大好きです。" },
  { index: 2, title: "experience", desc: "今までの経歴を書く" },
  { index: 3, title: "project", desc: "どんなプロジェクトを作ったか" },
  { index: 4, title: "writing", desc: "Blogあれば" },
  { index: 5, title: "skill", desc: `どんなスキルセットがあるか` },
]);
export const Descdata: React.FC = () => {
  return <div>Descdata</div>;
};
