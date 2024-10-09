import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainWecoverla(block) {

    return (
        <div className="bg-white relative pt-[50px] md:pt-[100px] lg:pb-[150px]">
            <img
                src="/images/quick-links-shape-bottom.png"
                alt="shape"
                className="absolute left-1/2 -translate-x-1/2 w-full z-[1] top-[-6%] hidden lg:block"
            />
            <div className="max-container relative z-[2]">
                <h2 className="font-medium leading-[120%] md:leading-[140%] text-blue text-center">
                    {block?.title}
                </h2>
                <p className="text-dark-blue text-center p1 my-[30px] whitespace-pre-line px-12">
                    {block?.description}
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] text-center md:text-left"
                >
                    {
                        block?.priorities?.map((item, index) => {
                            return (
                                <div
                                    key={"b1_" + index}
                                    style={{ backgroundColor: item.backgroundColor }}
                                    className={`rounded-2 md:rounded-[18px] px-5 md:px-10 py-[15px] md:py-[30px] text-white w-full`}
                                >
                                    <img
                                        src={item?.image?.src}
                                        alt={item?.image?.alt}
                                        className="mb-[15px] md:mb-[25px] mx-auto w-[30px] md:w-auto"
                                    />
                                    <p className="text-base md:text-[19px] leading-5 md:leading-[26px] whitespace-pre-line text-center">
                                        {item?.description}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
                <p
                    className="mt-[53px] p4 leading-6 md:leading-9 max-w-[575px] mx-auto font-medium text-blue text-center whitespace-pre-line"
                >
                    <a href={block?.learnMoreTextLink}>
                        {block?.learnMoreText}
                        <i className="fa-solid fa-circle-chevron-right text-green ml-1"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}
