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
    title_ar: string;
    price: number;
    category: string;
    category_ar: string;
    description: string;
    description_ar: string;
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
    review_ar: string;
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
            title_ar: "قهوة منوّعة",
            price: 35,
            description: `Discover our premium selection of assorted coffee blends, sourced from the finest coffee-growing regions.
Each blend offers a unique aroma and flavor profile to suit every taste preference.
Perfect for coffee lovers seeking variety in every cup.`,
            description_ar: `اكتشف مجموعتنا المميزة من خلطات القهوة المتنوعة، المختارة من أفضل مناطق زراعة البن.
تتميز كل خلطة برائحة ونكهة فريدة لتناسب جميع الأذواق.
مثالية لعشاق القهوة الباحثين عن التنوع في كل فنجان.`,
            category: "Groceries",
            category_ar: "البقالة",
            rating: 4.5,
            mainImage: coffee1,
            images: [coffee1],
        },
        {
            id: "id2",
            title: "Hand Sanitizer",
            title_ar: "معقم يدين",
            price: 15,
            description: `Keep your hands clean and protected with our fast-drying, alcohol-based hand sanitizer.
Effectively kills 99.9% of germs while leaving your skin feeling fresh.
Convenient for use at home, work, or on the go.`,
            description_ar: `حافظ على نظافة وحماية يديك باستخدام معقم اليدين سريع الجفاف والمكون من الكحول.
يقتل 99.9% من الجراثيم بفعالية ويترك بشرتك منتعشة.
مثالي للاستخدام في المنزل أو العمل أو أثناء التنقل.`,
            category: "Groceries",
            category_ar: "البقالة",
            rating: 4.5,
            mainImage: sanitizer1,
            images: [sanitizer1],
        },
        {
            id: "id3",
            title: "Handpicked Red Chillies",
            title_ar: "فلفل أحمر منتقى بعناية",
            price: 19,
            description: `Our handpicked red chillies are carefully selected to deliver exceptional flavor and quality.
Ideal for enhancing the spice and color of a wide range of recipes.
Naturally sun-dried to preserve their authentic taste and aroma.`,
            description_ar: `فلفلنا الأحمر المنتقى بعناية يختار بدقة ليمنحك نكهة وجودة استثنائية.
مثالي لتعزيز الحدة واللون في مجموعة متنوعة من الوصفات.
مجفف تحت أشعة الشمس طبيعيًا للحفاظ على طعمه الأصيل ورائحته المميزة.`,
            category: "Groceries",
            category_ar: "البقالة",
            rating: 4.5,
            mainImage: chillies1,
            images: [chillies1],
        },
        {
            id: "id4",
            title: "Natural Extracted Edible Oil",
            title_ar: "زيت صالح للأكل مستخلص طبيعيًا",
            hasDiscount: true,
            discountPercentage: 25,
            price: 34,
            description: `Enjoy the pure goodness of our naturally extracted edible oil, free from artificial additives.
Cold-pressed to retain its rich flavor and essential nutrients.
Perfect for healthy cooking, dressing, and enhancing your favorite dishes.`,
            description_ar: `استمتع بالنقاء الطبيعي لزيتنا الصالح للأكل والمستخلص دون أي إضافات صناعية.
معصور على البارد للحفاظ على نكهته الغنية ومكوناته الغذائية الأساسية.
مثالي للطهي الصحي، والتتبيل، وتعزيز نكهة أطباقك المفضلة.`,
            category: "Groceries",
            category_ar: "البقالة",
            rating: 4.5,
            mainImage: oil1,
            images: [oil1],
        },
        {
            id: "id5",
            title: "Fresh Orange Juice",
            title_ar: "عصير برتقال طازج",
            hasDiscount: false,
            price: 18,
            description: `Refresh yourself with our freshly squeezed orange juice, bursting with natural sweetness.
Packed with vitamin C to boost your energy and immunity.
Perfect for breakfast or a healthy drink any time of the day.`,
            description_ar: `انتعش مع عصير البرتقال الطازج المعصور فورًا، والمليء بالحلاوة الطبيعية.
غني بفيتامين C لتعزيز طاقتك ومناعتك.
مثالي لوجبة الإفطار أو كمشروب صحي في أي وقت من اليوم.`,
            category: "Juice",
            category_ar: "العصائر",
            rating: 4.5,
            mainImage: orangeJuice1,
            images: [orangeJuice1],
        },
        {
            id: "id6",
            title: "Cashew Butter",
            title_ar: "زبدة الكاجو",
            price: 35,
            hasDiscount: true,
            discountPercentage: 25,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Indulge in the creamy richness of our premium cashew butter, made from 100% roasted cashews.
A healthy source of protein, vitamins, and healthy fats.
Perfect as a spread, in smoothies, or for adding flavor to your favorite recipes.`,
            description_ar: `استمتع بالقوام الكريمي الغني لزبدة الكاجو الفاخرة المصنوعة من الكاجو المحمص 100%.
            مصدر صحي للبروتين والفيتامينات والدهون المفيدة.
مثالية كدهن، أو في العصائر، أو لإضافة النكهة إلى وصفاتك المفضلة.`,
            rating: 3.5,
            mainImage: cashewButter1,
            images: [cashewButter1],
        },
        {
            id: "id7",
            title: "Diabetic Cookies",
            title_ar: "بسكويت لمرضى السكري",
            price: 35,
            hasDiscount: true,
            discountPercentage: 25,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Enjoy the delightful taste of our diabetic-friendly cookies, crafted with low-glycemic ingredients.
Sugar-free yet full of flavor, perfect for maintaining a balanced diet.
Ideal for a guilt-free snack any time of the day.`,
            description_ar: `استمتع بالمذاق اللذيذ لبسكويتنا المناسب لمرضى السكري، المصنوع من مكونات منخفضة المؤشر الجلايسيمي.
خالٍ من السكر ولكنه غني بالنكهة، مثالي للحفاظ على نظام غذائي متوازن.
خيار مثالي لوجبة خفيفة دون شعور بالذنب في أي وقت من اليوم.`,
            rating: 4.5,
            mainImage: cookies1,
            images: [cookies1],
        },
        {
            id: "id8",
            title: "Farm Fresh Eggs",
            title_ar: "بيض طازج من المزرعة",
            price: 34,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Savor the natural goodness of our farm fresh eggs, collected daily for maximum freshness.
Rich in protein and essential nutrients to support a healthy lifestyle.
Perfect for breakfast, baking, or your favorite recipes.`,
            description_ar: `استمتع بالنقاء الطبيعي لبيضنا الطازج من المزرعة، الذي يُجمع يوميًا لضمان أقصى درجات الطزاجة.
غني بالبروتين والعناصر الغذائية الأساسية لدعم أسلوب حياة صحي.
مثالي لوجبة الإفطار، والخبز، أو وصفاتك المفضلة.`,
            rating: 4.5,
            mainImage: eggs1,
            images: [eggs1],
        },
        {
            id: "id9",
            title: "Fresh Organic Honey",
            title_ar: "عسل عضوي طازج",
            price: 34,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Enjoy the pure sweetness of our fresh organic honey, harvested from eco-friendly hives.
Packed with natural antioxidants, vitamins, and minerals.
Perfect as a natural sweetener for drinks, desserts, and everyday wellness.`,
            description_ar: `استمتع بالحلاوة النقية لعسلنا العضوي الطازج، المستخرج من خلايا نحل صديقة للبيئة.
غني بمضادات الأكسدة والفيتامينات والمعادن الطبيعية.
مثالي كمُحلي طبيعي للمشروبات والحلويات ولتعزيز صحتك اليومية.`,
            rating: 4.5,
            mainImage: honey1,
            images: [honey1],
        },
        {
            id: "id10",
            title: "Pulses From Organic Farm",
            title_ar: "بقوليات من مزرعة عضوية",
            price: 15,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Relish the wholesome goodness of our pulses, sourced directly from certified organic farms.
Naturally rich in protein, fiber, and essential minerals.
Ideal for soups, salads, and a variety of healthy recipes.`,
            description_ar: `استمتع بالقيمة الغذائية الكاملة لبقولياتنا، المأخوذة مباشرة من مزارع عضوية معتمدة.
غنية طبيعيًا بالبروتين والألياف والمعادن الأساسية.
مثالية للشوربات، والسلطات، ومجموعة متنوعة من الوصفات الصحية.`,
            rating: 4.5,
            mainImage: pulses1,
            images: [pulses1],
        },
        {
            id: "id11",
            title: "Organic Face Scrub",
            title_ar: "مقشر وجه عضوي",
            price: 35,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Revitalize your skin with our organic face scrub, made from natural exfoliating ingredients.
Gently removes dead skin cells to reveal a fresh, radiant complexion.
Free from harsh chemicals, suitable for all skin types.`,
            description_ar: `جدد بشرتك مع مقشر الوجه العضوي المصنوع من مكونات طبيعية للتقشير.
يزيل بلطف خلايا الجلد الميتة ليكشف عن بشرة منتعشة ومشرقة.
خالٍ من المواد الكيميائية القاسية ومناسب لجميع أنواع البشرة.`,
            rating: 5,
            mainImage: faceScrub1,
            images: [faceScrub1],
        },
        {
            id: "id12",
            title: "Wheat From Organic Farms",
            title_ar: "قمح من مزارع عضوية",
            price: 34,
            category: "Groceries",
            category_ar: "البقالة",
            description: `Enjoy the natural purity of our wheat, harvested from certified organic farms.
Rich in nutrients and perfect for wholesome, healthy cooking.
Ideal for baking bread, preparing pasta, or making a variety of nutritious dishes.`,
            description_ar: `استمتع بالنقاء الطبيعي لقمحنا المحصود من مزارع عضوية معتمدة.
غني بالعناصر الغذائية ومثالي للطهي الصحي والمتكامل.
مثالي لخبز الخبز، وتحضير المعكرونة، أو إعداد مجموعة متنوعة من الأطباق المغذية.`,
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
            review: "I’m so impressed with the quality of the products! Everything I ordered was fresh, well-packed, and exactly as described. It’s great to finally find a store that truly delivers on its promise of organic and natural goods. Highly recommended!",
            review_ar: `أنا معجبة جدًا بجودة المنتجات! كل ما طلبته كان طازجًا، ومعبأ بعناية، تمامًا كما هو موصوف. من الرائع أن أجد أخيرًا متجرًا يفي حقًا بوعده في تقديم منتجات عضوية وطبيعية. أنصح به بشدة!`,
            rating: 5,
        },
        {
            id: "id2",
            user: {
                username: "Mike Sendler",
                imageUrl:
                    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png",
            },
            review: "Excellent service and amazing products! The delivery was fast, and the packaging was eco-friendly, which I really appreciate. The fresh organic honey I bought was the best I’ve ever tasted. I will definitely be ordering again.",
            review_ar: `خدمة ممتازة ومنتجات رائعة! كان التوصيل سريعًا، والتغليف صديقًا للبيئة وهذا أمر أقدّره كثيرًا. عسل النحل العضوي الطازج الذي اشتريته كان الأفضل على الإطلاق. بالتأكيد سأطلب مرة أخرى.`,
            rating: 5,
        },
    ],
};

export const getProductById = (id: string) => {
    return db.products.find((product) => product.id == id);
};
