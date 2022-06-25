import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size: "small" | "medium" | "large";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  children: ReactNode;
  href?: string;
}
