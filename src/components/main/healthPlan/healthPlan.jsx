import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainHealthPlan(block) {

    return (
        <div className="bg-white relative">
            <div className="max-container relative z-[2] pb-12">
                <div
                    className="mt-[75px] md:mt-[150px] mb-[50px] md:mb-[100px] flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px]"
                >
                    <div className="w-full lg:max-w-1/2 relative">
                        <img
                            src={block?.image?.src}
                            alt={block?.image?.alt}
                            width={block?.image?.width}
                            height={block?.image?.height}
                            className="rounded-full object-cover w-full"
                        />
                        <img
                            src={block?.yellowCircleImage?.src}
                            alt={block?.yellowCircleImage?.alt}
                            width={block?.yellowCircleImage?.width}
                            height={block?.yellowCircleImage?.height}
                            className="absolute bottom-[-15px] right-[24px] w-[130px] md:w-[200px]"
                        />
                    </div>
                    <div className="w-full lg:max-w-1/2">
                        <p
                            className="p4 font-[500] leading-[28px] md:leading-[36px] text-blue mb-[25px] md:mb-[32px] text-center lg:text-left whitespace-pre-line"
                        >
                            {block?.description}
                        </p>
                        <div
                            className="flex flex-col text-dark-blue p2 leading-[28px] md:leading-[44px] font-[500]"
                        >
                            {
                                block?.points?.map((point) => {
                                    return (
                                        <div className="flex gap-[8px]">
                                            <i className="fa-solid fa-circle-check h-[28px] md:h-[40px] text-med-blue mt-[6px] md:mt-[12px]" />
                                            <p>{point}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        {
                            block?.buttonText && (
                                <div className="text-center lg:text-left">
                                    <a href={block?.buttonTextLink}>
                                        <button className="mt-[30px] bg-green hover:bg-highlight-green text-white p3 btn1">
                                            {block?.buttonText}
                                        </button>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
