import React from "react";
import { BackgroundGrid } from "./styles";

interface IContentProps {
    backgroundColor?: "",
    children?: React.ReactNode,
}

export const Content: React.FC<IContentProps> = ({ backgroundColor, children }) => {
    return (
        <BackgroundGrid>
            {children}
        </BackgroundGrid>
    )
}