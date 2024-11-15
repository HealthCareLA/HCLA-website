import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainNetwork(block) {
    return (
        <div className="bg-trans-blue relative md:pt-[50px] pb-[50px] md:pb-[100px] lg:py-0">
            <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-[-165px] hidden lg:block">
                <svg className="w-full h-[446px]" viewBox="0 0 1440 446" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440.92 323.058C1217.28 402.498 974.816 445.978 721.546 445.978C468.276 445.978 224.906 402.328 0.915649 322.608V0.887787H1440.92V323.058Z" fill="#EEFCFF"/>
                </svg>
            </div>
            <div className="max-container pb-[40px] pt-[50px] relative z-[1]">
                <div
                    className="mt-[50px] md:mt-[120px] flex flex-col-reverse lg:flex-row items-center justify-between gap-[100px]"
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
                            className="font-medium leading-10 md:leading-[54px] text-blue mb-8 text-center lg:text-left"
                        >
                            {block?.title}
                        </h2>
                        <p
                            className="p1 text-dark-blue mb-7 text-center lg:text-left whitespace-pre-line"
                        >
                            {block?.description}
                        </p>
                        <div className="flex flex-col gap-2 text-dark-blue p1">
                            {
                                block?.points?.map((point, index) => {
                                    return (
                                        <div key={"network_" + index} className="flex gap-2">
                                            <i className="fa-solid fa-circle-check h-7 md:h-10 text-med-blue mt-[6px] md:mt-2" />
                                            <p>{point}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <p
                            className="p1 text-dark-blue my-7 text-center lg:text-left whitespace-pre-line"
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
