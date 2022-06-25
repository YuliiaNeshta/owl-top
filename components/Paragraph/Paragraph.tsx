import cn from "classnames";

import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.scss";

export const Paragraph = ({
  size = "medium",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      {...props}
      className={cn(styles.paragraph, className, {
        [styles.paragraphSmall]: size === "small",
        [styles.paragraphMedium]: size === "medium",
        [styles.paragraphLarge]: size === "large",
      })}
    >
      {children}
    </p>
  );
};
