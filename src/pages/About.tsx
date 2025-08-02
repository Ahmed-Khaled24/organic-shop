import leafImg from "../assets/basil-leaf.png";
import grapesImg from "../assets/grapes.jpg";

export const About = () => {
    return (
        <main>
            <h1 className="relative text-center text-5xl font-bold font-merriweather! py-24 bg-[#f8f6f3]">
                About Us
                <img
                    src={leafImg}
                    className="absolute w-40 translate-x-[-50%] translate-y-[50%] bottom-0 left-1/2"
                />
            </h1>
            {/* We are your favorite store */}
            <section className="flex max-w-7xl mx-auto py-24 gap-16 items-center">
                <div className="w-1/2 flex flex-col gap-8 p-16">
                    <h2 className="font-bold font-merriweather! text-4xl">
                        We Are Your Favorite Store.
                    </h2>
                    <p>
                        At our core, we believe that healthy living starts with
                        what you consume—and that's why we’ve dedicated
                        ourselves to bringing you the highest quality organic
                        products, all in one convenient online store. From fresh
                        fruits and vegetables to pantry staples and natural
                        skincare, everything we offer is carefully selected from
                        trusted farms and ethical producers. We’re more than
                        just a store; we’re your partner in living a cleaner,
                        more conscious lifestyle.
                    </p>
                    <p>
                        What makes us your favorite store isn’t just our
                        products—it’s the experience. From a seamless shopping
                        journey to eco-friendly packaging and fast delivery,
                        we’re committed to making healthy choices easy and
                        accessible. Our friendly support team is always here to
                        help, and we love listening to your feedback to keep
                        improving. When you shop with us, you’re not just buying
                        organic—you’re joining a community that values quality,
                        sustainability, and well-being.
                    </p>
                </div>
                <div className="w-1/2">
                    <img src={grapesImg} className="" />
                </div>
            </section>
        </main>
    );
};
