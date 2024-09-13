import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainNetwork(block) {
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
                <div
                    className="mt-[50px] md:mt-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px]"
                >
                    <div className="w-full lg:max-w-1/2 relative">
                        <img
                            src={block?.image?.src}
                            alt={block?.image?.alt}
                            width={block?.image?.width}
                            height={block?.image?.height}
                            className="rounded-[40px] object-cover w-full"
                        />
                        <img
                            src={block?.yellowCircleImage?.src}
                            alt={block?.yellowCircleImage?.alt}
                            width={block?.yellowCircleImage?.width}
                            height={block?.yellowCircleImage?.height}
                            className="absolute bottom-[-60px] md:bottom-[-102px] right-[22px] w-[130px] md:w-[200px]"
                        />
                    </div>
                    <div className="w-full lg:max-w-1/2">
                        <h2
                            className="font-[500] leading-[40px] md:leading-[54px] text-blue mb-[32px] text-center lg:text-left"
                        >
                            {block?.title}
                        </h2>
                        <p
                            className="p1 text-dark-blue mb-[28px] text-center lg:text-left whitespace-pre-line"
                        >
                            {block?.description}
                        </p>
                        <div className="flex flex-col gap-2 text-dark-blue p1">
                            {
                                block?.points?.map((point, index) => {
                                    return (
                                        <div key={"network_" + index} className="flex gap-[8px]">
                                            <i className="fa-solid fa-circle-check h-[28px] md:h-[40px] text-med-blue mt-[6px] md:mt-[8px]" />
                                            <p>{point}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <p
                            className="p1 text-dark-blue my-[28px] text-center lg:text-left whitespace-pre-line"
                        >
                            {block?.description2}
                        </p>
                        {
                            block?.buttonText && (
                                <a href={block?.buttonTextLink}>
                                    <button className="mt-[30px] bg-green hover:bg-highlight-green text-white p3 btn1">
                                        {block?.buttonText}
                                    </button>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
