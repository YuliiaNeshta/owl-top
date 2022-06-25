import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";

export const Tag = ({
  size = "small",
  color = "ghost",
  href,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <p
      {...props}
      className={cn(styles.tag, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
