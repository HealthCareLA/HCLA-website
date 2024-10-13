import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainClinical(block) {
    return (
        <div className="bg-trans-blue relative py-[50px] md:py-[120px] lg:pt-0">
            <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-165px] hidden lg:block">
                <svg className="w-full h-full" width="1440" height="446" viewBox="0 0 1440 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915649 123.37V445.09H1440.92V122.92Z" fill="#EEFCFF"/>
                </svg>
            </div>
            <div className="max-container text-center relative -top-10 z-[1]">
                <h3 className="font-[500] font-outfit text-blue">
                    {block?.title}
                </h3>
                <p
                    className="p1 text-dark-blue my-[22px] text-left md:text-center whitespace-pre-line px-10"
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
