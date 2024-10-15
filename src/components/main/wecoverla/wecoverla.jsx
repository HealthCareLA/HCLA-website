import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainWecoverla(block) {

    return (
        <div className="bg-white relative lg:pb-[150px]">
            <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-165px] hidden lg:block">
                <svg className="w-full h-[447px]" viewBox="0 0 1440 447" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440 123.895C1216.36 44.4551 973.9 0.975098 720.63 0.975098C467.36 0.975098 223.99 44.6251 0 124.345V446.065H1440V123.895Z" fill="white"/>
                </svg>
            </div>
            <div className="max-container relative z-[2] -top-12">
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
