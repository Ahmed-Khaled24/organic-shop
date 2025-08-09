import { type FC } from "react";
import type { Review } from "../../utils/db";
import { useTranslation } from "react-i18next";
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
export const ReviewCard: FC<Review> = (review) => {
    const { i18n } = useTranslation();
    const reviewText =
        i18n.language === "ar" ? review.review_ar : review.review;

    return (
        <div className="flex flex-col gap-8 max-w-2xs items-center p-8 bg-white shadow-md shadow-gray-200 rounded-md">
            <p>{"⭐".repeat(Math.trunc(review.rating))}</p>
            <p>{reviewText}</p>
            <div className="flex items-center gap-4">
                <img src={review.user.imageUrl} />
                <span> {review.user.username}</span>
            </div>
        </div>
    );
};
