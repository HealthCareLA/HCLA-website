import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainMap(block) {

    return (
        <div className="bg-white relative">
            <div className="max-container relative z-[2]">
                <div
                    className="flex flex-col lg:flex-row items-center justify-between gap-[50px]"
                >
                    <div className="w-full lg:max-w-1/2">
                        <p className="text-dark-blue p1 mb-[25px] md:mb-[40px] whitespace-pre-line">
                            {block?.description}
                        </p>
                        <div
                            className="flex flex-col text-dark-blue text-[16px] md:text-[20px] leading-[28px] md:leading-[44px] font-[500]"
                        >
                            {
                                block?.points?.map((point, index) => {
                                    return (
                                        <div className="flex gap-[8px]" key={"map_" + index}>
                                            <i className="fa-solid fa-circle-check h-[28px] md:h-[40px] text-med-blue mt-[6px] md:mt-[12px]" />
                                            <div>
                                                <p>{point?.text}</p>
                                                {point?.extraDescription && (
                                                    <p className="font-[400] p3 leading-[20px] md:leading-[26px]">
                                                        {point?.extraDescription}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
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
