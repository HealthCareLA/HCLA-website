import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function MainSupport(block) {
    return (
        <div className="bg-white lg:py-[150px]">
            <div className="max-container pt-[70px] md:pt-[90px] pb-[50px] md:pb-[150px]">
                <h2
                className="text-blue font-[500] leading-[40px] md:leading-[64px] mb-[33px] text-center max-w-[900px] mx-auto"
                >
                {block?.title}
                </h2>
                <p
                className="p1 text-dark-blue font-[400] mb-[25px] md:mb-[50px] text-center whitespace-pre-line max-w-[982px] mx-auto"
                >
                {block?.description}
                </p>
                <div
                className="flex flex-col lg:flex-row items-stretch justify-between gap-[25px] md:gap-[35px]"
                >
                {
                    block?.points?.map((point) => {
                    return (
                        <div className="w-full lg:max-w-1/2 bg-trans-blue even:bg-trans-blue-2 rounded-[8px] md:rounded-[18px] px-[15px] md:px-[30px] py-[15px] md:py-[22px] flex flex-col lg:flex-row items-center gap-[25px] md:gap-[40px]">
                        <img
                            src={point?.image?.src}
                            alt={point?.image?.alt}
                            width={point?.image?.width}
                            height={point?.image?.height}
                            className="w-[50px] md:w-auto"
                        />
                        <p className="text-dark-blue text-[18px] leading-[26px] text-center lg:text-left whitespace-pre-line">
                            {point?.description}
                        </p>
                        </div>
                    );
                    })
                }
                </div>
                <p
                className="mt-[25px] md:mt-[50px] text-dark-blue p1 text-center whitespace-pre-line max-w-[975px] mx-auto"
                >
                {block?.description2}
                </p>
            </div>
        </div>
    );
}
