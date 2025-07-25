import type { FC } from "react";
import type { Product } from "../../utils/db";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";

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
                    <Field className="flex flex-col gap-2">
                        <Label>Your review *</Label>
                        <Textarea
                            name="review"
                            className="bg-white p-3 border-gray-300 border-1"
                        />
                    </Field>
                    <div className="flex gap-4 items-center">
                        <Field className="flex flex-col gap-2 w-1/2">
                            <Label>Name *</Label>
                            <Input
                                name="name"
                                type="text"
                                className="bg-white p-3 border-gray-300 border-1"
                            />
                        </Field>
                        <Field className="flex flex-col gap-2 w-1/2">
                            <Label>Email *</Label>
                            <Input
                                name="email"
                                type="text"
                                className="bg-white p-3 border-gray-300 border-1"
                            />
                        </Field>
                    </div>
                    <Field className="flex gap-2">
                        <Input
                            name="email"
                            type="checkbox"
                            className="bg-white p-3 border-gray-300 border-1"
                        />
                        <Label>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </Label>
                    </Field>
                    <Button
                        type="submit"
                        className="self-start bg-green-primary cursor-pointer text-white px-8 py-2 rounded-sm font-semibold"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};
