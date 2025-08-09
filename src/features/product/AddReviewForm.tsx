import type { FC } from "react";
import type { Product } from "../../utils/db";
import { Field, Input, Label } from "@headlessui/react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextarea";
import { useTranslation } from "react-i18next";

export const AddReviewForm: FC<Partial<Product>> = (product) => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const productTitle = language === "ar" ? product.title_ar : product.title;
    return (
        <div>
            <p className="mb-8">{t("Product.ReviewForm.EmptyMessage")}</p>
            <form className="p-8 border-gray-300 border-1 flex flex-col gap-2">
                <h1 className="text-2xl">
                    {t("Product.ReviewForm.Title", { productTitle })}
                </h1>
                <p>{t("Product.ReviewForm.Subtitle", { productTitle })}</p>
                <div className="flex flex-col gap-4 mt-4">
                    <CustomTextarea
                        label={t("Product.ReviewForm.Inputs.Review")}
                        background="white"
                    />

                    <div className="flex gap-4 items-center">
                        <CustomInput
                            label={t("Product.ReviewForm.Inputs.Name")}
                            wrapperClassName="w-1/2"
                            background="white"
                        />
                        <CustomInput
                            label={t("Product.ReviewForm.Inputs.Email")}
                            type="email"
                            wrapperClassName="w-1/2"
                            background="white"
                        />
                    </div>
                    <Field className="flex gap-2">
                        <Input type="checkbox" />
                        <Label>{t("Product.ReviewForm.Inputs.SaveData")}</Label>
                    </Field>
                    <CustomButton className="self-start rounded-sm">
                        {t("Product.ReviewForm.SubmitButton")}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};
