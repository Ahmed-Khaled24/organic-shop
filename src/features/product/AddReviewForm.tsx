import type { FC } from "react";
import type { Product } from "../../utils/db";
import { Field, Input, Label } from "@headlessui/react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextarea";

export const AddReviewForm: FC<Partial<Product>> = (product) => {
    return (
        <div>
            <p className="mb-8">There are no reviews yet.</p>
            <form className="p-8 border-gray-300 border-1 flex flex-col gap-2">
                <h1 className="text-2xl">
                    Be the first to review "{product.title}"
                </h1>
                <p>
                    Your email address will not be published. Required fields
                    are marked *
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    <CustomTextarea label="Your review *" background="white" />

                    <div className="flex gap-4 items-center">
                        <CustomInput
                            label="Name *"
                            wrapperClassName="w-1/2"
                            background="white"
                        />
                        <CustomInput
                            label="Email *"
                            type="email"
                            wrapperClassName="w-1/2"
                            background="white"
                        />
                    </div>
                    <Field className="flex gap-2">
                        <Input type="checkbox" />
                        <Label>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </Label>
                    </Field>
                    <CustomButton className="self-start rounded-sm">
                        Submit
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};
