import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainGoal(block) {

    return (

        <div
            className="bg-trans-blue relative md:pt-[50px] pb-[50px] md:pb-[100px] lg:py-0"
        >
            <img
                src="/images/circle-shape-top.png"
                alt="shape"
                className="absolute left-[0px] top-[-130px] z-[1] w-full h-[445px] hidden lg:block" 
            />
            <div className="max-container pt-[80px] pb-[50px] relative z-[1]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                    <div className="w-full lg:max-w-1/2 text-center lg:text-left">
                        <h3 className="font-medium text-blue mb-[35px] md:mb-[54px]">
                            {block?.title}
                        </h3>
                        {
                        block?.descriptionData?.map((item, i) => {
                            return (
                            <>
                                <img
                                    src={item?.image?.src}
                                    alt={item?.image?.alt}
                                    width={item?.image?.width}
                                    height={item?.image?.height}
                                    className="mx-auto lg:mx-0"
                                />
                                <p
                                    className={`text-dark-blue p1 mt-3 whitespace-pre-line ${
                                        i != block?.descriptionData?.length - 1
                                        ? "mb-[25px] md:mb-[35px]"
                                        : ""
                                    }`}
                                >
                                    {item?.boldText && <b>Our Mission:</b>} {item?.description}
                                </p>
                            </>
                            );
                        })
                        }
                    </div>
                    <div className="w-full lg:max-w-1/2">
                        <img
                            src={block?.image?.src}
                            alt={block?.image?.alt}
                            width={block?.image?.width}
                            height={block?.image?.height}
                            className={`w-[450px]`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
