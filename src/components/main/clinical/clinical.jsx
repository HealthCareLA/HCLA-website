import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainClinical(block) {
    return (
        <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0">
            <img
                src="/images/circle-shape-top.png"
                alt="circle-shape"
                className="absolute left-1/2 -translate-x-1/2 w-full z-[1] top-[-25%] hidden lg:block"
            />
            <div className="max-container text-center relative z-[1]">
                <h3 className="font-[500] font-outfit text-blue">
                    {block?.title}
                </h3>
                <p
                    className="p1 text-dark-blue my-[22px] text-left md:text-center whitespace-pre-line"
                >
                    {block?.description}
                </p>
                <div className="flex flex-wrap text-left gap-[10px] md:gap-0">
                    {
                        block?.points?.map((point, index) => {
                            return (
                                <div key={"clinical_" + index} className="w-full lg:w-1/2 flex gap-2">
                                    <i className="fa-solid fa-circle-chevron-right text-green text-[18px] md:text-xl mt-[6px] md:mt-3" />
                                    <p className="text-blue font-medium p2 leading-7 md:leading-[42px]">
                                        {point}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
                <div
                    className="mt-[25px] md:mt-[47px] flex flex-col lg:flex-row items-stretch gap-[25px] md:gap-[35px] justify-between"
                >
                    <div
                        className="w-full drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
                    >
                        {
                            block?.buttonSection?.buttonText && (
                                <a href={block?.buttonSection?.buttonLink}>
                                    <button className="bg-green hover:bg-med-blue text-white mx-auto p3 btn1">
                                        {block?.buttonSection?.buttonText}{" "}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                </a>
                            )
                        }
                    </div>
                </div>

                <div
                    className="mt-[25px] md:mt-[47px] flex flex-col lg:flex-row items-stretch gap-[25px] md:gap-[35px] justify-between"
                >
                    <div
                        className="w-full lg:max-w-1/2 bg-white drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-[8px] md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
                    >
                        <p className="p1 text-dark-blue mb-[20px] md:mb-[25px] whitespace-pre-line">
                            {block?.detailSection1?.description}
                        </p>
                        {
                            block?.detailSection1?.buttonText && (
                                <a href={block?.detailSection1?.buttonLink}>
                                    <button className="bg-blue hover:bg-med-blue text-white mx-auto p3 btn1">
                                        {block?.detailSection1?.buttonText}{" "}
                                        <i className="fa-solid fa-circle-chevron-right text-green ml-1" />
                                    </button>
                                </a>
                            )
                        }
                    </div>
                    <div
                        className="w-full lg:max-w-1/2 bg-white drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
                    >
                        <p className="p1 text-dark-blue mb-5 md:mb-[25px] whitespace-pre-line">
                            {block?.detailSection2?.description}
                        </p>
                        {
                            block?.detailSection2?.buttonText && (
                                <a href={block?.detailSection2?.buttonLink}>
                                    <button className="mx-auto bg-green hover:bg-highlight-green btn1 text-white p3">
                                        {block?.detailSection2?.buttonText}
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
