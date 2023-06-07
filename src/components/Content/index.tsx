import React from "react";
import { BackgroundGrid } from "./styles";

interface IContentProps {
  backgroundColor?: "";
  children?: React.ReactNode;
  marginTopNumber: number;
}

export const Content: React.FC<IContentProps> = ({
  backgroundColor,
  children,
  marginTopNumber,
}) => {
  return <BackgroundGrid marginStyle={marginTopNumber}>{children}</BackgroundGrid>;
};
