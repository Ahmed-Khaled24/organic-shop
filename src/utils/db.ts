import coffee1 from "../assets/products/coffee/coffee-asorted.jpg";
import sanitizer1 from "../assets/products/sanitizer/sanitizer.jpg";
import chillies1 from "../assets/products/chillies/red-chillies.jpg";
import oil1 from "../assets/products/oil/edible-oil.jpg";
import orangeJuice1 from "../assets/products/orange-juice/orage-juice.jpg";

export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    rating: number; // out of 5
    freeShipping?: boolean;
    hasDiscount?: boolean;
    discountPercentage?: number;
    mainImage: string;
    images: string[];
}

export interface Review {
    id: string;
    user: {
        username: string;
        imageUrl: string;
    };
    review: string;
    rating: number;
}

export interface DB {
    products: Product[];
    reviews: Review[];
}

export const db: DB = {
    products: [
        {
            id: "id1",
            title: "Assorted Coffee",
            price: 35,
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            category: "Groceries",
            rating: 4.5,
            mainImage: coffee1,
            images: [coffee1],
        },
        {
            id: "id2",
            title: "Hand Sanitizer",
            price: 15,
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            category: "Groceries",
            rating: 4.5,
            mainImage: sanitizer1,
            images: [sanitizer1],
        },
        {
            id: "id3",
            title: "Handpicked Red Chillies",
            price: 19,
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            category: "Groceries",
            rating: 4.5,
            mainImage: chillies1,
            images: [chillies1],
        },
        {
            id: "id4",
            title: "Natural Extracted Edible Oil",
            hasDiscount: true,
            discountPercentage: 25,
            price: 34,
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            category: "Groceries",
            rating: 4.5,
            mainImage: oil1,
            images: [oil1],
        },
        {
            id: "id5",
            title: "Fresh Orange Juice",
            hasDiscount: false,
            price: 18,
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            category: "Groceries",
            rating: 4.5,
            mainImage: orangeJuice1,
            images: [orangeJuice1],
        },
    ],
    reviews: [
        {
            id: "id1",
            user: {
                username: "Mila Kunis",
                imageUrl:
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png",
            },
            review: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            rating: 5,
        },
        {
            id: "id2",
            user: {
                username: "Mike Sendler",
                imageUrl:
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png",
            },
            review: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            rating: 5,
        },
    ],
};
