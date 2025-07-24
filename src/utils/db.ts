import coffee1 from "../assets/products/coffee/coffee-asorted.jpg";
import sanitizer1 from "../assets/products/sanitizer/sanitizer.jpg";
import chillies1 from "../assets/products/chillies/red-chillies.jpg";
import oil1 from "../assets/products/oil/edible-oil.jpg";
import orangeJuice1 from "../assets/products/orange-juice/orage-juice.jpg";
import faceScrub1 from "../assets/products/face-scrub/face-wash.jpg";
import cashewButter1 from "../assets/products/cashew-butter/cashew-butter-500.jpg";
import cookies1 from "../assets/products/cookies/diabetic-cookies.jpg";
import eggs1 from "../assets/products/eggs/eggs.jpg";
import honey1 from "../assets/products/honey/organic-honey.jpg";
import pulses1 from "../assets/products/pulses/pulses.jpg";
import wheat1 from "../assets/products/wheat/wheat.jpg";

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
            category: "Juice",
            rating: 4.5,
            mainImage: orangeJuice1,
            images: [orangeJuice1],
        },
        {
            id: "id6",
            title: "Cashew Butter",
            price: 35,
            hasDiscount: true,
            discountPercentage: 25,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 3.5,
            mainImage: cashewButter1,
            images: [cashewButter1],
        },
        {
            id: "id7",
            title: "Diabetic Cookies",
            price: 35,
            hasDiscount: true,
            discountPercentage: 25,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 4.5,
            mainImage: cookies1,
            images: [cookies1],
        },
        {
            id: "id8",
            title: "Farm Fresh Eggs",
            price: 34,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 4.5,
            mainImage: eggs1,
            images: [eggs1],
        },
        {
            id: "id9",
            title: "Fresh Organic Honey",
            price: 34,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 4.5,
            mainImage: honey1,
            images: [honey1],
        },
        {
            id: "id10",
            title: "Pulses From Organic Farm",
            price: 15,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 4.5,
            mainImage: pulses1,
            images: [pulses1],
        },
        {
            id: "id11",
            title: "Organic Face Scrub",
            price: 35,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 5,
            mainImage: faceScrub1,
            images: [faceScrub1],
        },
        {
            id: "id12",
            title: "Wheat From Organic Farms",
            price: 34,
            category: "Groceries",
            description:
                "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
            rating: 5,
            mainImage: wheat1,
            images: [wheat1],
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
