"use client";
import React, { CSSProperties, FC } from "react";
import useMouseStalker from "../../../hooks/useMouthStalker";
import { animated } from "react-spring";

const initMouse = {
  width: 400,
  height: 400,
  borderRadius: 400,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  // 変化の速さ、大きくすると遅くなる
  frequency: 0.1,
  // どのタイミングで減速するか、大きくすると減速の開始が遅くなる
  damping: 2,
};

const mouseStyles: CSSProperties = {
  pointerEvents: "none",
  position: "fixed",
  zIndex: 100,
  background: "radial-gradient(circle at center, rgba(29, 78, 216, 0.15), transparent 80%)",
  //   mixBlendMode: "difference",
};

export const MouseStalker: FC = () => {
  const springStyles = useMouseStalker(initMouse, springConfig);

  return (
    <animated.div
      style={{
        ...mouseStyles,
        ...springStyles,
      }}
    />
  );
};

export default MouseStalker;
