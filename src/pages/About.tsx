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
            <section className="flex max-w-7xl mx-auto py-24 gap-16">
                <div className="w-1/2 flex flex-col gap-8 p-16">
                    <h2 className="font-bold font-merriweather! text-4xl">
                        We Are Your Favorite Store.
                    </h2>
                    <p>
                        Tuas quisquam quo gravida proident harum, aptent ligula
                        anim consequuntur, ultrices mauris, nunc voluptates
                        lobortis, varius, potenti placeat! Fuga omnis. Cubilia
                        congue. Recusandae. Vero penatibus quasi! Nostra tenetur
                        dignissimos ultrices natus distinctio ultrices
                        consequuntur numqu.
                    </p>
                    <p>
                        Officiis fuga harum porro et? Similique rhoncus atque!
                        Netus blanditiis provident nunc posuere. Rem sequi,
                        commodo, lorem tellus elit, hic sem tenetur anim amet
                        quas, malesuada proident platea corrupti expedita.
                    </p>
                </div>
                <div className="w-1/2">
                    <img src={grapesImg} className="" />
                </div>
            </section>
        </main>
    );
};
