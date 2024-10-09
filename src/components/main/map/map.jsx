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
                        <p className="text-dark-blue p1 mb-[25px] md:mb-10 whitespace-pre-line">
                            {block?.description}
                        </p>
                        <div
                            className="flex flex-col text-dark-blue text-base md:text-xl leading-7 md:leading-[44px] font-medium"
                        >
                            {
                                block?.points?.map((point, index) => {
                                    return (
                                        <div className="flex gap-2" key={"map_" + index}>
                                            <i className="fa-solid fa-circle-check h-[28px] md:h-10 text-med-blue mt-[6px] md:mt-3" />
                                            <div>
                                                <p>{point?.text}</p>
                                                {point?.extraDescription && (
                                                    <p className="font-normal p3 leading-5 md:leading-[26px]">
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
