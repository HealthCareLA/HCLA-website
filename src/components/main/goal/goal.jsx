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
            className="absolute left-1/2 -translate-x-1/2 w-full z-[1] top-[-8%] hidden lg:block"
            />
            <img
            src="/images/circle-shape-bottom.png"
            alt="shape"
            className="absolute left-1/2 -translate-x-1/2 w-full z-[1] bottom-[-8%] hidden lg:block"
            />
            <div className="max-container py-[50px] relative z-[1]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                    <div className="w-full lg:max-w-1/2 text-center lg:text-left">
                        <h3 className="font-[500] text-blue mb-[35px] md:mb-[54px]">
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
                                className={`text-dark-blue p1 mt-[12px] whitespace-pre-line ${
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
                        className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
