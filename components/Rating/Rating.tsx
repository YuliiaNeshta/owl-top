import { useEffect, useState } from "react";

import cn from "classnames";

import StarIcon from "./star.svg";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructorRating(rating);
  }, [rating]);

  const constructorRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.fill]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {/*index like key it's not good here*/}
      {ratingArray.map((rating, i) => (
        <span key={i}>{rating}</span>
      ))}
    </div>
  );
};
