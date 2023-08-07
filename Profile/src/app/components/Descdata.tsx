import React, { createContext } from "react";

type List = { title: string; desc: string };
export const MainList: React.Context<List[]> = createContext([
  { title: "about", desc: "" },
  { title: "skill", desc: "今までの経歴を書く" },
  { title: "project", desc: "どんなプロジェクトを作ったか" },
]);
export const Descdata: React.FC = () => {
  return <div>Descdata</div>;
};
