import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainGoal(block) {

    return (

        <div className="bg-trans-blue relative md:pt-[50px] pb-[50px] md:pb-[100px] lg:py-0">
            <div className="absolute left-1/2 -translate-x-1/2 w-full top-[-165px] hidden lg:block">
                <svg className="w-full h-full" width="1440" height="446" viewBox="0 0 1440 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1440.92 122.92C1217.28 43.48 974.816 0 721.546 0C468.276 0 224.906 43.65 0.915649 123.37V445.09H1440.92V122.92Z" fill="#EEFCFF"/>
                </svg>
            </div>
            <div className="max-container pt-[40px] pb-[50px] relative z-[1]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                    <div className="w-full lg:max-w-1/2 text-center lg:text-left">
                        <h3 className="font-medium text-blue mb-[35px] md:mb-[54px]">
                            {block?.title}
                        </h3>
                        {
                        block?.descriptionData?.map((item, i) => {
                            return (
                            <>
                                <img
                                    src={item?.image?.src}
                                    alt={item?.image?.alt}
                                    width={item?.image?.width}
                                    height={item?.image?.height}
                                    className="mx-auto lg:mx-0"
                                />
                                <p
                                    className={`text-dark-blue p1 mt-3 whitespace-pre-line ${
                                        i != block?.descriptionData?.length - 1
                                        ? "mb-[25px] md:mb-[35px]"
                                        : ""
                                    }`}
                                >
                                    {item?.boldText && <b>Our Mission:</b>} {item?.description}
                                </p>
                            </>
                            );
                        })
                        }
                    </div>
                    <div className="w-full lg:max-w-1/2">
                        <img
                            src={block?.image?.src}
                            alt={block?.image?.alt}
                            width={block?.image?.width}
                            height={block?.image?.height}
                            className={`w-[450px]`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
