import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ProvidersSecureClinical(block) {

    return (
        <section id="Resources" suppressHydrationWarning className="bg-trans-blue py-[120px] mt-[-100px]">
            <div className="bg-trans-blue relative">
                <div className="max-container text-center relative z-[1]">
                    <h3 className="font-[500] font-outfit text-blue">
                        {block?.title}
                    </h3>
                    <div
                        className="mt-[25px] md:mt-[47px] flex flex-col lg:flex-row items-stretch gap-[25px] md:gap-[35px] justify-between"
                    >
                        <div
                            className="w-full lg:max-w-1/2 bg-white drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
                        >
                            <div className="flex flex-wrap text-left gap-[10px] md:gap-0">
                                {
                                    block?.points?.map((point, index) => {
                                        return (
                                            <div key={"clinical_" + index} className="w-full flex flex-row justify-between">
                                                <p className="text-blue font-[500] p2 leading-7 md:leading-[42px]">
                                                    <a download href={point.link}>{point.name}</a>
                                                </p>
                                                <i className="fa-solid fa-circle-chevron-right text-green text-lg md:text-xl mt-[6px] md:mt-3" aria-hidden='true'/>
                                            </div>
                                        );
                                    })
                                }
                                <div className="mt-[50px]">
                                    <button className="mx-auto bg-green hover:bg-highlight-green btn1 text-white ">
                                        <a href="/resource-provider">ALL RESOURCES</a>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div
                            className="w-full lg:max-w-1/2 bg-white drop-shadow-[0_0_10px_0_rgba(1,131,179,0.10)] rounded-lg md:rounded-[18px] px-[15px] md:px-[50px] py-[15px] md:py-[35px]"
                        >
                            <p className="p1 text-dark-blue mb-5 md:mb-[25px] whitespace-pre-line text-left" dangerouslySetInnerHTML={{ __html: block.description }}>{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
